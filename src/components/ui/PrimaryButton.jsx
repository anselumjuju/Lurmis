import { cn } from "../../utils/utils";

const PrimaryButton = ({ text, onClick, startIcon: StartIcon, endIcon: EndIcon, isResponsive, variant, className }) => {
	const baseStyles = "w-max px-[15px] py-2.5 rounded-full flex items-center gap-x-3 group";
	const variantStyles =
		variant === "outlined"
			? "bg-transparent border border-gray text-gray"
			: isResponsive
				? "bg-transparent border border-gray text-gray sm:text-gray lg:bg-gray lg:text-white lg:border-none"
				: "bg-gray text-white";

	return (
		<button
			className={cn(`${baseStyles} ${variantStyles}`, className)}
			onClick={onClick}
		>
			{StartIcon && <StartIcon className="w-4 group-hover:w-6 transition-all duration-150" />}
			{text && <span className={`${isResponsive && "hidden lg:block"}`}>{text}</span>}
			{EndIcon && <EndIcon className="w-4 group-hover:w-6 transition-all duration-150" />}
		</button>
	);
};

export default PrimaryButton;
