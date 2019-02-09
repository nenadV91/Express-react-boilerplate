import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />)
  })

  describe('layout', () => {
    it('has id app', () => {
      expect(app).to.have.id('app')
    })
  })
})