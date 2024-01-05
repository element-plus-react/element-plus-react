const isClient = typeof window !== "undefined";

export const isFirefox = (): boolean => isClient && /firefox/i.test(window.navigator.userAgent);

export { isClient };
