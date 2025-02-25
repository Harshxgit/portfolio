import './App.css';
import Threads from './component/Threads';

function App() {
  return (
    <div className='w-full h-screen relative bg-black'>
      <div className='w-full h-screen flex justify-center items-center text-white gap-4'>
        <div>1</div>
        <div>2</div>
      </div>
      <Threads className='w-full h-screen absolute top-0 left-0'
        amplitude={0.9}
        distance={1.2}
        enableMouseInteraction={true}/>
    </div>
  );
}

export default App;
