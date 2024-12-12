import { Logo } from "../components"

const Footer = () => {
	return (
		<div className="section pt-16 md:pt-20 pb-6 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3 text-light-gray relative">
			<div className="absolute w-dvw right-1/2 translate-x-1/2 h-full -z-10 bg-gray" />
			<div className="w-full space-y-4">
				<Logo className={"w-20 lg:w-24 fill-light-gray"} />
				<p className="max-w-[28ch] lg:max-w-[35ch] text-xs md:text-sm">At Lurmi, we design and create <span className="text-nowrap">high-quality</span> lamps that seamlessly complement every home style. No individual sales.</p>
			</div>
			<div className="w-full space-y-4">
				<h4 className="text-md font-semibold text-white">Contact</h4>
				<address className="text-xs md:text-sm space-y-2">
					<p>Eibar, <br /> Gipuzkoa, <br /> Spain - 20600</p>
					<p>tactizity@gmail.com</p>
				</address>
			</div>
			<div className="w-full col-span-2 lg:col-span-1">
				<p className="text-xs md:text-sm">@ 2024 - Lurmis collection | All rights reserved</p>
			</div>
		</div>
	)
}

export default Footer