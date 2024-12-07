import { Footer, Hero, Section1, Section2, Section3 } from "../containers"

const Home = () => {
	return (
		<div className="space-y-20">
			<Hero />
			<Section1 />
			<Section2 />
			<Section3 />
			<Footer />
		</div>
	)
}

export default Home