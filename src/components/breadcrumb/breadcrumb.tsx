import React, { createContext, useEffect, useMemo, useRef } from 'react'

export interface InnerBreadcrumbProps {
  separator?: string
  separatorIcon?: React.ReactNode
}

export const BreadcrumbStore = createContext({})

const InnerBreadcrumb: React.FC<InnerBreadcrumbProps> = (props) => {
  const {
    separator = '/',
    separatorIcon,
  } = props
  const breadcrumb = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const items = breadcrumb.current!.querySelectorAll('.el-breadcrumb__item')
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page')
    }
  }, [])
  const value = useMemo(()=>({ separator, separatorIcon }),[separator, separatorIcon])
  return (
    <BreadcrumbStore.Provider value={value}>
      <div
        ref={breadcrumb}
        className="el-breadcrumb"
        aria-label="Breadcrumb"
        role="navigation"
      >
        {props.children}
      </div>
    </BreadcrumbStore.Provider>
  )
}

export default InnerBreadcrumb
