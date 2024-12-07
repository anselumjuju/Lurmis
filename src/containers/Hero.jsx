import { Header, PrimaryButton } from "../components"

const Hero = () => {
	return (
		<div className="w-full h-dvh flex items-center relative">
			<div className="absolute inset-0 -z-10">
				<img
					src="/assets/hero-img1.png"
					alt="image"
					className="w-full h-full object-cover object-left"
				/>
			</div>
			<div className="section h-[90%] flex flex-col justify-between items-center text-white">
				<Header />
				<div className="w-full flex flex-col gap-y-8 items-center justify-center text-center">
					<p className="text-sm lg:text-xl uppercase">Illuminate your Moments</p>
					<p className="text-3xl md:text-4xl lg:text-5xl font-aboreto">Bright Ideas. Warm Light.<br className="hidden md:block" /> Perfect Moments</p>
					<PrimaryButton text='3D Configurator' isIcon />
				</div>
			</div>
		</div>
	)
}

export default Hero