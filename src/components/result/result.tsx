import React, { useMemo } from 'react'
import {CheckCircleOutlined,WarningOutlined,CloseCircleOutlined,InfoCircleOutlined} from '@ant-design/icons'

export const IconMap = {
  success: 'icon-success',
  warning: 'icon-warning',
  error: 'icon-error',
  info: 'icon-info',
}
export const IconComponentMap: Record<typeof IconMap[keyof typeof IconMap], any> = {
  [IconMap.success]: CheckCircleOutlined ,
  [IconMap.warning]: WarningOutlined ,
  [IconMap.error]: CloseCircleOutlined ,
  [IconMap.info]: InfoCircleOutlined ,
}
interface ResultProps {
  title?: string | React.ReactNode
  subTitle?: string | React.ReactNode
  icon?: 'success' | 'warning' | 'info' | 'error' | React.ReactNode
  extra?: React.ReactNode
}

const Result: React.FC<ResultProps> = (props) => {
  const {
    icon = 'info',
  } = props
  const resultIcon = useMemo(() => {
    const iconClass = icon && IconMap[icon] ? IconMap[icon] : 'icon-info'
    const iconComponent = IconComponentMap[iconClass] || IconComponentMap['icon-info']
    return {
      class: iconClass,
      component: iconComponent,
    }
  }, [])
  return (
    <div className="el-result">
      <div className="el-result__icon">
        {resultIcon.component && <resultIcon.component className={resultIcon.class} />}
      </div>
      {props.title && <div className="el-result__title">
        <p>{props.title}</p>
      </div>}
      {props.subTitle && <div className="el-result__subtitle">
        <p>{props.subTitle}</p>
      </div>}
      {props.extra && <div className="el-result__extra">
        {props.extra}
      </div>}
    </div>
  )
}

export default Result
