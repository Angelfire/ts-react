import * as React from 'react';
import * as enzyme from 'enzyme';
import StatefulHello from './StatefulHello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<StatefulHello name="Andres" />);
  expect(hello.find('.greeting').text()).toEqual('Hello Andres!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<StatefulHello name="Andres" enthusiasmLevel={1} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Andres!');
});

it('renders the correct text with and explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<StatefulHello name="Andres" enthusiasmLevel={5} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Andres!!!!!');
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<StatefulHello name="Andres" enthusiasmLevel={-1} />);
  }).toThrow();
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<StatefulHello name="Andres" enthusiasmLevel={0} />);
  }).toThrow();
});