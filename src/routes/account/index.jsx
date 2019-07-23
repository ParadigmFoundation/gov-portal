/**
 * Handles the logic of the Account portal
 */

import React, {
  useContext,
  useState,
  useEffect,
} from 'react';

import GovContext from '../../store/govContext';

import AccountView from './components/accountView';

function Account() {
  const {
    gov,
    isReady,
  } = useContext(GovContext);

  const [totalBalance, setTotalBalance] = useState();
  const [walletBalance, setWalletBalance] = useState();
  const [systemBalance, setSystemBalance] = useState();
  const [bondedTokens, setBondedTokens] = useState();
  const [tokensStakedFor, setTokensStakedFor] = useState();
  const [treasuryBalance, setTreasuryBalance] = useState();

  useEffect(() => {
    async function fetchBalances() {
      if (isReady) {
        const { coinbase } = gov;

        const walletBalanceReq = await gov.kosu.kosuToken.balanceOf(coinbase);
        setWalletBalance(walletBalanceReq.toString());

        const systemBalanceReq = await gov.kosu.treasury.systemBalance(coinbase);
        setSystemBalance(systemBalanceReq.toString());

        setTotalBalance(walletBalanceReq.plus(systemBalanceReq).toString());

        const bondedTokensReq = await gov.kosu.posterRegistry.tokensRegisteredFor(coinbase);
        setBondedTokens(bondedTokensReq.toString());

        const treasuryBalanceReq = await gov.kosu.treasury.currentBalance(coinbase);
        setTreasuryBalance(treasuryBalanceReq.toString());

        setTokensStakedFor(
          systemBalanceReq.minus(treasuryBalanceReq).minus(bondedTokensReq).toString(),
        );
      }
    }

    fetchBalances();
  }, [isReady]);

  return (
    <AccountView
      metaMaskConnected={isReady}
      walletBalance={walletBalance}
      totalBalance={totalBalance}
      systemBalance={systemBalance}
      bondedTokens={bondedTokens}
      tokensStakedFor={tokensStakedFor}
      treasuryBalance={treasuryBalance}
      confirmListing={isReady && gov.kosu.validatorRegistry.confirmListing()}
      resolveChallenge={isReady && gov.kosu.validatorRegistry.confirmListing()}
      bondTokens={isReady && gov.kosu.posterRegistry.registerTokens}
      addToTreasury={isReady && gov.kosu.treasury.deposit}
      removeTreasury={isReady && gov.kosu.treasury.withdraw()}
    />
  );
}

export default Account;
