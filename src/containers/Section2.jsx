const Section2 = () => {

	return (
		<div className="section h-max pb-[25%] md:pb-0 space-y-8">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-aboreto text-right">Design your perfect lamp for <br className="hidden md:block" /> your space with the lurmis configurator</h1>
			<div className="w-full h-[40vh] sm:h-[70vh] flex justify-between items-end gap-10 relative">
				<div className="w-[90%] md:w-full h-full">
					<img
						src="/assets/sec2-img1.png"
						alt="img"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="w-[50%] md:w-[40%] h-[50%] md:h-[40%] absolute bottom-0 right-0 translate-y-1/2 md:static md:translate-y-0">
					<img
						src="/assets/sec2-img2.png"
						alt="img"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	)
}

export default Section2