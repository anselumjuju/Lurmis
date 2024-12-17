import { AnimatedText, Image, PrimaryButton } from "@/components"
import { getTranslation } from "@/lib/utils"
import useStore from "@/store/store"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Section3 = () => {
	const { setPage, isEnglish } = useStore()
	const buttonRef = useRef();

	useGSAP(() => {
		gsap.fromTo(buttonRef.current,
			{ y: '70%', opacity: 0, scaleY: 1.2 },
			{
				y: 0, opacity: 1, scale: 1, ease: 'power2.out',
				scrollTrigger: {
					trigger: buttonRef.current,
					start: 'top 95%',
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
					<div className="w-[60%]" ref={buttonRef}>
						<PrimaryButton
							text={getTranslation(isEnglish, 'section3.cta')}
							onClick={() => setPage('config')}
							variant={'outlined'}
							className={'text-sm lg:text-md px-5	py-2.5 ml-auto lg:ml-0'}
						/>
					</div>
					<Image src="/assets/sec1-img3.webp" alt="img" imgClassName="object-top" />
				</div>

			</div>
		</div>
	)
}

export default Section3