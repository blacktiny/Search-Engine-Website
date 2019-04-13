import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

class DropdownMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dropdownIsOpen: false
    }
  }

  onMenuClicked = () => {
    const { dropdownIsOpen } = this.state
    
    this.setState({ dropdownIsOpen: !dropdownIsOpen })
  }

  onDropdownMenuItemClicked = (item) => {
    this.setState({ dropdownIsOpen: false })
  }

  render() {
    const { dropdownIsOpen } = this.state
    const { menuName, menuItems } = this.props

    let contentItems = menuItems.map((item, index) => {
      return (
        <div key={index} className='menuItem' onClick={ (item) => this.onDropdownMenuItemClicked(item) }>{item}</div>
      )
    })

    return (
      <div className='dropdownMenu'>
        <div className='menuSection' onClick={ () => this.onMenuClicked() }>{menuName}</div>
        { dropdownIsOpen && <div className='contentSection'>
          {contentItems}
        </div> }
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  menuName: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
  onItemClicked: PropTypes.func
}

export default DropdownMenu
