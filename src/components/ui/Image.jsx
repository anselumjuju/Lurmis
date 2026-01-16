import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Image = ({ src, alt, className, imgClassName }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        imageRef.current,
        { y: '100%', opacity: 0, scaleY: 2, scaleX: 1.4 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef }
  );
  return (
    <div
      className={cn('w-full h-full overflow-hidden', className)}
      ref={containerRef}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-full object-cover object-center scale-110',
          imgClassName
        )}
        ref={imageRef}
      />
    </div>
  );
};

export default Image;
