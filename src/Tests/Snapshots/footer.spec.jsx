import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer/Footer';

test('Snapshot testing', () => {
  const tree = renderer.create(< Footer/>).toJSON();
  expect(tree).toMatchSnapshot();
});
