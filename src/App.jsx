import { useEffect, useRef } from 'react';
import './App.css';
import { Logo } from './components';
import { Home } from './pages';
import useStore from './store/store';
import gsap from 'gsap';
import { useLocation, useSearchParams } from 'react-router-dom';
import LenisProvider from './containers/Lenis';
import { useGSAP } from '@gsap/react';
import SplashScreen from './containers/SplashScreen';

function App() {
  const { setLanguage } = useStore();
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
  }, [location, pathName, searchParams, setLanguage]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(pageRef.current, {
      onStart: () => {
        pageRef.current.classList.add('h-screen', 'overflow-y-hidden');
      },
    }).to(pageRef.current, {
      delay: 1.2,
      onComplete: () => {
        pageRef.current.classList.remove('h-screen', 'overflow-y-hidden');
      },
    });
  });

  return (
    <div className="w-full overflow-hidden font-figtree">
      <div className="w-full overflow-x-hidden" ref={pageRef}>
        <SplashScreen />
        <LenisProvider>
          <Home />
        </LenisProvider>
      </div>
    </div>
  );
}

export default App;
