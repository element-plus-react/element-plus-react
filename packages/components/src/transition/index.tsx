import React from 'react'
import { CSSTransition } from 'react-transition-group'

interface TransitionProps {
  in: boolean
  name: string
  timeout: number
}

const transitionName = (name: string) => ({
  appear: `${name}-enter`,
  appearActive: `${name}-enter-active`,
  appearDone: `${name}-enter-to`,
  enter: `${name}-enter`,
  enterActive: `${name}-enter-active`,
  enterDone: `${name}-enter-to`,
  exit: `${name}-leave`,
  exitActive: `${name}-leave-active`,
  exitDone: `${name}-leave-to`,
})

const Transition: React.FC<TransitionProps> = (props) => {
  const classNames = transitionName(props.name)
  return (
    <CSSTransition in={props.in} classNames={classNames} timeout={props.timeout}
                   unmountOnExit>
      {props.children}
    </CSSTransition>
  )
}

export default Transition
