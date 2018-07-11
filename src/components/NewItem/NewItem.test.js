/* globals describe, expect, test */

import React from 'react'
import { createStore } from 'redux'
import { shallow } from 'enzyme'

import ConnectedApp from './NewItem'

import reducer from '../../reducer'
const store = createStore(reducer)

const wrapper = shallow(
  <ConnectedApp store={store} />
).dive()

describe('NewItem', () => {
  test('NewItem should return a text type input', () => {
    expect(wrapper.find('input').type()).toBe('input')
  })
})
