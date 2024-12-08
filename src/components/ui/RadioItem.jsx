import { RadioGroupItem } from "@/components/ui/radio-group";
import { Check } from "lucide-react";

const RadioItem = ({ bgColor, imgPath, label, value, isSelected }) => {
	return (
		<div className="w-max h-max mx-1 space-y-2 relative cursor-pointer">
			<RadioGroupItem
				id="radio-12-cc"
				value="cc"
				className="sr-only after:absolute after:inset-0"
			/>
			<div className={`w-max px-1.5 rounded-full absolute top-0 right-0 -translate-y-[50%] translate-x-1/2 bg-gray z-10 transition-opacity duration-150 ${isSelected ? 'opacity-100' : 'opacity-0'}`}>
				<Check className="w-3 text-white" />
			</div>
			<div className={`w-24 lg:w-28 aspect-square rounded-md ${bgColor} overflow-clip ${isSelected ? 'ring-2 ring-offset-2 ring-offset-gray ring-white' : ''}`}>
				{imgPath && <img src={imgPath} alt={value} className="w-full h-full object-cover" />}
			</div>
			<p className="text-sm text-gray uppercase text-center">{label}</p>
		</div>
	)
}

export default RadioItem
