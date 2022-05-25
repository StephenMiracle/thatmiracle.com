import React from 'react'
import { ComponentMap } from '../../componentMap'


export default function(props) {
  console.log(props)

  const getClasses = () => {
    let classes = []
    classes.push(`theme-${props.theme}`)

    return classes.join(' ')
  }

  const styles: any = {
    padding: `${props.padding_vertical || 60}px ${props.padding_horizontal || 60}px`
  }

  if (props.background_image) {
    styles.backgroundImage = `url(${props.background_image.filename})`
    styles.backgroundSize = 'cover'
    styles.backgroundPosition = 'center'
    styles.backgroundRepeat = 'no-repeat'
  }

  return (
    <section className={getClasses()} style={styles}>
      {
        props.items.map((i, idx) => {
          return (
            <div key={idx}>
              { ComponentMap[i.component](i) }
            </div>
          )
          })
      }
    </section>
  )
}