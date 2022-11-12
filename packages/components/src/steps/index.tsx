import './style'
import React from 'react'
import InnerSteps,{InnerStepsProps} from './steps'

import Step from './step'

interface StepsProps extends React.FC<InnerStepsProps>{
  Step: typeof Step
}

const Steps = InnerSteps as StepsProps

Steps.Step = Step

export default Steps
