import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Cont from './container/index'

const App = () => {
  return (
    <Cont show='left' />
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
