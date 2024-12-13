import { AnimatedText, Image } from "@/components"

const Section2 = () => {

	return (
		<div className="section h-max pb-[25%] md:pb-0 space-y-12">
			<AnimatedText className="max-w-[900px] ml-auto text-2xl md:text-3xl lg:text-4xl font-aboreto text-right" text='Design your perfect lamp for your space with the lurmis configurator' />
			<div className="w-full h-[40vh] sm:h-[70vh] flex justify-between items-end gap-10 relative">
				<Image src="/assets/sec2-img1.webp" alt='img' className="w-[90%] md:w-full h-full" />
				<Image src="/assets/sec2-img2.webp" alt='img' className="w-[50%] md:w-[40%] h-[50%] md:h-[40%] absolute bottom-0 right-0 translate-y-1/2 md:static md:translate-y-0" />
			</div>
		</div>
	)
}

export default Section2