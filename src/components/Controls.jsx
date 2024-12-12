import { Sun, SunDim, ThermometerSnowflake, ThermometerSun } from "lucide-react"
import { RadioGroup } from "@/components/ui/radio-group";
import TempSlider from "./ui/TempSlider"
import MyToggle from "./ui/MyToggle"
import RadioItem from "./ui/RadioItem"
import useStore from "@/store/store";
import { useEffect } from "react";
import IntensitySlider from "./ui/IntensitySlider";

const Controls = () => {

	const { material, setMaterial, color, setColor, stand, setStand, lampColor, setLampColor } = useStore()

	const materialData = [
		{ label: 'Bleach', value: 'bleach', imgPath: '/assets/bleach.png' },
		{ label: 'Oak', value: 'oak', imgPath: '/assets/oak.png' },
		{ label: 'Wal', value: 'wal', imgPath: '/assets/walnut.png' },
	]

	const colorData = [
		{ label: 'White', value: 'white', bgColor: 'bg-[#fffeec]' },
		{ label: 'red', value: '#e6293c', bgColor: 'bg-red-500' },
		{ label: 'green', value: '#6f6', bgColor: 'bg-green-500' },
		{ label: 'blue', value: '#87cefb', bgColor: 'bg-blue-500' },
	]

	const standData = [
		{ label: 'Stand 1', value: 'stand1', imgPath: '/assets/stand1.png' },
		{ label: 'Stand 2', value: 'stand2', imgPath: '/assets/stand2.png' },
	]

	useEffect(() => console.log('LampColor: ', lampColor), [lampColor])

	return (
		<div className="max-w-xl h-full py-5 space-y-10">
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">Lamp Material</p>
				<RadioGroup className="grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 gap-4" defaultValue="cc">
					{
						materialData.map(({ label, value, imgPath }) => (
							<RadioItem
								key={value}
								value={value}
								label={label}
								imgPath={imgPath}
								isSelected={value === material}
								onClick={() => setMaterial(value)}
							/>
						))
					}
				</RadioGroup>
			</div>
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">White Color</p>
				<RadioGroup className="grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 gap-4" defaultValue="cc">
					{
						colorData
							.filter(({ value }) => value === 'white')
							.map(({ label, value, bgColor }) => (
								<RadioItem
									key={value}
									value={value}
									label={label}
									bgColor={bgColor}
									isSelected={value === color}
									onClick={() => { setColor(value); setLampColor(value) }}
								/>
							))
					}
				</RadioGroup>
			</div>
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">Color Temperature</p>
				<TempSlider className={'max-w-xs'} startIcon={ThermometerSun} endIcon={ThermometerSnowflake} />
			</div>
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">Light Intensity</p>
				<IntensitySlider className={'max-w-xs'} startIcon={SunDim} endIcon={Sun} />
			</div>
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">RGB Color</p>
				<RadioGroup className="grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 gap-4" defaultValue="cc">
					{
						colorData.splice(1, colorData.length).map(({ label, value, bgColor }) => (
							<RadioItem
								key={value}
								value={value}
								label={label}
								bgColor={bgColor}
								isSelected={value === color}
								onClick={() => { setColor(value); setLampColor(value) }}
							/>
						))
					}
				</RadioGroup>
			</div>
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">Base Types</p>
				<RadioGroup className="grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 gap-4" defaultValue="cc">
					{
						standData.map(({ label, value, imgPath }) => (
							<RadioItem
								key={value}
								value={value}
								label={label}
								imgPath={imgPath}
								isSelected={value === stand}
								onClick={() => setStand(value)}
							/>
						))
					}
				</RadioGroup>
			</div>
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">Turn ON/OFF</p>
				<MyToggle />
			</div>
		</div>
	)
}

export default Controls