const Section3 = () => {
	return (
		<div className="section h-full space-y-8">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-aboreto text-right">Create your ideal lamp tailored<br className="hidden md:block" /> to your space with the lurmis configurator</h1>

			<div className="w-full h-max flex flex-col lg:flex-row items-end justify-between gap-4">

				<div className="w-full h-[40vh] flex gap-4 items-end">
					<div className="w-full h-full lg:h-[90%]"><img src="/assets/sec3-img1.png" alt="img" className="w-full h-full object-cover object-top" /></div>
					<div className="w-[45%] h-[60%] lg:h-[50%]"><img src="/assets/sec2-img2.png" alt="img" className="w-full h-full object-cover object-top" /></div>
				</div>

				<div className="w-full h-[40vh] lg:h-[50vh] flex items-start lg:items-end gap-4">
					<p className="w-[60%] text-right lg:text-left cursor-pointer text-sm lg:text-md">Configure Now</p>
					<div className="w-full h-full"><img src="/assets/sec1-img3.png" alt="img" className="w-full h-full object-cover object-top" /></div>
				</div>

			</div>
		</div>
	)
}

export default Section3