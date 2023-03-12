import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

export default class BG extends Component {
  render () {
    return (
      <>
        <ParticlesBg type="circle" bg={true} />
      </>
    )
  }
}