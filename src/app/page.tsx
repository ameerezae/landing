'use client';
import Button from '@/components/basic/button/button';
import Image from 'next/image';
import download from '@/icons/download.svg';

export default function Home() {
  return (
    <div>
      <Button variant="icon">
        <Image src={download} alt={'download'} width={15} height={15} />
      </Button>
    </div>
  );
}
