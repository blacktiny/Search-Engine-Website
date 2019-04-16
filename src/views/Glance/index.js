import React, { Component } from 'react'

import TopResults from '../../common/components/TopResults'
import Videos from '../../common/components/Videos'
import Photos from '../../common/components/Photos'
import Maps from '../../common/components/Maps'
import About from '../../common/components/About'
import UpcomingEvents from '../../common/components/UpComingEvents'
import ThingsToDo from '../../common/components/ThingsToDo'
import Weather from '../../common/components/Weather'

import './index.scss'

class Glance extends Component {
  render() {
    return (
      <div className='glance'>
        <div className='tile1 tile-topresults'>
          <TopResults />
        </div>
        <div className='tile1 tile-videos'>
          <Videos />
        </div>
        <div className='tile1 tile-photos'>
          <Photos />
        </div>
        <div className='tile1 tile-maps'>
          <Maps />
        </div>
        <div className='tile1 tile-about'>
          <About />
        </div>
        <div className='tile1 tile-upcoming'>
          <UpcomingEvents />
        </div>
        <div className='tile1 tile-things'>
          <ThingsToDo />
        </div>
        <div className='tile1 tile-weather'>
          <Weather />
        </div>
      </div>
    )
  }
}

export default Glance
