import { AnimatedText, Image } from "@/components"
import useStore from "@/store/store"

const Section3 = () => {
	const { setPage } = useStore()
	return (
		<div className="section h-full space-y-12">
			<AnimatedText className="max-w-[1000px] text-2xl md:text-3xl lg:text-4xl font-aboreto text-left" text="Create your ideal lamp tailored to your space with the lurmis configurator" />
			<div className="w-full h-max flex flex-col lg:flex-row items-end justify-between gap-4">

				<div className="w-full h-[40vh] flex gap-4 items-end">
					<Image src="/assets/sec3-img1.png" alt="img" className="lg:h-[90%]" imgClassName="object-top" />
					<Image src="/assets/sec2-img2.png" alt="img" className="w-[45%] h-[60%] lg:h-[50%]" imgClassName="object-top" />
				</div>

				<div className="w-full h-[40vh] lg:h-[50vh] flex items-start lg:items-end gap-4">
					<p className="w-[60%] text-right lg:text-left cursor-pointer text-sm lg:text-md" onClick={() => setPage('config')}>
						<span className="relative after:content-[''] after:h-[1px] after:absolute after:right-0 after:-bottom-[2px] after:bg-gray after:w-[0%] hover:after:w-[80%] transition-all duration-300">Configure Now</span>
					</p>
					<Image src="/assets/sec1-img3.png" alt="img" imgClassName="object-top" />
				</div>

			</div>
		</div>
	)
}

export default Section3