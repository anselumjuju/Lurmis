import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/utils/utils";
import { Lightbulb, LightbulbOff } from "lucide-react";
import { useState } from "react";

const MyToggle = ({ className }) => {
	const [checked, setChecked] = useState(false);

	const toggleSwitch = () => setChecked((prev) => !prev);

	return (
		<div className={cn("flex items-center gap-3 text-gray", className)}>
			<div
				className="group flex items-center gap-2 text-gray"
				data-state={checked ? "checked" : "unchecked"}
			>
				<span
					id="switch-off-label"
					className="flex-1 cursor-pointer text-right text-sm font-medium group-data-[state=checked]:text-muted-foreground/70"
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
					className="flex-1 cursor-pointer text-left text-sm font-medium group-data-[state=unchecked]:text-muted-foreground/70"
					onClick={() => setChecked(true)}
				>
					<Lightbulb className="w-6 opacity-60" />
				</span>
			</div>
		</div>
	);
}

export default MyToggle