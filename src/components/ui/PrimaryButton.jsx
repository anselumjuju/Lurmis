import { cn } from "@/lib/utils";
import gsap from "gsap";

const PrimaryButton = ({ text, onClick, startIcon: StartIcon, endIcon: EndIcon, isResponsive, variant, className }) => {
	const baseStyles = "w-max px-[15px] py-2.5 rounded-full flex items-center gap-x-3";
	const variantStyles =
		variant === "outlined"
			? "bg-transparent border border-gray text-gray"
			: isResponsive
				? "bg-transparent border border-gray text-gray sm:text-gray lg:bg-gray lg:text-white lg:border-none"
				: "bg-gray text-white";

	const handleMouseUp = () => (StartIcon || EndIcon) && gsap.to('.icon', { scaleX: 1.3, scaleY: 1.1, duration: 0.2 });

	const handleMouseDown = () => (StartIcon || EndIcon) && gsap.to('.icon', { scaleX: 1, duration: 0.2 });


	return (
		<button
			className={cn(`${baseStyles} ${variantStyles}`, className)}
			onClick={onClick}
			onMouseEnter={handleMouseUp}
			onMouseLeave={handleMouseDown}
		>
			{StartIcon && <StartIcon className="w-4 icon" />}
			{text && <span className={`text-nowrap ${isResponsive && "hidden lg:block"}`}>{text}</span>}
			{EndIcon && <EndIcon className="w-4 icon" />}
		</button>
	);
};

export default PrimaryButton;
