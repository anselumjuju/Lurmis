import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import useStore from "@/store/store";
import { Lightbulb, LightbulbOff } from "lucide-react";
import { useEffect, useState } from "react";

const MyToggle = ({ className }) => {
	const { isLightOn, setIsLightOn } = useStore();
	const [checked, setChecked] = useState(isLightOn);

	useEffect(() => {
		setIsLightOn(checked);
	}, [checked]);

	const toggleSwitch = () => setChecked((prev) => !prev);

	return (
		<div
			className={cn("group flex items-center gap-2 text-gray", className)}
			data-state={checked ? "checked" : "unchecked"}
		>
			<span
				id="switch-off-label"
				className=" cursor-pointer text-right text-sm font-medium group-data-[state=checked]:text-muted-foreground/70"
				onClick={() => setChecked(false)}
			>
				<LightbulbOff className="w-6 opacity-60" />
			</span>
			<Switch
				checked={checked}
				onCheckedChange={toggleSwitch}
			/>
			<span
				id="switch-on-label"
				className="cursor-pointer text-left text-sm font-medium group-data-[state=unchecked]:text-muted-foreground/70"
				onClick={() => setChecked(true)}
			>
				<Lightbulb className="w-6 opacity-60" />
			</span>
		</div>
	);
}

export default MyToggle