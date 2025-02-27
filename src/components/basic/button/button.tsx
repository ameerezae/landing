'use client';
import { ButtonProps } from '@/components/basic/button/models';

const buttonStyles = {
  primary: 'bg-primary hover:bg-primary-700 px-4 py-2',
  outlined: 'border border-foreground px-4 py-2 hover:bg-foreground hover:text-background',
  icon: 'border border-gray-400 p-2 hover:bg-gray-700 w-10 h-10 flex items-center justify-center',
};

const Button = ({ variant = 'primary', onClick, children }: ButtonProps) => {
  return (
    <button
      className={`${buttonStyles[variant]} flex items-center gap-2 rounded-[2px] cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
