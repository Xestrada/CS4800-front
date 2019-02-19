import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/srs/DefaultPage';

describe('srs/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      srs: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.srs-default-page').length
    ).toBe(1);
  });
});
