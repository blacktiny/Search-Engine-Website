import React, { Component } from 'react'

import TopResults from '../../common/components/TopResults'
import Videos from '../../common/components/Videos'
import Photos from '../../common/components/Photos'

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
      </div>
    );
  }
}

export default Glance;
