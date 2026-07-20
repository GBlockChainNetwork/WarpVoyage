import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useState } from 'react'

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade />
      {/* Add planets here later */}
    </>
  )
}

export default function App() {
  const [destination, setDestination] = useState('Mars')

  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-4xl font-bold">WarpVoyage</h1>
        <select value={destination} onChange={(e) => setDestination(e.target.value)} className="mt-2 p-2 bg-gray-800">
          <option>Mars</option>
          <option>Proxima b</option>
          {/* More options */}
        </select>
        <button className="ml-2 p-2 bg-blue-600">Launch Warp</button>
      </div>
      <Canvas>
        <Scene />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
