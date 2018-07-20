import React, { Component } from 'react'
// import axios from 'axios'
import List from './List/index'
import './index.css'

const axios = require('axios')

interface contProps {
  show: string
}

export default class Cont extends Component <contProps, {
  isNav: string,
  data: object[]
}> {
  state = {isNav: this.props.show, data: []}
  change (nav: string) {
    // 请求数据
    interface end {
      data: any
    }
    axios(`/data/${nav}`).then((result: end) => {
      let { data } = result
      this.setState({ isNav: nav, data: data['data'] })
    })
  }
  render () {
    let { data, isNav } = this.state
    return (
      <div>
        <div>
          <button onClick={() => this.change('left')} type="button" className="btn btn-info">anchors</button>
          <button onClick={() => this.change('right')} type="button" className="btn btn-info">users</button>
        </div>
        <List data={data} />
      </div>
    )
  }
}