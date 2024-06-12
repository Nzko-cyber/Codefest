import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button/Button';

test('Snapshot testing succesfuly', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
