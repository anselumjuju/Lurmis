import { AnimatedText, Image } from "@/components"
import { getTranslation } from "@/lib/utils"
import useStore from "@/store/store"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Section3 = () => {
	const { setPage, isEnglish } = useStore()
	const textRef = useRef();

	useGSAP(() => {
		gsap.fromTo(textRef.current,
			{ y: '100%', opacity: 0, scaleY: 1.3 },
			{
				y: 0, opacity: 1, scale: 1, ease: 'power2.out',
				scrollTrigger: {
					trigger: textRef.current,
					start: 'top bottom',
					end: 'bottom 50%',
					scrub: true,
				}
			}
		)
	})

	return (
		<div className="section h-full space-y-12">
			<AnimatedText className="max-w-[1000px] text-2xl md:text-3xl lg:text-4xl font-aboreto text-left" text={getTranslation(isEnglish, 'section3.title')} />
			<div className="w-full h-max flex flex-col lg:flex-row items-end justify-between gap-4">

				<div className="w-full h-[40vh] flex gap-4 items-end">
					<Image src="/assets/sec3-img1.webp" alt="img" className="lg:h-[90%]" imgClassName="object-top" />
					<Image src="/assets/sec2-img2.webp" alt="img" className="w-[45%] h-[60%] lg:h-[50%]" imgClassName="object-top" />
				</div>

				<div className="w-full h-[40vh] lg:h-[50vh] flex items-start lg:items-end gap-4">
					<p className="w-[60%] text-right lg:text-left cursor-pointer text-sm lg:text-md" onClick={() => setPage('config')} ref={textRef}>{getTranslation(isEnglish, 'section3.cta')}</p>
					<Image src="/assets/sec1-img3.webp" alt="img" imgClassName="object-top" />
				</div>

			</div>
		</div>
	)
}

export default Section3