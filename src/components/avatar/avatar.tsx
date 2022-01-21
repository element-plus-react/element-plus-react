import React, { useEffect, useMemo, useState } from 'react'
import { isFunction } from 'lodash'

interface AvatarProps {
  size?: number | 'large' | 'default' | 'small'
  shape?: 'circle' | 'square'
  icon?: React.ReactNode,
  src?: string,
  alt?: string,
  srcSet?: string,
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  onError?: (evt: Event) => void
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    size = 'large',
    shape = 'circle',
    fit = 'cover',
    icon,
  } = props
  const [hasLoadError, setHasLoadError] = useState(false)

  const avatarClass = useMemo(() => {
    const classList = ['el-avatar']
    if (size && typeof size === 'string') classList.push(`el-avatar--${size}`)
    if (icon) classList.push('el-avatar--icon')
    if (shape) classList.push(`el-avatar--${shape}`)
    return classList.join(' ')
  }, [icon, shape, size])

  const sizeStyle = useMemo<React.CSSProperties>(() => typeof size === 'number'
    ? { '--el-avatar-size': `${size}px` }
    : {}, [size])

  const fitStyle = useMemo<React.CSSProperties>(() => ({
    objectFit: fit,
  }), [fit])
  useEffect(() => {
    // need reset hasLoadError to false if src changed
    setHasLoadError(false)
  }, [props.src])

  function handleError (e: Event) {
    setHasLoadError(true)
    if (isFunction(props.onError)) {
      props.onError(e)
    }
  }

  return (<span className={avatarClass} style={sizeStyle}>
    {(props.src || props.srcSet) && !hasLoadError ? <img
      src={props.src}
      alt={props.alt}
      srcSet={props.srcSet}
      style={fitStyle}
      onError={handleError}
    /> : props.icon ? props.icon : props.children}
    </span>)
}

export default Avatar
