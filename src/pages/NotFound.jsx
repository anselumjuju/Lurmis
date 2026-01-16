import { Logo, PrimaryButton } from '@/components';

const NotFound = () => {
  return (
    <div className="w-full h-dvh py-[5%]  flex items-center justify-between flex-col space-y-7">
      <Logo className={'fill-neutral-700'} />
      <div className="space-y-5 flex-1 flex flex-col justify-center text-center">
        <h1 className="font-aboreto text-6xl text-neutral-500">Not Found</h1>
        <p className="w-2/3 mx-auto text-md text-neutral-500">
          Oops! The page you&apos;re looking for doesn&apos;t exist. Check the
          URL or return to the homepage.
        </p>
        <div className="h-10" />
        <PrimaryButton
          text={'Back to Home'}
          onClick={() => {
            window.location.href = '/';
          }}
          variant={'outlined'}
          className={'mx-auto'}
        />
      </div>
    </div>
  );
};

export default NotFound;
