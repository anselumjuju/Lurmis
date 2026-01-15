import {Check, Globe} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {useEffect, useState} from 'react';
import useStore from '@/store/store';
import {useNavigate} from 'react-router-dom';

const languages = [
  {code: 'en', name: 'English'},
  {code: 'es', name: 'Español'},
  {code: 'eu', name: 'Euskara'},
];

const LanguageToggle = () => {
  const {language} = useStore();
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedLanguage(language);
  }, [language]);

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    if (code === 'en') navigate('/?lang=en');
    else if (code === 'es') navigate('/?lang=es');
    else navigate('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='rounded-full hover:bg-accent hover:text-accent-foreground active:scale-95 transition-transform data-[state=open]:bg-accent'>
          <Globe className='h-[1.2rem] w-[1.2rem]' />
          <span className='sr-only'>Toggle language</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-32 bg-background/80 backdrop-blur-sm shadow-md'>
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)} className='cursor-pointer flex justify-between items-center py-2'>
            <span className={`text-sm ${selectedLanguage === lang.code ? 'font-medium' : 'font-normal'}`}>{lang.name}</span>
            {selectedLanguage === lang.code && <Check className='h-3.5 w-3.5' />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
