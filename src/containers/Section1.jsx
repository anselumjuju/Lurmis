import { AnimatedText, Image } from "@/components"
import { getTranslation } from "@/lib/utils"
import useStore from "@/store/store";

const Section1 = () => {

	const { isEnglish } = useStore();

	const galleryData = [
		{ imgPath: '/assets/sec1-img1.webp', title: getTranslation(isEnglish, 'section1.caption1'), },
		{ imgPath: '/assets/sec1-img3.webp', title: getTranslation(isEnglish, 'section1.caption2'), },
		{ imgPath: '/assets/sec1-img2.webp', title: getTranslation(isEnglish, 'section1.caption3'), },
	]

	return (
		<div className="section space-y-12">
			<AnimatedText className="text-2xl md:text-3xl lg:text-4xl font-aboreto" text={getTranslation(isEnglish, 'section1.title')} />
			<div className="w-full flex flex-col sm:flex-row gap-6">
				{
					galleryData.map(({ imgPath, title }) => (
						<div className="w-full md:w-1/3 flex flex-col items-start gap-y-2" key={imgPath}>
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