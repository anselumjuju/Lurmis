import { cn } from "../../utils/utils"

const Logo = ({ className }) => {
	return (
		<img
			src="/assets/logo.svg"
			alt="Lurmis"
			className={cn("w-28 lg:w-32", className)}
		/>
	)
}

export default Logo