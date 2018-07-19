import * as React from 'react'

interface contProps {
  show: string
}

export default class Cont extends React.Component <contProps, {}> {
  state = {isNav: this.props.show}
  change (nav: string) {
    this.setState({ isNav: nav })
  }
  render () {
    return (
      <div>
        <button type="button" className="btn btn-info">anchors</button>
        <button type="button" className="btn btn-info">users</button>
      </div>
    )
  }
}