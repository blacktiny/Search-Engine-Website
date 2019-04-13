import React, { Component } from 'react'

import logo_img from '../../../../assets/images/logo.png'

import './Searchbar.scss'

class Searchbar extends Component {
  render() {
    return (
      <div className='search'>
        <img src={logo_img} alt={'Logo'} />
      </div>
    );
  }
}

export default Searchbar;
