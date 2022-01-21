import {camelCase} from 'lodash'

export const getStyle = function (
  element: HTMLElement,
  styleName: string,
): string {
  if (!element || !styleName) return ''
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    const style = element.style[styleName]
    if (style) return style
    const computed = document.defaultView?.getComputedStyle(element, '')
    return computed ? computed[styleName] : ''
  } catch (e) {
    return element.style[styleName]
  }
}
export const isScroll = (
  el: HTMLElement,
  isVertical?: boolean,
): RegExpMatchArray | null => {
  const determinedDirection = isVertical === null || isVertical === undefined
  const overflow = determinedDirection
    ? getStyle(el, 'overflow')
    : isVertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x')

  return overflow.match(/(scroll|auto|overlay)/)
}
export const getScrollContainer = (
  el: HTMLElement,
  isVertical?: boolean,
): Window | HTMLElement | undefined => {

  let parent: HTMLElement = el
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window
    }
    if (isScroll(parent, isVertical)) {
      return parent
    }
    parent = parent.parentNode as HTMLElement
  }
  return parent
}
