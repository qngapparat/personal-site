import React, { Fragment } from 'react'
import './style.css'

interface Props {
  history: string[]
}

export function HistoryRow(props:Props){
  return (
    <Fragment>
      {props.history.map(line => <Fragment>{line}<br /></Fragment>)}
    </Fragment>
  )
}

