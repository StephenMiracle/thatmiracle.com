import React from 'react'
import { ComponentMap } from '../../componentMap'

export default function comp(props) {
  const { columns } = props
  console.log(columns)

  return (
    <div className="flex">
      {
        columns.map((item, index) => {
          return (
            <div key={index} className="flex-1">
              { item.component && ComponentMap[item.component](item) }
            </div>
          )
        }
        )
      }
    </div>

  )
}