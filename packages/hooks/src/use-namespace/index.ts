import useGlobalConfig from '../use-global-config'

const defaultNamespace = 'el'
const statePrefix = 'is-'

const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string,
) => {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

export default function useNamespace (block: string) {
  const namespace = useGlobalConfig('namespace') || defaultNamespace
  const b = (blockSuffix = '') =>
    _bem(namespace, block, blockSuffix, '', '')
  const e = (element?: string) =>
    element ? _bem(namespace, block, '', element, '') : ''
  const m = (modifier?: string) =>
    modifier ? _bem(namespace, block, '', '', modifier) : ''
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? _bem(namespace, block, blockSuffix, element, '')
      : ''
  const em = (element?: string, modifier?: string) =>
    element && modifier
      ? _bem(namespace, block, '', element, modifier)
      : ''
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? _bem(namespace, block, blockSuffix, '', modifier)
      : ''
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(namespace, block, blockSuffix, element, modifier)
      : ''
  const is = (name: string, state = true) =>
    state ? `${statePrefix}${name}` : ''
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  }
}
