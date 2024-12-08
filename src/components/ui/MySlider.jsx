import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/Slider";
import { cn } from "@/lib/utils";
import useStore from "@/store/store";

const MySlider = ({ startIcon: StartIcon, endIcon: EndIcon, className }) => {
	const { colorTemp, setColorTemp } = useStore();
	const [value, setValue] = useState([colorTemp]);

	useEffect(() => {
		setColorTemp(value[0]);
	}, [value]);

	return (
		<div className={cn("flex items-center gap-3 text-gray", className)}>
			<StartIcon className="w-7 opacity-60" />
			<Slider value={value} onValueChange={setValue} aria-label="Volume slider" />
			<EndIcon className="w-7 opacity-60" />
		</div>
	);
}

export default MySlider