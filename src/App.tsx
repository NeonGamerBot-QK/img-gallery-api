// import React from 'react';
import gallery from './gallery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function App() {
  return <div className="min-h-screen" style={{ background: "var(--base)"}}>
    <h1 className='mt-5 mb-5 text-center lg:text-5xl text-3xl font-bold'>Image Gallery</h1>
    <div id="gallery" className='grid gap-2 lg:grid-cols-4 grid-cols-2'> 
{gallery.map((e,i) => {
  // @ts-ignore
  return <LazyLoadImage src={"./images/"+e} onLoad={(e) => e.target.style.filter =""} visibleByDefault={true} style={{ filter: "blur(10px)"}} delayTime={50} wrapperClassName='rounded-xl shadow-lg hover:scale-105 object-fill p-2 linear duration-500' />
})}
    </div>
  </div>
}

export default App;
/**
 * return (
<div className="hero min-h-screen" style={{ background: "var(--base)"}}>
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">React</h1>
      <p className="py-6">
Default react template
      </p>
      <button className="btn btn-primary">src/App.tsx</button>
    </div>
  </div>
</div>
  );
 */