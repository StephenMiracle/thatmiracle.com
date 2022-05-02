import React from 'react'
import { ComponentMap } from '../../componentMap'


export default function comp(props) {
  const { items, background_image } = props
  
  const styles: any = {
    padding: `${props.padding_vertical || 60}px ${props.padding_horizontal || 60}px`
  }

  if(background_image){
    styles.backgroundImage = `url('${background_image.filename}')`
    styles.backgroundSize = 'cover'
    styles.backgroundPosition = 'center'
    styles.backgroundRepeat = 'no-repeat'
  }

  return (
    <div className="container mx-auto" style={styles}>
      {
        items.map((i, idx) => {
          return (
            <div key={idx}>
              {  ComponentMap[i.component](i) }
            </div>
          )
          })
      }
    </div>
  )
}