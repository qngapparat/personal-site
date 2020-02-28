import React, { Component } from 'react'
import './style.css'
import { Paragraph } from '../../animations'
import { PoseGroup } from 'react-pose'

interface Props {
  visible: boolean
}

const Textpage: React.FC<Props> = (props) => {
  return (
    <PoseGroup>
      {props.visible
        &&
        <Paragraph key="textpage">
          <div className="all">

            <div className="title">
              Jakob Fridolin Wallnöfer
              </div>
            <div className="myhr"></div>


            <div className="header">
              About me
              </div>

            <ul>
              <div className="text">
                <li>

                  Full-stack JavaScript engineer based in Innsbruck & Hong Kong.
    
  </li>

                <li>

                  Specialized in Node and React & React Native.
  </li>

                <li>
                  Working on my BSc in Computer Science until 2020.
       </li>
              </div>

            </ul>
            <hr />

            <div className="header">
              One thing to take with you
              </div>

            <div className="text">
              <br />
              If you create, quality over quantity. Put extra thought on how users will interact with it. Plus it feels great. Nobody wants to work on something that's just 'ok'.
              </div>
            <hr />

            <div className="header">
              Get in touch
              </div>

            <div className="text">
              Shoot me an Email at jakob. wallnoefer @outlook.
              com. <br />I read them all.
              </div>

<div className="row justify-content-center" >
            <a href="https://github.com/qngapparat">
              <button
                className="btn btn-default mybtn"
              >
                <strong>GitHub</strong>
              </button>
            </a>

</div>
          </div>
        </Paragraph>
      }
    </PoseGroup>
  )
}

export { Textpage }