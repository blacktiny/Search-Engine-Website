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
      target_value: 'dank je',
      source_language: 'English',
      target_language: 'Dutch'
    }
  }

  onSourceValueChanged = (value) => {
    this.setState({ source_value: value })
  }

  onSourceLanguageSelected = (language) => {
    this.setState({ source_language: language })
  }

  onTargetLanguageSelected = (language) => {
    this.setState({ target_language: language })
  }

  render() {
    const languageArray = ['Afrikaans', 'Albanian', 'Amharic', 'Arabic', 'Armenian', 'Azerbaijani', 'Basque', 'Belarusian', 'Bengali', 'Bosnian', 
      'Bulgarian', 'Catalan', 'Cebuano', 'Chichewa', 'Chinese', 'Corsican', 'Croatian', 'Czech', 'Danish', 'Dutch', 'English', 'Esperanto', 'Estonian',
      'Filipino', 'Finnish', 'French', 'Frisian', 'Galician', 'Georgian', 'German', 'Greek', 'Gujarati', 'Haitian Creole', 'Hausa', 'Hawaiian', 'Hebrew']

    const { source_language, target_language } = this.state

    return (
      <div className='translator'>
        <div className='translator-source'>
          <div className='header-section'>
            <DropdownMenu menuName={source_language} menuItems={languageArray} showArrow={true} menuClassName={'translator'} onItemClicked={ (language) => this.onSourceLanguageSelected(language) } />
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
            <DropdownMenu menuName={target_language} menuItems={languageArray} showArrow={true} menuClassName={'translator'} onItemClicked={ (language) => this.onTargetLanguageSelected(language) } />
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
