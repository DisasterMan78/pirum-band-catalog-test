/* globals describe, it */
import React from 'react';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { stub } from 'sinon';
import sinonChai from 'sinon-chai';

import ToggleButton from './toggle-button';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());
chai.use(sinonChai);

const onClick = stub(),
      Component = () => (
        <ToggleButton onClick={onClick} />
      ),
      wrapper = mount(<Component />);

describe('Toggle button component', () => {
  it('should render without crashing', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should render a button', () => {
    expect(wrapper.find('button').length)
      .to.equal(1);
  });

  it('should call the onClick function when clicked', () => {
    const button = wrapper.find('button');

    button.simulate('click');

    // eslint-disable-next-line no-unused-expressions
    expect(onClick)
      .to.have.been.calledOnce;
  });
});
