import useStore from "@/store/store"
import { Header, PrimaryButton } from "../components"
import { ArrowRight } from "lucide-react"

const Hero = () => {
	const { setPage } = useStore();
	return (
		<div className="w-full h-screen flex items-center relative">
			<div className="absolute inset-0 -z-10">
				<img
					src="/assets/hero-img1.png"
					alt="image"
					className="w-full h-full object-cover object-left"
				/>
			</div>
			<div className="section h-[90%] pb-10 lg:pb-0 flex flex-col justify-between items-center text-white">
				<Header />
				<div className="w-full flex flex-col gap-y-8 items-center justify-center text-center">
					<p className="text-sm lg:text-xl uppercase">Illuminate your Moments</p>
					<p className="text-3xl md:text-4xl lg:text-5xl font-aboreto">Bright Ideas. Warm Light.<br className="hidden md:block" /> Perfect Moments</p>
					<PrimaryButton text='3D Configurator' endIcon={ArrowRight} onClick={() => { setPage("config") }} className={'px-4 py-3 md:px-6'} isResponsive={false} />
				</div>
			</div>
		</div>
	)
}

export default Hero