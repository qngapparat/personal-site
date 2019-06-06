import React, { useState, Fragment } from 'react'
import './style.css'
import { Menubar } from './Menubar'
import { HistoryRow } from './HistoryRow';
import { InputRow } from './InputRow';
import { answer } from './services/answer'
import posed, { PoseGroup } from 'react-pose'
import { Modal } from '../../animations'

interface Props {
  prompt: string,
  initialmsg: string,
  onExitTerminal: () => void,
  visible: boolean
}

const Terminal: React.FC<Props> = (props) => {

  // state
  const [history, setHistory] = useState([props.initialmsg])
  const [linebuf, setLinebuf] = useState("")

  function submit() {
    // simulate shell after cmd entered
    const cmd = linebuf
    const res = answer(linebuf)
    console.log(res)
    setHistory([...history, props.prompt + cmd, ...res])
    setLinebuf("")
    setTimeout(() => {
      (document.querySelector('.content') as any).scrollTop = 10000000
    }, 30)
  }


  return (
    <PoseGroup>
    {props.visible 
    && 
    <Modal key="terminal">
            <div className="container flexcolcenter">
        <div className="row justify-content-center">
          <div className="terminal col-lg-7 col-xs-11 col-11">
            <Menubar text="jakob@about: ~" onExitTerminal={props.onExitTerminal} />
            <div className="content">
              <HistoryRow history={history} />
              <InputRow
                prompt={props.prompt}
                text={linebuf}
                onChange={event => setLinebuf(event.target.value)}
                onSubmit={submit}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  }
    </PoseGroup>
  );
}


export { Terminal };