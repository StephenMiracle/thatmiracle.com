import React from 'react'


export default function comp(props) {
  const {url, text} = props


  return (
    <a href={url} title={text}>{text}</a>
  )
}