import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import down_arrow_icon from '../../../assets/images/icon/down_arrow.png'

import './index.scss'

class DropdownMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dropdownIsOpen: false
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleClickEvent)
  }

  handleClickEvent = event => {
    const element = event.target.className
    console.log(event.target.className)

    if (element === 'menu-default' || element === 'menuItem' || element === 'menu-weather') {
    } else {
      this.setState({ dropdownIsOpen: false })
    }
  }

  onMenuClicked = () => {
    const { dropdownIsOpen } = this.state
    
    this.setState({ dropdownIsOpen: !dropdownIsOpen })
  }

  onDropdownMenuItemClicked = (item) => {
    const { onItemClicked } = this.props

    this.setState({ dropdownIsOpen: false })
    onItemClicked(item)
  }

  render() {
    const { dropdownIsOpen } = this.state
    const { menuName, menuItems } = this.props
    let { menuClassName, menuItemClassName, showArrow } = this.props

    if (menuClassName === undefined) menuClassName = 'default'
    if (showArrow === undefined) showArrow = false

    let contentItems = ''
    if (menuItems) {
      contentItems = menuItems.map((item, index) => {
        return (
          <div key={index} className='menuItem' onClick={ () => this.onDropdownMenuItemClicked(item) }>{item}</div>
        )
      })
    }

    return (
      <div className='dropdownMenu'>
        <div className='menuSection' onClick={ () => this.onMenuClicked() }>
          <div className={`menu-${menuClassName}`}>{menuName}</div>
          { showArrow && <img src={down_arrow_icon} alt={'down_arrow'} /> }
        </div>
        { dropdownIsOpen && <div className={classNames('contentSection', `contentSection-${menuClassName}`)}>
          {contentItems}
        </div> }
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  menuName: PropTypes.string.isRequired,
  menuClassName: PropTypes.string,
  menuItems: PropTypes.array.isRequired,
  menuItemClassName: PropTypes.string,
  showArrow: PropTypes.bool,
  onItemClicked: PropTypes.func
}

export default DropdownMenu
