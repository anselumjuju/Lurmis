import { Lightbulb, LightbulbOff, Sun, SunDim, ThermometerSnowflake, ThermometerSun } from "lucide-react"
import { RadioGroup } from "@/components/ui/radio-group";
import TempSlider from "./ui/TempSlider"
import MyToggle from "./ui/MyToggle"
import RadioItem from "./ui/RadioItem"
import useStore from "@/store/store";
import IntensitySlider from "./ui/IntensitySlider";
import { getTranslation } from "@/lib/utils";

const Controls = () => {

	const { material, setMaterial, color, setColor, stand, setStand, setLampColor, isLightOn, setIsLightOn } = useStore()

	const materialData = [
		{ label: getTranslation('config.material.bleach'), value: 'bleach', imgPath: '/assets/bleach.webp' },
		{ label: getTranslation('config.material.oak'), value: 'oak', imgPath: '/assets/oak.webp' },
		{ label: getTranslation('config.material.walnut'), value: 'wal', imgPath: '/assets/walnut.webp' },
	]

	const colorData = [
		{ label: getTranslation('config.whiteColor.white'), value: 'white', bgColor: 'bg-[#fffeec]' },
		{ label: getTranslation('config.rgbColor.red'), value: '#e6293c', bgColor: 'bg-red-500' },
		{ label: getTranslation('config.rgbColor.green'), value: '#6f6', bgColor: 'bg-green-500' },
		{ label: getTranslation('config.rgbColor.blue'), value: '#87cefb', bgColor: 'bg-blue-500' },
	]

	const standData = [
		{ label: getTranslation('config.baseTypes.base1'), value: 'stand1', imgPath: '/assets/stand1.webp' },
		{ label: getTranslation('config.baseTypes.base2'), value: 'stand2', imgPath: '/assets/stand2.webp' },
	]

	return (
		<div className="max-w-xl h-full py-5 space-y-10">
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">{getTranslation('config.material.title')}</p>
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
				<p className="text-md uppercase text-semibold">{getTranslation('config.whiteColor.title')}</p>
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
				<p className="text-md uppercase text-semibold">{getTranslation('config.colorTemperature')}</p>
				<TempSlider className={'max-w-xs'} startIcon={ThermometerSun} endIcon={ThermometerSnowflake} />
			</div>
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">{getTranslation('config.lightIntensity')}</p>
				<IntensitySlider className={'max-w-xs'} startIcon={SunDim} endIcon={Sun} />
			</div>
			<div className="space-y-4">
				<p className="text-md uppercase text-semibold">{getTranslation('config.rgbColor.title')}</p>
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
				<p className="text-md uppercase text-semibold">{getTranslation('config.baseTypes.title')}</p>
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
				<p className="text-md uppercase text-semibold">{getTranslation('config.turnOnOff')}</p>
				<MyToggle startIcon={Lightbulb} endIcon={LightbulbOff} initialValue={isLightOn} toggleFunc={setIsLightOn} />
			</div>
		</div>
	)
}

export default Controls