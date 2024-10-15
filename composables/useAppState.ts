export const useAppState = () => {
  /**
   * side menu overlay state
   */
  const sideNavOverlayShown = useState<boolean>('app-side-nav-overlay-shown', () => ref(false))

  /**
   * main app menu overlay state
   */
  const appNavOverlayShown = useState<boolean>('app-nav-overlay-shown', () => ref(false))

  /**
   * toc overlay state
   */
  const tocOverlayShown = useState<boolean>('app-toc-nav-overlay-shown', () => ref(false))

  return {
    sideNavOverlayShown,
    appNavOverlayShown,
    tocOverlayShown,
  }
}