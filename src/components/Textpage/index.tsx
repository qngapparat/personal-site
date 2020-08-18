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
                2019: At a Fintec startup, worked on APIs with banking partners. Ported app to Android & implemented DevOps (CI, CD)
              </li>
              <li>
                2020 - today: Scientific collaboration with UIBK's Distributed & Parallel Systems Dept.
              </li>
            </div>
          </ul>
          <hr />
          <div className="header">
            Principles I find helpful (sporadically updated)
          </div>
          <div className="text">
            <ul>
              <li>Think long-term, 10 or 20 years, if you aren't in an immediate rut and have that opportunity.</li>
              <li>Have a system in place to make small decisions - such as flipping a coin, a dogma ('Given this choice, I always do ...'), or a simple algorithm.</li>
              <li>Inspiration is perishable. so if you are inspired, do it right away (Naval Ravikant).
              </li>
              <li>Overdoing something (programming, learning a language, sport) is a good way to lose the joy in it forever. Life is a marathon.
              </li>
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
