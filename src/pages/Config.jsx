import { useEffect } from 'react';
import {
  ArrowLeft,
  Download,
  MailIcon,
  MoveDiagonal,
  Share2,
} from 'lucide-react';
import { Controls, Experience, Logo, PrimaryButton } from '../components';
import useStore from '@/store/store';
import {
  getTranslation,
  openEmail,
  openShare,
  takeScreenshot,
} from '@/lib/utils';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import VoiceTrigger from '@/components/VoiceTrigger';

const Config = () => {
  const { isFullScreen, setIsFullScreen, language, setLanguage } = useStore();
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const lang = searchParams.get('lang');

    if (!lang) {
      setLanguage('eu');
      return;
    }

    if (lang !== 'en' && lang !== 'es' && lang !== 'eu') setLanguage('eu');
    setLanguage(lang);
  }, [location, pathName, searchParams, setLanguage]);

  return (
    <div className="w-full h-dvh flex flex-col lg:flex-row overflow-y-hidden select-none">
      <VoiceTrigger />
      {/* 3D */}
      <div
        className={`flex-1 h-full ${!isFullScreen && 'max-h-[50vh] lg:max-h-full'} relative`}
      >
        <div className="w-full p-5 flex items-center absolute top-0 z-10">
          <PrimaryButton
            text={getTranslation(language, 'config.buttons.back')}
            startIcon={ArrowLeft}
            onClick={() => {
              const lang = searchParams.get('lang');
              const newPath =
                '/' + (lang === null || lang === 'eu' ? '' : `?lang=${lang}`);
              navigate(newPath);
            }}
            isResponsive
            className={'lg:px-7 py-2.5'}
            variant={'outlined'}
          />
          <span className="flex-1 flex justify-center lg:hidden">
            <Logo className={'fill-gray'} />
          </span>
          <PrimaryButton
            text=""
            startIcon={MoveDiagonal}
            onClick={() => {
              setIsFullScreen(!isFullScreen);
            }}
            isResponsive
            className={'lg:hidden py-2.5'}
            variant={'outlined'}
          />
        </div>
        <div className="w-full h-full absolute top-0 bg-neutral-400">
          <Experience />
        </div>
        <PrimaryButton
          text=""
          startIcon={MoveDiagonal}
          onClick={() => {
            setIsFullScreen(!isFullScreen);
          }}
          isResponsive
          className={'hidden lg:block absolute bottom-4 right-4'}
          variant={'outlined'}
        />
      </div>

      {/* Controls */}
      {!isFullScreen && (
        <div className="flex-1 max-w-(--breakpoint-md) h-full p-5 flex flex-col gap-y-3 overflow-y-auto z-10">
          <div className="flex items-center justify-between">
            <span className="justify-center hidden lg:flex">
              <Logo className={'fill-gray'} />
            </span>
            <PrimaryButton
              text={getTranslation(language, 'config.buttons.contact')}
              startIcon={MailIcon}
              onClick={openEmail}
              isResponsive
              className={'lg:px-7 py-2.5'}
            />
            <div className="w-full flex justify-end gap-x-5 lg:hidden">
              <PrimaryButton
                text={getTranslation(language, 'config.buttons.share')}
                startIcon={Share2}
                onClick={openShare}
                isResponsive
                className={'lg:px-7 py-2.5'}
                variant={'outlined'}
              />
              <PrimaryButton
                text={getTranslation(language, 'config.buttons.download')}
                startIcon={Download}
                onClick={takeScreenshot}
                isResponsive
                className={'lg:px-7 py-2.5'}
                variant={'outlined'}
              />
            </div>
          </div>
          <div className="flex-1">
            <Controls />
          </div>
          <div className="flex-col items-end space-y-3 hidden lg:flex">
            <PrimaryButton
              text={getTranslation(language, 'config.buttons.share')}
              startIcon={Share2}
              onClick={openShare}
              isResponsive
              className={'lg:px-7 py-2.5'}
              variant={'outlined'}
            />
            <PrimaryButton
              text={getTranslation(language, 'config.buttons.download')}
              startIcon={Download}
              onClick={takeScreenshot}
              isResponsive
              className={'lg:px-7 py-2.5'}
              variant={'outlined'}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Config;
