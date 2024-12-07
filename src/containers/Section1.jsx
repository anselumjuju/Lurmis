const Section1 = () => {
	const galleryData = [
		{ imgPath: '/assets/sec1-img1.png', title: 'Effortless Elegance', },
		{ imgPath: '/assets/sec1-img3.png', title: 'Personalized Ambiance', },
		{ imgPath: '/assets/sec1-img2.png', title: 'Thoughtful Design', }
	]
	return (
		<div className="section space-y-8">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-aboreto">WHY YOU'LL LOVE THIS</h1>
			<div className="w-full flex flex-col sm:flex-row gap-6">
				{
					galleryData.map(({ imgPath, title }) => (
						<div className="w-full md:w-1/3 flex flex-col items-start gap-y-2" key={imgPath}>
							<img src={imgPath} alt={title} className="w-full h-80 md:h-96 object-cover object-top" />
							<h1 className="text-md font-aboreto">{title}</h1>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Section1