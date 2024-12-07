import { ArrowRight } from "lucide-react"

const PrimaryButton = ({ text, isIcon, onClick }) => {
	return (
		<button
			className="w-max px-6 py-3 rounded-full bg-gray text-white flex gap-x-3 group"
		>
			{text}
			{isIcon && <ArrowRight className="w-5 group-hover:w-6 transition-all duration-150" />}
		</button>
	)
}

export default PrimaryButton