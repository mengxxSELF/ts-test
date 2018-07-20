import * as React from 'react'

export default (props: { data: any[] }) => {
  let {data} = props
  return (
    <div>
      {
        data && data.length > 0 && data.map((item) => <p>{item['name']}</p>)
      }
    </div>
  )
}