import React from 'react'
import { ComponentMap } from '../../componentMap'

export default function comp(props) {
  const { items, width } = props

  const getClasses = () => {
    const classes = ['mx-auto']
    classes.push(`lg:w-${width}`)
    return classes.join(' ')
  }

  return (
    <div>
      {items.map((item, index) => {
        return (
          <div className={getClasses()} key={index}>
            {item.component && ComponentMap[item.component](item)}
          </div>
        )
      })}
    </div>
  )
}