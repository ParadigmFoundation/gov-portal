import React, {
  useContext,
} from 'react';
import PropTypes from 'prop-types';

import Table from '../../../../components/table';
import ConnectMetaMask from '../../../../components/connectMetaMask';
import EmptyState from '../../../../components/emptyState';
import AcceptedSymbol from '../../../../components/symbols/acceptedSymbol';
import RejectedSymbol from '../../../../components/symbols/rejectedSymbol';
import ConfirmSymbol from '../../../../components/symbols/confirmSymbol';
import ResolveSymbol from '../../../../components/symbols/resolveSymbol';
import ConfirmedSymbol from '../../../../components/symbols/confirmedSymbol';
import ResolvedSymbol from '../../../../components/symbols/resolvedSymbol';

import Link from '../../../../components/link';

import './index.scss';
import Button from '../../../../components/button';

import GovContext from '../../../../store/govContext';

function GovernanceActivityView(props) {
  const {
    metaMaskConnected,
    activities,
    confirmListing,
    resolveChallenge,
    pastChallenges,
  } = props;

  const govContext = useContext(GovContext);

  const {
    gov,
  } = govContext;

  function displayResult(result) {
    if (result === 'ACCEPTED') {
      return <AcceptedSymbol />;
    }

    if (result === 'REJECTED') {
      return <RejectedSymbol />;
    }

    return 'Pending';
  }

  function displayAction(type, actionable, listingKey, challengeId, result) {
    if (actionable) {
      if (type === 'PROPOSAL') {
        return (
          <Button
            text="Confirm"
            action={async () => confirmListing(listingKey)}
            onceConfirmed={() => { }}
            isAsync
          />
        );
      }

      return (
        <Button
          text="Resolve"
          action={async () => resolveChallenge(listingKey)}
          onceConfirmed={() => { }}
          isAsync
        />
      );
    }

    if (!actionable && result === "PENDING") {
      if (type === 'PROPOSAL') {
        return (
          <Link
            text="Challenge"
            to={`/proposal/${listingKey}`}
          />
        );
      }

      if (type === 'CHALLENGE_BY' || type === 'CHALLENGE_AGAINST') {
        return (
          <Link
            text="Vote"
            to={`/challenge/${challengeId}`}
          />
        );
      }
    }

    // if no action possible, activity is resolved
    return (
      <ResolvedSymbol />
    );
  }

  function displayContent() {
    if (!metaMaskConnected) {
      return (
        <tr>
          <td colSpan="6">
            <ConnectMetaMask
              text="Connect to MetaMask to see your activity."
              small
            />
          </td>
        </tr>
      );
    }

    function returnTitle(type) {
      if (type === 'PROPOSAL') {
        return 'You created a proposal';
      }

      if (type === 'CHALLENGE_BY') {
        return 'You challenged a proposal';
      }

      if (type === 'CHALLENGE_AGAINST') {
        return 'Your proposal has been challenged';
      }

      return '...';
    }

    if (activities.length === 0) {
      return (
        <tr>
          <td colSpan="6">
            <EmptyState
              text="No data found"
              small
            />
          </td>
        </tr>
      );
    }

    return activities.map((activity, id) => (
      // eslint-disable-next-line
      < tr key={`activitiy-${id}`}>
        <td className="governance-activity-view__description">
          {returnTitle(activity.type)}
        </td>
        <td>
          {displayResult(activity.result)}
        </td>
        <td>
          {displayAction(
            activity.type,
            activity.actionable,
            activity.listingPubKey,
            activity.challengeId,
            activity.result,
          )}
        </td>
      </tr >
    ));
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>
            Description
          </th>
          <th>
            Result
          </th>
          <th>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {displayContent()}
      </tbody>
    </Table>
  );
}

GovernanceActivityView.propTypes = {
  metaMaskConnected: PropTypes.bool,
  activities: PropTypes.arrayOf(PropTypes.object),
  pastChallenges: PropTypes.arrayOf(PropTypes.object),
  confirmListing: PropTypes.func,
  resolveChallenge: PropTypes.func,
};

GovernanceActivityView.defaultProps = {
  metaMaskConnected: false,
  activities: [],
  pastChallenges: [],
  confirmListing: () => { },
  resolveChallenge: () => { },
};

export default GovernanceActivityView;
