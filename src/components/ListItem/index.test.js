import React from 'react'
import { shallow } from 'enzyme'

import ListItem from './'

const props = {
  item: {
    id: 1,
    done: false
  }
}

const wrapper = shallow(
  <ListItem {...props} />
)

describe('List item', () => {
  test('ListItem component must return a list item', () => {
    expect(wrapper.find('li').type()).toBe('li')
  })
})
