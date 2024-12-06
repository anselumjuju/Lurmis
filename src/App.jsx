import { OrbitControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components'

function App() {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-dvh flex flex-col items-center justify-around'>
        <h1 className='text-6xl font-bold'>Vite + R3F</h1>
        <p className='text-2xl'>Start Editing <code className='px-3 py-2 text-lg italic bg-neutral-200 rounded-sm'>App.jsx</code></p>
      </div>
      <div className='absolute inset-0'>
        <Canvas>
          <Experience />
          <OrbitControls autoRotate />
        </Canvas>
      </div>
    </div>
  )
}

export default App
