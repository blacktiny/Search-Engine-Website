import React, { Component } from 'react'

import MenuItem from '../MenuItem/MenuItem'

import './Menubar.scss'

class Menubar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      curSelectedItemName: ''
    }
  }

  onItemClicked = itemName => {
    this.setState({ curSelectedItemName: itemName })
  }

  render() {
    const { curSelectedItemName } = this.state

    return (
      <div className='menuBar'>
        <div className='menuItems-section'>
          <MenuItem itemName={'Glance'} isClicked={curSelectedItemName === 'Glance'} onItemClicked={(itemName) => this.onItemClicked(itemName)} />
          <MenuItem itemName={'All'} isClicked={curSelectedItemName === 'All'} onItemClicked={(itemName) => this.onItemClicked(itemName)} />
          <MenuItem itemName={'Images'} isClicked={curSelectedItemName === 'Images'} onItemClicked={(itemName) => this.onItemClicked(itemName)} />
          <MenuItem itemName={'News'} isClicked={curSelectedItemName === 'News'} onItemClicked={(itemName) => this.onItemClicked(itemName)} />
          <MenuItem itemName={'Videos'} isClicked={curSelectedItemName === 'Videos'} onItemClicked={(itemName) => this.onItemClicked(itemName)} />
          <MenuItem itemName={'Maps'} isClicked={curSelectedItemName === 'Maps'} onItemClicked={(itemName) => this.onItemClicked(itemName)} />
          <button className='btn btn-settings'>
            <div className='btn-text'>
              {'More'}
            </div>
          </button>
        </div>
        <div className='settings-section'>
          <button className='btn btn-settings'>{'Settings'}</button>
          <button className='btn btn-tools'>{'Tools'}</button>
        </div>
      </div>
    );
  }
}

export default Menubar;
