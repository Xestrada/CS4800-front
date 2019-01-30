import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/portfolio/DefaultPage';

describe('portfolio/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      portfolio: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.portfolio-default-page').length
    ).toBe(1);
  });
});
