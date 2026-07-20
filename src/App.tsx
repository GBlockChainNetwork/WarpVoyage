import WarpScene from './components/WarpScene';

export default function App() {
  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      <div className="absolute top-6 left-6 z-20">
        <h1 className="text-5xl font-bold tracking-tighter text-white drop-shadow-lg">WARPVOYAGE</h1>
        <p className="text-blue-400 text-sm mt-1">Explore the Universe • Real Exoplanets</p>
      </div>
      <WarpScene />
    </div>
  );
}
