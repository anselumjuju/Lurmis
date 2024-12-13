import { AnimatedText, Image } from "@/components"
import { getTranslation } from "@/lib/utils"
import useStore from "@/store/store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Section1 = () => {
	const cardRef = useRef([]);
	const { isEnglish } = useStore();

	const galleryData = [
		{ imgPath: '/assets/sec1-img1.webp', title: getTranslation(isEnglish, 'section1.caption1'), },
		{ imgPath: '/assets/sec1-img3.webp', title: getTranslation(isEnglish, 'section1.caption2'), },
		{ imgPath: '/assets/sec1-img2.webp', title: getTranslation(isEnglish, 'section1.caption3'), },
	]

	useGSAP(() => {
		gsap.fromTo(cardRef.current,
			{ y: '40%', opacity: 0, scaleY: 1.2 },
			{
				y: 0, opacity: 1, scale: 1, ease: 'power2.out',
				stagger: 0.1,
				scrollTrigger: {
					trigger: cardRef.current,
					start: 'top bottom',
					end: 'bottom 70%',
					scrub: true,
				}
			}
		)
	})

	return (
		<div className="section space-y-12">
			<AnimatedText className="text-2xl md:text-3xl lg:text-4xl font-aboreto" text={getTranslation(isEnglish, 'section1.title')} />
			<div className="w-full flex flex-col sm:flex-row gap-6">
				{
					galleryData.map(({ imgPath, title }) => (
						<div className="w-full md:w-1/3 flex flex-col items-start gap-y-2" key={imgPath} ref={el => cardRef.current.push(el)}>
							<Image src={imgPath} alt={title} className="h-80 md:h-96" imgClassName="object-top" />
							<h1 className="text-md font-aboreto">{title}</h1>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Section1