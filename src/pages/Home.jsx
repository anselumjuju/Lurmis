import { Footer, Hero, Section1, Section2, Section3 } from "../containers"

const Home = () => {
	return (
		<div className="space-y-20 lg:space-y-28">
			<Hero />
			<Section1 />
			<Section2 />
			<Section3 />
			<Footer />
		</div>
	)
}

export default Home