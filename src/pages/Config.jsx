import { ArrowLeft, Download, MailIcon, MoveDiagonal, Share2 } from "lucide-react"
import { Controls, Experience, Logo, PrimaryButton } from "../components"
import useStore from "@/store/store"

const Config = () => {
	const { setPage, isFullScreen, setIsFullScreen } = useStore()

	return (
		<div className="w-full h-dvh flex flex-col lg:flex-row bg-neutral-300 overflow-y-hidden">

			{/* 3D */}
			<div className={`w-full h-full ${!isFullScreen && 'max-h-[50vh] lg:max-h-full'} relative`}>
				<div className="w-full p-5 flex items-center">
					<PrimaryButton text='Back' startIcon={ArrowLeft} onClick={() => { setPage('home') }} isResponsive className={'lg:px-7 py-2.5'} variant={"outlined"} />
					<span className="flex-1 flex justify-center lg:hidden"><Logo className={'fill-gray'} /></span>
					<PrimaryButton text='' startIcon={MoveDiagonal} onClick={() => { setIsFullScreen(!isFullScreen) }} isResponsive className={'lg:hidden py-2.5'} variant={"outlined"} />
				</div>
				<Experience />
				<PrimaryButton text='' startIcon={MoveDiagonal} onClick={() => { setIsFullScreen(!isFullScreen) }} isResponsive className={'hidden lg:block absolute bottom-4 right-4'} variant={"outlined"} />
			</div>

			{/* Controls */}
			{!isFullScreen &&
				<div className="w-full h-full p-5 flex flex-col gap-y-3 bg-white rounded-t-3xl lg:rounded-t-none overflow-y-auto z-10">
					<div className="flex items-center justify-between">
						<span className="justify-center hidden lg:flex"><Logo className={'fill-gray'} /></span>
						<PrimaryButton text='Contact' startIcon={MailIcon} onClick={() => { }} isResponsive className={'lg:px-7 py-2.5'} />
						<div className="w-full flex justify-end gap-x-5 lg:hidden">
							<PrimaryButton text='Share' startIcon={Share2} onClick={() => { }} isResponsive className={'lg:px-7 py-2.5'} variant={'outlined'} />
							<PrimaryButton text='Download' startIcon={Download} onClick={() => { }} isResponsive className={'lg:px-7 py-2.5'} variant={'outlined'} />
						</div>
					</div>
					<div className="flex-1">
						<Controls />
					</div>
					<div className="flex-col items-end space-y-3 hidden lg:flex">
						<PrimaryButton text='Share' startIcon={Share2} onClick={() => { }} isResponsive className={'lg:px-7 py-2.5'} variant={'outlined'} />
						<PrimaryButton text='Download' startIcon={Download} onClick={() => { }} isResponsive className={'lg:px-7 py-2.5'} variant={'outlined'} />
					</div>
				</div>
			}
		</div>
	)
}

export default Config