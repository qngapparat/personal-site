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
                Full-stack JavaScript engineer based in Innsbruck & Hong Kong
              </li>
              <li>
                Specialized in Node and React & React Native (4y+)
              </li>
              <li>
                BSc Computer Science
              </li>
            </div>
          </ul>
          <hr />
          <div className="header">
            Previously
          </div>
          <ul>
            <div className="text">
              <li>
                2019: At a great fintec startup. Check them out -> <a href="https://monkee.rocks/">monkee.rocks</a>
              </li>
              <li>
                2020 - 2021: At UIBK's Distributed & Parallel Systems
              </li>
            </div>
          </ul>
          <hr />
          <div className="header">
            Principles I find helpful (sporadically updated)
          </div>
          <div className="text">
            <ul>
              <li>Your brain is a neural net. All else follows (how to consume information, with what people to surround, where indecision comes from)</li>
              <li>To do the right things, change the environment so it becomes easy. (A gym that's close, comfy running shoes, healthy food close in the fridge and bad food far away in the supermarket ...)</li>
          
           
            </ul>
          </div>
          <hr />
          <div className="header">
            Get in touch
          </div>
          <div className="text">
            Shoot me an Email at jakob. wallnoefer @outlook.
            com. I read them all.
          </div>
          <div className="row justify-content-center">
            <a href="https://github.com/qngapparat">
              <button className="btn btn-default mybtn">
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
