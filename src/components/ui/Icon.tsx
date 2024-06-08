import { Icon as IconifyIcon } from "@iconify/react";

interface IconsProps {
  icon: string;
  className?: string;
  width?: string;
  rotate?: number;
  hFlip?: boolean;
  vFlip?: boolean;
}

const Icon = ({
  icon,
  className,
  width,
  rotate = 0,
  hFlip = false,
  vFlip,
}: IconsProps) => {
  return (
    <>
      <IconifyIcon
        width={width}
        rotate={rotate}
        hFlip={hFlip}
        icon={icon}
        className={className}
        vFlip={vFlip}
      />
    </>
  );
};

export default Icon;
