import React from 'react'
import './style.css'

interface Props {
  text: string,
  onExitTerminal: () => void
}

export function Menubar({ text, onExitTerminal }: Props) {
  return (
    <div className="menubar">
      <div className="menurow">
        <div className="dotrow">
          <a 
            className="dot bgred" 
            onClick={onExitTerminal}
            href="#"
          />
          <a 
            className="dot bgyellow" 
            onClick={onExitTerminal}
            href="#"
          />
          <a 
            className="dot bggreen" 
            href="#"
          />
        </div>

        <div className="headerrow">
        {text || ""}
        </div>
      </div>
    </div>
  )
}