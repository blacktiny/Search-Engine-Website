import React, { Component } from 'react'

import TopResults from '../../common/components/TopResults'
import Videos from '../../common/components/Videos'

import './index.scss'

class Glance extends Component {
  render() {
    return (
      <div className='glance'>
        <div className='tile1'>
          <TopResults />
        </div>
        <div className='tile1'>
          <Videos />
        </div>
      </div>
    );
  }
}

export default Glance;
