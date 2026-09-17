import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import './styles/animations.css'
import './App.css'

function App() {
  const { isPlaying, toggle, speed, cycleSpeed } = useAnimation(true)

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} speed={speed} />
      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggle}
        speed={speed}
        onCycleSpeed={cycleSpeed}
      />
    </Layout>
  )
}

export default App
