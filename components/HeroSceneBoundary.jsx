import { Component } from 'react'

// A failed GLTF fetch (missing/incomplete model file) throws during render,
// and without a boundary that takes down the whole page since nothing else
// here catches it. Keyed by modelPath from the caller so switching models
// resets the boundary instead of staying stuck on the failure.
export default class HeroSceneBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('Hero 3D scene failed to load:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full w-full items-center justify-center">
          <p className="eyebrow text-ink-faint">Model unavailable</p>
        </div>
      )
    }
    return this.props.children
  }
}
