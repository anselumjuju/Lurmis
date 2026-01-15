import {useEffect, useState} from 'react';
import {Slider} from '@/components/ui/slider';
import {cn} from '@/lib/utils';
import useStore from '@/store/store';
import {debounce} from 'lodash';

const IntensitySlider = ({startIcon: StartIcon, endIcon: EndIcon, className}) => {
  const {lampIntensity, setLampIntensity} = useStore();
  const [value, setValue] = useState(lampIntensity);

  useEffect(() => {
    setValue(lampIntensity);
  }, [lampIntensity]);

  useEffect(() => {
    const debouncedUpdate = debounce(() => {
      setLampIntensity(value);
    }, 200);

    debouncedUpdate();
    return () => debouncedUpdate.cancel();
  }, [value, setLampIntensity]);

  return (
    <div className={cn('flex items-center gap-3 text-gray', className)}>
      <StartIcon className='w-7 opacity-60' />
      <Slider value={[value]} onValueChange={setValue} aria-label='Volume slider' min={0} max={1000} />
      <EndIcon className='w-7 opacity-60' />
    </div>
  );
};

export default IntensitySlider;
