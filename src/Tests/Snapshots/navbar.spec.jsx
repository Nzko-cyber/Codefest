import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../../components/Navbar/Navbar';

test('Snapshot testing', () => {
  const tree = renderer.create(< Navbar/>).toJSON();
  expect(tree).toMatchSnapshot();
});
