import React from 'react';
import renderer from 'react-test-renderer';
import Testing from '../pages/testing';

describe('test suite', () => {
  it('testing', () => {
    expect.hasAssertions();
    const component = renderer.create(<Testing />);
    const tree = component.toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <h1>
        Testing Component
      </h1>
    `);
  });
});
