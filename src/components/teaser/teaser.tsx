import React from 'react'
import { ComponentMap } from '../../componentMap'

export default function comp(props) {
  const { content } = props

  return (
    <div className="flex">
      {
        content.map((item, index) => {
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