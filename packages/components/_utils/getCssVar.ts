function useCssVar(prop: string) {
  const elRef = window?.document?.documentElement
  return window.getComputedStyle(elRef).getPropertyValue(prop)
}

export default useCssVar