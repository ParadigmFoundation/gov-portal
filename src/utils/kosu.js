import BigNumber from 'bignumber.js';

const ORDER_MAX = new BigNumber(15000);

async function updateBalance(kosu, balance, newBalance) {
  const newBalanceBn = new BigNumber(kosu.web3.utils.toWei(newBalance));
  const balanceBn = new BigNumber(kosu.web3.utils.toWei(balance));

  if (newBalanceBn.isGreaterThan(balanceBn)) {
    return kosu.treasury.deposit(newBalanceBn.minus(balanceBn));
  }

  return kosu.treasury.withdraw(balanceBn.minus(newBalanceBn));
}

async function bond(kosu, value, newValue) {
  const valueBn = new BigNumber(kosu.web3.utils.toWei(value));
  const newValueBn = new BigNumber(kosu.web3.utils.toWei(newValue));

  if (newValueBn.isGreaterThan(valueBn)) {
    return kosu.posterRegistry.registerTokens(newValueBn.minus(valueBn));
  }

  return kosu.posterRegistry.releaseTokens(valueBn.minus(newValueBn));
}

async function pay(kosu, value) {
  return kosu.kosuToken.pay(
    kosu.web3.utils.toWei(value),
  );
}

async function estimateEtherToToken(kosu, value) {
  const estimate = await kosu.kosuToken.estimateEtherToToken(
    kosu.web3.utils.toWei(value),
  );

  return kosu.web3.utils.fromWei(estimate.toString()).substring(0, 4);
}

async function estimateNewPostLimit(kosu, newBalance) {
  const totalBonded = await kosu.posterRegistry.tokensContributed();
  const newBalanceBn = new BigNumber(kosu.web3.utils.toWei(newBalance));
  const newTotal = totalBonded.plus(newBalanceBn);

  const futureProportion = newBalanceBn.div(newTotal);
  const futureLimit = futureProportion.times(ORDER_MAX);
  return futureLimit.toString();
}

async function getPastActivities(kosu, user) {
  const govActivity = await kosu.eventEmitter.getPastDecodedLogs({
    fromBlock: 0,
  });

  const activities = [];

  for (let i = 0; i < govActivity.length; i += 1) {
    switch (govActivity[i].decodedArgs.eventType) {
      case 'ValidatorRegistered': {
        if (user !== govActivity[i].decodedArgs.owner) {
          break;
        }

        const {
          owner,
          tendermintPublicKeyHex,
        } = govActivity[i].decodedArgs;

        const item = {
          type: 'proposal',
          title: 'You created a proposal',
          status: null,
          actionable: null,
          challengeId: null,
          challenger: null,
          owner,
          listingKey: tendermintPublicKeyHex,
        };

        const listing = await kosu.validatorRegistry.getListing(tendermintPublicKeyHex);

        if (listing.status === 1 && listing.confirmationBlock === 0) {
          item.actionable = true;
          item.status = 'pending';
        } else if (listing.status === 2) {
          item.actionable = false;
          item.status = 'accepted';
        } else if (listing.status === 0) {
          item.actionable = false;
          item.status = 'rejected';
        } else if (listing.status === 3) {
          item.actionable = false;
          item.status = 'pending';
        }

        activities.push(item);
        break;
      }
      case 'ValidatorChallenged': {
        const {
          owner,
          challenger,
          tendermintPublicKeyHex,
          challengeId,
        } = govActivity[i].decodedArgs;

        if (owner !== user && challenger !== user) {
          break;
        }

        const item = {
          type: 'challenge',
          title: null,
          status: null,
          actionable: null,
          challengeId,
          challenger,
          owner,
          listingKey: tendermintPublicKeyHex,
        };

        const challenge = await kosu.validatorRegistry.getChallenge(challengeId);
        const { listingSnapshot } = challenge;

        if (owner === user) {
          item.title = `${challenger} challenged your ${listingSnapshot.status === 1 ? 'proposal' : 'validator listing'}`;
        } else {
          item.title = `You challenged ${owner}'s ${listingSnapshot.status === 1 ? 'proposal' : 'validator listing'}`;
        }

        if (challenge.finalized === true) {
          item.actionable = true;
          if (challenge.passed === true) {
            item.status = 'accepted';
          } else if (challenge.passed === false) {
            item.status = 'rejected';
          }
        } else {
          item.actionable = false;
          item.status = 'pending';
        }

        activities.push(item);
        break;
      }

      default:
        break;
    }
  }

  return activities;
}

export {
  updateBalance,
  bond,
  estimateEtherToToken,
  pay,
  estimateNewPostLimit,
  getPastActivities,
};
