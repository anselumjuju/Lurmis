import {useEffect, useState} from 'react';
import {Slider} from '@/components/ui/slider';
import {cn, sliderValueToRGB} from '@/lib/utils';
import useStore from '@/store/store';
import {debounce} from 'lodash';

const TempSlider = ({startIcon: StartIcon, endIcon: EndIcon, className}) => {
  const {colorTemp, setColorTemp, setLampColor} = useStore();
  const [value, setValue] = useState([colorTemp]);

  useEffect(() => {
    const debouncedUpdate = debounce(() => {
      setColorTemp(sliderValueToRGB(value[0]));
      setLampColor(sliderValueToRGB(value[0]));
    }, 200);

    debouncedUpdate();
    return () => debouncedUpdate.cancel();
  }, [value, setColorTemp, setLampColor]);

  return (
    <div className={cn('flex items-center gap-3 text-gray', className)}>
      <StartIcon className='w-7 opacity-60' />
      <Slider value={value} onValueChange={setValue} aria-label='Volume slider' />
      <EndIcon className='w-7 opacity-60' />
    </div>
  );
};

export default TempSlider;
