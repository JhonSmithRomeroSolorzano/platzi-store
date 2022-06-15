import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Footer render', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Test UI Footer Component', () => {
    const footer = create(<Footer> </Footer>);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
