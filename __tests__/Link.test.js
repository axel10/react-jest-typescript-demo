// Link.react.test.js
import React from 'react';
import Link from '../src/components/Link';
import {shallow} from 'enzyme';
import Button from '../src/components/Button';

test('Link changes the class when hovered', () => {
  const btn= shallow(<Button>123</Button>)
  const text = btn.text()
  const html = btn.html()
  debugger
  expect(btn.text()).toEqual('123')
});
