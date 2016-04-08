import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BinaryChart from '../BinaryChart';

describe('BinaryChart', () => {
    it('can be rendered without parameters', () => {
        expect(<BinaryChart />).to.not.throw;
    });

    it('renders a div', () => {
        const wrapper = shallow(<BinaryChart />);
        expect(wrapper.type()).to.equal('div');
    });
});
