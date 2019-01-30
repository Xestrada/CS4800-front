import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/meetings/DefaultPage';

describe('meetings/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      meetings: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.meetings-default-page').length
    ).toBe(1);
  });
});
