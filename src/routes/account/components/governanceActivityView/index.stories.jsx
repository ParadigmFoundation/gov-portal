import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GovernanceActivityView from '.';

const activities = [
  {
    type: 'challenge',
    title: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081 challenged your validator listing',
    result: 'rejected',
    actionable: false,
    challengeId: '3',
    challenger: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081',
    owner: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081',
    listingKey: '0xd76df5db00000000000000000000000000000000000000000000000000000000',
  },
  {
    type: 'proposal',
    title: 'You created a proposal',
    result: 'pending',
    actionable: false,
    challengeId: null,
    challenger: null,
    owner: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081',
    listingKey: '0xd76df5db00000000000000000000000000000000000000000000000000000000',
  },
  {
    type: 'proposal',
    title: 'You created a proposal',
    result: 'accepted',
    actionable: false,
    challengeId: null,
    challenger: null,
    owner: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081',
    listingKey: '0x726a2782ecac8eeb2d95eb667a16af7ad86b79ebda96275ab68aeca65b2996cb',
  },
  {
    type: 'proposal',
    title: 'You created a proposal',
    result: 'accepted',
    actionable: false,
    challengeId: null,
    challenger: null,
    owner: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081',
    listingKey: '0xb618ac8ac8288a782da1b7a6cac79ca2776f6a589d6ada2b6eeb6cb62965a65b',
  },
  {
    type: 'proposal',
    title: 'You created a proposal',
    result: 'accepted',
    actionable: false,
    challengeId: null,
    challenger: null,
    owner: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081',
    listingKey: '0x8ab79a965c9da27b649e8c306a1b62b20a229e0a276eecad7ab85a95f85eadec',
  },
  {
    type: 'challenge',
    title: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081 challenged your validator listing',
    result: 'accepted',
    actionable: true,
    challengeId: '2',
    challenger: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081',
    owner: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081',
    listingKey: '0x85e9ebca16ab75eaeca6e6e589c91ec9fa2bbda96275ab629e0b5e9dd7ab9a29',
  },
  {
    type: 'challenge',
    title: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081 challenged your proposal',
    result: 'rejected',
    actionable: true,
    challengeId: '1',
    challenger: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081',
    owner: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081',
    listingKey: '0x85e9ebca16ab75eaeca6e6e589c91ec9fa2bbda96275ab629e0b5e9dd7ab9a29',
  },
  {
    type: 'proposal',
    title: 'You created a proposal',
    result: 'rejected',
    actionable: false,
    challengeId: null,
    challenger: null,
    owner: '0x8b366a3d4e46ac5406f12766ad33e6482ce4f081',
    listingKey: '0x85e9ebca16ab75eaeca6e6e589c91ec9fa2bbda96275ab629e0b5e9dd7ab9a29',
  },
];

storiesOf('Routes/Account/GovernanceActivityView', module)
  .add('MetaMask not connected', () => (
    <div className="p-5">
      <GovernanceActivityView />
    </div>
  ))
  .add('MetaMask connected but no data', () => (
    <div className="p-5">
      <GovernanceActivityView
        metaMaskConnected
      />
    </div>
  ))
  .add('MetaMask connected and data', () => (
    <div className="p-5">
      <GovernanceActivityView
        metaMaskConnected
        activities={activities}
        confirmListing={action('clicked')}
        resolveChallenge={action('clicked')}
      />
    </div>
  ));
