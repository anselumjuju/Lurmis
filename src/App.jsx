import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Logo } from './components';
import { Lenis } from './containers';
import { Config, Home } from './pages';
import useStore from './store/store';
import gsap from 'gsap';

function App() {
  const { page } = useStore();
  const overlayRef = useRef();
  const pageRef = useRef();

  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current, { y: '100%' }, { y: 0, duration: 0.75, ease: 'power4.inOut', onStart: () => { pageRef.current.classList.add("h-screen", "overflow-y-hidden") }, onComplete: () => { setCurrentPage(page); } })
      .fromTo('.logo', { y: '100%', opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power4.inOut' }, '-=0.1')
      .to('.logo', { y: '-100%', opacity: 0, duration: 1, ease: 'power4.inOut' }, '+=0.3')
      .to(overlayRef.current, { y: '-100%', duration: 1, ease: 'power4.inOut', onComplete: () => { pageRef.current.classList.remove("h-screen", "overflow-y-hidden") } }, '-=0.5');
  }, [page]);

  return (
    <Lenis>
      <div className="w-full overflow-hidden font-figtree">
        <div className="absolute top-0 left-0 w-full h-screen z-50 bg-white flex items-center justify-center overflow-hidden" ref={overlayRef}><span className='overflow-hidden'><Logo className={'fill-gray logo'} /></span></div>
        <div className="w-full overflow-x-hidden" ref={pageRef}>
          {currentPage === 'home' ? <Home /> : <Config />}
        </div>
      </div>
    </Lenis>
  );
}

export default App;
