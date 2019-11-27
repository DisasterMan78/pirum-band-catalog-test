/* globals describe, it */
import React from 'react';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

import ErrorDisplay from './error-display';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());
chai.use(sinonChai);

let error = 'It\'s all gone a bit Pete Tong!'

const Component = () => (<ErrorDisplay error={error} />),
      wrapper = mount(<Component />);

describe('Error display component', () => {
  it('should render without crashing', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should render a paragraph to display the error', () => {
    const paragraph = wrapper.find('p.error-display');

    expect(paragraph.length)
      .to.equal(1);
  });

  it('should offer advice for "Failed to fetch" error', () => {
    const errorMessage = wrapper.find('.error-message');

    expect(errorMessage.text())
      .to.equal(error);
  });

  it('should offer advice for "Failed to fetch" error', () => {
    error = 'Failed to fetch';

    const AdviceComponent = () => (<ErrorDisplay error={error} />),
          adviceWrapper = mount(<AdviceComponent />),
          advice = adviceWrapper.find('.error-advice');

    expect(advice.length)
      .to.equal(1);

    expect(advice.text())
      .to.equal('Is json-server running? Check README.md for info');
  });
});
