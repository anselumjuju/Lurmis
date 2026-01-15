import {useEffect, useRef} from 'react';
import './App.css';
import {Logo} from './components';
import {Home} from './pages';
import useStore from './store/store';
import gsap from 'gsap';
import {useLocation, useSearchParams} from 'react-router-dom';
import LenisProvider from './containers/Lenis';

function App() {
  const {language, setLanguage} = useStore();
  const overlayRef = useRef();
  const pageRef = useRef();
  const location = useLocation();
  const pathName = location.pathname.slice(1);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const lang = searchParams.get('lang');

    if (!lang) {
      setLanguage('eu');
      return;
    }

    if (lang !== 'en' && lang !== 'es' && lang !== 'eu') setLanguage('eu');
    setLanguage(lang);
  }, [location, pathName]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      overlayRef.current,
      {y: '100%'},
      {
        y: 0,
        duration: 0.75,
        ease: 'power4.inOut',
        onStart: () => {
          pageRef.current.classList.add('h-screen', 'overflow-y-hidden');
        },
      }
    )
      .fromTo('.logo', {y: '100%', opacity: 0}, {y: 0, opacity: 1, duration: 0.5, ease: 'power4.inOut'}, '-=0.1')
      .to('.logo', {y: '-100%', opacity: 0, duration: 1, ease: 'power4.inOut'}, '+=0.3')
      .to(
        overlayRef.current,
        {
          y: '-100%',
          duration: 1,
          ease: 'power4.inOut',
          onComplete: () => {
            pageRef.current.classList.remove('h-screen', 'overflow-y-hidden');
          },
        },
        '-=0.5'
      );
  });

  return (
    <div className='w-full overflow-hidden font-figtree'>
      <div className='absolute top-0 left-0 w-full h-screen z-50 bg-white flex items-center justify-center overflow-hidden' ref={overlayRef}>
        <span className='overflow-hidden'>
          <Logo className={'fill-gray logo'} />
        </span>
      </div>
      <div className='w-full overflow-x-hidden' ref={pageRef}>
        <LenisProvider>
          <Home />
        </LenisProvider>
      </div>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=-U89sofKNyA
