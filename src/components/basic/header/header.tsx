import { HeaderLink } from '@/components/basic/header/models';
import Image from 'next/image';
import person from '@/icons/person.svg';
import chevronRight from '@/icons/chevron-right.svg';

const LINKS: HeaderLink[] = [
  {
    label: 'پخش زنده',
    url: '#',
  },
  {
    label: 'فیلم و سریال',
    url: '#',
  },
  {
    label: 'کودک',
    url: '#',
  },
  {
    label: 'ورزش',
    url: '#',
  },
  {
    label: 'آرشیو محتوایی',
    url: '#',
  },
];

const Header = () => {
  return (
    <header className="bg-background md:bg-surface-1 h-[50px] flex items-center justify-between px-4 md:ps-0 md:pe-6 ">
      <div className="flex items-center w-full h-full md:hidden justify-between">
        <button className="h-full w-10 flex justify-center cursor-pointer">
          <Image src={chevronRight} alt={'chevron-right'} width={10} height={10} />
        </button>

        <div className="text-white font-bold text-lg">TW</div>

        <button className="h-full w-10 flex justify-center cursor-pointer">
          <Image src={person} alt={'person'} width={20} height={20} />
        </button>
      </div>

      <nav className="hidden md:flex items-center gap-6 h-full text-sm">
        <div className="bg-red-600 text-white font-bold text-lg px-3 py-1 h-full grid place-items-center">
          TW
        </div>
        {LINKS.map((link, index) => (
          <a href={link.url} className="hover:text-gray-400 font-semibold text-white" key={index}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="hidden md:block">
        <button className="text-sm hover:text-gray-400 text-white">ورود / ثبت نام</button>
      </div>
    </header>
  );
};

export default Header;
