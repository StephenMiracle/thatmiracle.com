import React from 'react'

export default function comp(props) {
  const { content, color, font_size, level, align } = props
  console.log(props)

    const classes = []
    classes.push(`text-${color} py-4`)
    classes.push(`text-${font_size}`)
    classes.push(`text-${align}`)
    const finalClasses = classes.join(' ')

  const getLevel = () => {
    switch (level) {
      case 'h1':
        return <h1 className={finalClasses}>{content}</h1>
      case 'h2':
        return <h2 className={finalClasses}>{content}</h2>
      case 'h3':
        return <h3 className={finalClasses}>{content}</h3>
      case 'h4':
        return <h4 className={finalClasses}>{content}</h4>
      case 'h5':
        return <h5 className={finalClasses}>{content}</h5>
        default:
          return <h1 className={finalClasses}>{content}</h1>
    }
  }

  return (
    <>{ getLevel() }</>
  )
}