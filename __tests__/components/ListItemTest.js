import 'react-native';
import React from 'react';
import { Text, Image } from 'react-native';
import { shallow } from 'enzyme';
import chai from 'chai';
const expect = chai.expect;

import ListItem from '../../components/ListItem';

import renderer from 'react-test-renderer';

describe('ListItem', () => {
  beforeEach(() => {
    this.todo = {
      path: 'fake/path.png',
      title: 'super cool title',
    }
    this.navigator = []
    this.wrapper = shallow(
      <ListItem
        todo={ this.todo }
        navigator={ this.navigator }
      />
    )
  })

  it('renders components correctly', () => {
    const text = this.wrapper.find(Text)
    expect(text).to.have.length(1)
    expect(text.props().children).to.equal(this.todo.title)

    const image = this.wrapper.find(Image)
    expect(image).to.have.length(1)
    expect(image.props().source.uri).to.equal(this.todo.path)
  });

  it.skip('pushes new scene on press', () => {})
})
