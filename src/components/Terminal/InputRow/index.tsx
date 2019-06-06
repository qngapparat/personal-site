import React, { useState } from 'react'
import './style.css'


interface Props {
  prompt: string,
  text: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onSubmit: () => void;
}

export function InputRow(props: Props) {

  function focusAgain(){
    (document.getElementById('input') as HTMLInputElement).focus()
  }

  function submit(event: React.FormEvent<HTMLFormElement>){
    // clear and pass value
    (document.getElementById('input') as HTMLInputElement).value = ""
    event.preventDefault();
    props.onSubmit()
  }

  return (
    <form onSubmit={submit}>
      <div className="inputrow">
        {props.prompt}
        &nbsp;
        <input
          type="text"
          id="input"
          onChange={props.onChange}
          onBlur={focusAgain}
          autoComplete="off"
          autoFocus
          spellCheck={false}
        />
      </div>
    </form>
  )
}