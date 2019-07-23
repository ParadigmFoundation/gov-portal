import React, {
  NavLink,
} from 'react';
import PropTypes from 'prop-types';

import Table from '../../../../components/table';
import ConnectMetaMask from '../../../../components/connectMetaMask';
import EmptyState from '../../../../components/emptyState';
import ChallengeSymbol from '../../../../components/symbols/challengeSymbol';
import ProposalSymbol from '../../../../components/symbols/proposalSymbol';
import AcceptedSymbol from '../../../../components/symbols/acceptedSymbol';
import RejectedSymbol from '../../../../components/symbols/rejectedSymbol';
import ConfirmSymbol from '../../../../components/symbols/confirmSymbol';
import ResolveSymbol from '../../../../components/symbols/resolveSymbol';
import ConfirmedSymbol from '../../../../components/symbols/confirmedSymbol';
import ResolvedSymbol from '../../../../components/symbols/resolvedSymbol';

import './index.scss';

function GovernanceActivityView(props) {
  const {
    metaMaskConnected,
    activities,
    confirmListing,
    resolveChallenge,
  } = props;

  function displayResult(result) {
    if (result === 'accepted') {
      return <AcceptedSymbol />;
    }

    if (result === 'rejected') {
      return <RejectedSymbol />;
    }

    return 'Pending';
  }

  function displayAction(type, actionable, listingKey, challengeId) {
    if (actionable) {
      if (type === 'proposal') {
        return (
          <ConfirmSymbol
            action={async () => confirmListing(listingKey)}
          />
        );
      }

      if (type === 'challenge') {
        return (
          <ResolveSymbol
            action={async () => resolveChallenge(challengeId)}
          />
        );
      }
    }

    if (type === 'proposal') {
      return <ConfirmedSymbol />;
    }

    if (type === 'challenge') {
      return <ResolvedSymbol />;
    }

    return 'Unkown action';
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

    function getTag(type, status, listingKey) {
      if (type === 'challenge') {
        if (status === 'pending') {
          return NavLink;
        }
      }

      if (type === 'proposal') {
        if (status === 'pending') {
          return NavLink;
        }
      }
    }

    return activities.map(activity => (
      <tr key={activity.listingKey}>
        <td className="governance-activity-view__description">
          {activity.title}
        </td>
        <td>
          {activity.type === 'challenge' ? <ChallengeSymbol /> : <ProposalSymbol />}
        </td>
        <td>
          {displayResult(activity.result)}
        </td>
        <td>
          {displayAction(
            activity.type,
            activity.actionable,
            activity.listingKey,
            activity.challengeId,
          )}
        </td>
      </tr>
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
            Type
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
  confirmListing: PropTypes.func,
  resolveChallenge: PropTypes.func,
};

GovernanceActivityView.defaultProps = {
  metaMaskConnected: false,
  activities: [],
  confirmListing: () => {},
  resolveChallenge: () => {},
};

export default GovernanceActivityView;
