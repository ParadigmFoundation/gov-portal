import {
  getPastActivities,
} from './kosu';

async function getAllBalances(gov, address) {
  const ethBalanceReq = await gov.web3.eth.getBalance(address);
  const ethBalance = gov.web3.utils.fromWei(ethBalanceReq.toString());

  const walletBalanceReq = await gov.kosu.kosuToken.balanceOf(address);
  const walletBalance = gov.web3.utils.fromWei(walletBalanceReq.toString());

  const systemBalanceReq = await gov.kosu.treasury.systemBalance(address);
  const systemBalance = gov.web3.utils.fromWei(systemBalanceReq.toString());

  const totalBalance = gov.web3.utils.fromWei(walletBalanceReq.plus(systemBalanceReq).toString());

  const bondedTokensReq = await gov.kosu.posterRegistry.tokensRegisteredFor(address);
  const bondedTokens = gov.web3.utils.fromWei(bondedTokensReq.toString());

  const treasuryBalanceReq = await gov.kosu.treasury.currentBalance(address);
  const treasuryBalance = gov.web3.utils.fromWei(treasuryBalanceReq.toString());

  const stakedTokens = gov.web3.utils.fromWei(
    systemBalanceReq.minus(treasuryBalanceReq).minus(bondedTokensReq).toString(),
  );

  const allowanceReq = await gov.kosu.treasury.treasuryAllowance();
  const allowance = gov.web3.utils.fromWei(allowanceReq.toString());

  const activities = await getPastActivities(
    gov.kosu,
    address,
  );

  return {
    ethBalance,
    walletBalance,
    systemBalance,
    bondedTokens,
    treasuryBalance,
    totalBalance,
    stakedTokens,
    allowance,
    activities,
  };
}

export {
  getAllBalances,
};
