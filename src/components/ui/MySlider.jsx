import { Slider } from "@/components/ui/Slider";
import { cn } from "@/utils/utils";
import { useState } from "react";

const MySlider = ({ startIcon: StartIcon, endIcon: EndIcon, className }) => {
	const [value, setValue] = useState([25]);

	return (
		<div className={cn("flex items-center gap-3 text-gray", className)}>
			<StartIcon className="w-7 opacity-60" />
			<Slider value={value} onValueChange={setValue} aria-label="Volume slider" />
			<EndIcon className="w-7 opacity-60" />
		</div>
	);
}

export default MySlider