import React, { Component } from 'react'

import TopResults from '../../common/components/TopResults'

import './index.scss'

class Glance extends Component {
  render() {
    return (
      <div className='glance'>
        <div className='tile1'>
          <TopResults />
        </div>
      </div>
    );
  }
}

export default Glance;
