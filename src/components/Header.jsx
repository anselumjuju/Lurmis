import useStore from "@/store/store";
import Logo from "./ui/Logo"
import MyToggle from "./ui/MyToggle"

const Header = () => {
	const { isEnglish, setIsEnglish } = useStore();

	return (
		<div className="w-full flex items-center justify-between">
			<Logo className={"fill-white"} />
			<MyToggle initialValue={isEnglish} toggleFunc={setIsEnglish} startText={'ES'} endText={'EN'} className={'dark text-white'} />
		</div>
	)
}
export default Header