import React from 'react'
import { createStore } from 'redux'
import { shallow } from 'enzyme'

import ConnectedApp from './'

import reducer from '../../reducer'
const store = createStore(reducer)

const wrapper = shallow(
  <ConnectedApp store={store} />
).dive()

describe('UnorderedList', () => {
  test('Unordered list must have at list one li child', () => {
    expect(wrapper.find('ul').children()).toHaveLength(7)
  })
})
