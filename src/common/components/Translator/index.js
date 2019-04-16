import React, { Component } from 'react'

import DropdownMenu from '../../components/DropdownMenu'

import btn_speak_img from '../../../assets/images/btn_speak.png'
import btn_listen_img from '../../../assets/images/btn_listen.png'
import btn_change_img from '../../../assets/images/btn_change.png'

import './index.scss'

class Translator extends Component {
  constructor (props) {
    super(props)

    this.state = {
      source_value: 'thank you',
      target_value: 'dank je'
    }
  }

  onSourceValueChanged = (value) => {
    this.setState({ source_value: value })
  }

  render() {
    return (
      <div className='translator'>
        <div className='translator-source'>
          <div className='header-section'>
            <DropdownMenu menuName={'English'} menuItems={[]} showArrow={true} />
            <div className='features'>
              <div className='features-speak'>
                <img src={btn_speak_img} alt={'Speak'} />
              </div>
              <div className='features-listen'>
                <img src={btn_listen_img} alt={'Listen'} />
              </div>
              <div className='features-change'>
                <img src={btn_change_img} alt={'Change'} />
              </div>
            </div>
          </div>
          <div className='content-section'>
            <textarea className='text-area' value={this.state.source_value} onChange={ () => this.onSourceValueChanged() } />
          </div>
        </div>
        <div className='translator-target'>
          <div className='header-section'>
            <DropdownMenu menuName={'Dutch'} menuItems={[]} showArrow={true} />
            <div className='features'>
              <div className='features-speak'>
                <img src={btn_speak_img} alt={'Speak'} />
              </div>
              <div className='features-listen'>
                <img src={btn_listen_img} alt={'Listen'} />
              </div>
            </div>
          </div>
          <div className='content-section'>
            <textarea className='text-area' value={this.state.target_value} readOnly />
          </div>
        </div>
      </div>
    )
  }
}

export default Translator
