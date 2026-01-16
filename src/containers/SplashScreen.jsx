import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Logo } from '@/components';

const SplashScreen = () => {
  const overlayRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.logo',
      { y: '100%' },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power4.inOut' }
    )
      .to('.logo', {
        y: '-100%',
        duration: 1,
        ease: 'power4.inOut',
        delay: 0.6,
      })
      .to(
        overlayRef.current,
        {
          y: '-100%',
          duration: 1,
          ease: 'power4.inOut',
        },
        '-=0.3'
      );
  });

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-screen z-50 bg-white flex items-center justify-center overflow-hidden"
        ref={overlayRef}
      >
        <span className="overflow-hidden">
          <Logo className={'fill-gray logo'} />
        </span>
      </div>
    </>
  );
};

export default SplashScreen;
