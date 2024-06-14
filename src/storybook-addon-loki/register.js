import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import React from 'react';

const Panel = () => {
  const referenceImage = 'path/to/reference/image.png';
  const currentImage = 'path/to/current/image.png';
  const differenceImage = 'path/to/difference/image.png';

  return (
    <div style={{ padding: '10px' }}>
      <h3>Reference</h3>
      <img src={referenceImage} alt="Reference" style={{ maxWidth: '100%' }} />
      <h3>Current</h3>
      <img src={currentImage} alt="Current" style={{ maxWidth: '100%' }} />
      <h3>Difference</h3>
      <img src={differenceImage} alt="Difference" style={{ maxWidth: '100%' }} />
    </div>
  );
};

addons.register('my/loki-addon', () => {
  addons.add('my/loki-panel', {
    type: types.PANEL,
    title: 'Loki Snapshots',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Panel />
      </AddonPanel>
    ),
  });
});