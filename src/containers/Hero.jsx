import useStore from "@/store/store"
import { Header, PrimaryButton } from "../components"
import { ArrowRight } from "lucide-react"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { getTranslation } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const { setPage } = useStore();
	const imageRef = useRef(null);
	const imageContRef = useRef(null);
	useGSAP(() => {
		gsap.to(imageContRef.current,
			{
				scale: 0.95,
				scrollTrigger: {
					trigger: imageRef.current,
					start: 'bottom 95%',
					end: 'bottom 30%',
					scrub: true
				}
			}
		)
		gsap.to(imageRef.current,
			{
				scale: 1.12,
				y: '30%',
				scrollTrigger: {
					trigger: imageRef.current,
					start: 'bottom 95%',
					end: 'bottom 30%',
					scrub: true
				}
			}
		)
	})

	return (
		<div className="w-full h-screen flex items-center relative">
			<div className="absolute inset-0 -z-10 overflow-hidden" ref={imageContRef}>
				<img
					src="/assets/hero-img1.png"
					alt="image"
					className="w-full h-full object-cover object-left"
					ref={imageRef}
				/>
			</div>
			<div className="section h-[90%] pb-10 lg:pb-0 flex flex-col justify-between items-center text-white">
				<Header />
				<div className="w-full flex flex-col gap-y-8 items-center justify-center text-center">
					<p className="text-sm lg:text-xl uppercase">{getTranslation("hero.subtitle")}</p>
					<p className="max-w-[800px] text-3xl md:text-4xl lg:text-5xl font-aboreto">{getTranslation("hero.title")}</p>
					<PrimaryButton text={getTranslation("hero.button")} endIcon={ArrowRight} onClick={() => { setPage("config") }} className={'px-4 py-3 md:px-6'} isResponsive={false} />
				</div>
			</div>
		</div>
	)
}

export default Hero