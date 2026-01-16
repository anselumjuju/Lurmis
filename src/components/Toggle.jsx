import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const Toggle = ({
  startIcon: StartIcon,
  endIcon: EndIcon,
  startText: StartText,
  endText: EndText,
  initialValue,
  value,
  toggleFunc,
  className,
}) => {
  const [checked, setChecked] = useState(initialValue);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  useEffect(() => {
    toggleFunc(checked);
  }, [checked, toggleFunc]);

  const toggleSwitch = () => setChecked(prev => !prev);

  return (
    <div
      className={cn('group flex items-center gap-2 text-gray', className)}
      data-state={checked ? 'checked' : 'unchecked'}
    >
      <span
        id="switch-off-label"
        className=" cursor-pointer text-right text-sm font-medium group-data-[state=checked]:text-muted-foreground/70"
        onClick={() => setChecked(false)}
      >
        {StartIcon && <StartIcon className="w-6 opacity-60" />}
        {StartText && <span className="">{StartText}</span>}
      </span>
      <Switch checked={checked} onCheckedChange={toggleSwitch} />
      <span
        id="switch-on-label"
        className="cursor-pointer text-left text-sm font-medium group-data-[state=unchecked]:text-muted-foreground/70"
        onClick={() => setChecked(true)}
      >
        {EndIcon && <EndIcon className="w-6 opacity-60" />}
        {EndText && <span className="">{EndText}</span>}
      </span>
    </div>
  );
};

export default Toggle;
