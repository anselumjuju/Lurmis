import Logo from './ui/Logo';
import LanguageToggle from './ui/languageToggle';

const Header = () => {
  return (
    <div className='w-full px-0.5 lg:px-4 3xl:px-0 flex items-center justify-between'>
      <Logo className={'fill-white'} />
      <LanguageToggle />
    </div>
  );
};
export default Header;
