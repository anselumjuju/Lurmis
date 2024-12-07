import { cn } from "../../utils/utils";

const PrimaryButton = ({ text, onClick, startIcon: StartIcon, endIcon: EndIcon, isResponsive, variant, className }) => {
	const baseStyles = 'w-max px-6 py-3 rounded-full flex gap-x-3 group'
	const variantStyles = variant == 'outlined'
		? 'bg-transparent border border-gray text-gray'
		: `${isResponsive && 'bg-transparent border border-gray text-gray'} md:bg-gray md:text-white`;

	return (
		<button
			className={cn(`${baseStyles} ${variantStyles}`, className)}
			onClick={onClick}
		>
			{StartIcon && <StartIcon className="w-5 group-hover:w-6 transition-all duration-150" />}
			<span className={`${isResponsive && 'hidden md:block'}`}>{text}</span>
			{EndIcon && <EndIcon className="w-5 group-hover:w-6 transition-all duration-150" />}
		</button>
	);
};

export default PrimaryButton;
