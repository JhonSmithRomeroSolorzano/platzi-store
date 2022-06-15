import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';

describe('<Header />', () => {
  test('Header render', () => {
    const header = shallow(<ProviderMock><Header /></ProviderMock>);
    expect(header.length).toEqual(1);
  });

  test('Render title', () => {
    const header = mount(<ProviderMock><Header /></ProviderMock>);
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header Snapshot', () => {
  test('Test UI Header Component', () => {
    const header = create(<ProviderMock> <Header> </Header></ProviderMock>);
    expect(header.toJSON()).toMatchSnapshot();
  });
});

