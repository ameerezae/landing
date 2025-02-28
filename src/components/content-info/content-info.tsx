'use client';
import Image from 'next/image';
import Button from '@/library/button/button';
import Tag from '@/library//tag/tag';
import { IContentInfo } from '@/components/content-info/models';

import play from '@/icons/play.svg';
import thumbUp from '@/icons/thumb-up.svg';
import thumbDown from '@/icons/thumb-down.svg';
import download from '@/icons/download.svg';
import bookmark from '@/icons/bookmark.svg';
import thumbUpFilled from '@/icons/thumb-up-filled.svg';
import imdb from '@/icons/imdb.svg';

const ContentInfo = ({
  title,
  description,
  heroBackground,
  cover,
  mobileHeroBackground,
  extras,
  channel,
}: IContentInfo) => {
  return (
    <div className="relative w-full">
      <div className="relative w-full">
        <div className="absolute w-full h-[50%] bottom-0 bg-gradient-to-b to-background/100"></div>
        <div className="hidden md:block absolute w-[50%] h-full right-0 md:bg-gradient-to-r md:from-background/0 md:to-background/20"></div>
        <Image
          src={heroBackground}
          alt="Hannibal"
          className="w-full hidden md:block md:h-[580px]"
        />
        <Image
          src={mobileHeroBackground}
          alt="Hannibal"
          className="w-full md:hidden md:h-[580px]"
        />
      </div>

      <div className="max-md:translate-y-[-10px] md:absolute md:inset-0 w-full flex items-end md:items-center justify-center md:justify-start px-4 md:px-32 pb-8 md:pb-0">
        <div className="w-full relative space-y-4 md:space-y-6 text-center md:text-right">
          <Image src={cover} width={380} alt={'cover'} className="hidden md:block"></Image>
          <h1 className="text-sm md:text-lg font-bold">{title}</h1>

          <div className="text-gray-300 text-xs flex flex-wrap justify-center md:justify-start items-center gap-2">
            <div className="flex items-center gap-1">
              <Image src={thumbUpFilled} alt={'thumbup filled'}></Image>
              <span>%{extras.likes}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Image src={imdb} alt={'imdb'}></Image>
              <span>{extras.imdb}</span>
            </div>
            <span>·</span>
            <span className="whitespace-nowrap">{extras.duration}دقیقه</span>
            <span>·</span>
            <span className="whitespace-nowrap">{extras.productionTime}</span>
            <span>·</span>
            <span>{extras.country}</span>
            <span>·</span>
            <span className="whitespace-nowrap">{extras.seasons}</span>
            <span>·</span>
            <span className="whitespace-nowrap">{extras.translation}</span>
            <span>·</span>
            <span className="whitespace-nowrap">{extras.age}</span>
          </div>

          <div className="flex justify-center md:justify-start gap-2">
            {extras.genres.map((tag, index) => (
              <div key={index}>
                <Tag label={tag} />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            <Button variant="primary" className="w-[95%] md:w-auto">
              <Image src={play} width={15} height={15} alt={'play'} />
              پخش
            </Button>
            <div className="flex gap-8">
              <div className="flex gap-2">
                <Button variant="icon">
                  <Image src={download} width={20} height={20} alt={'download'} />
                </Button>
                <Button variant="icon">
                  <Image src={bookmark} width={25} height={25} alt={'bookmark'} />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="icon">
                  <Image src={thumbUp} width={20} height={20} alt={'thumbUp'} />
                </Button>
                <Button variant="icon">
                  <Image src={thumbDown} width={25} height={25} alt={'thumbDown'} />
                </Button>
              </div>
            </div>
          </div>

          <div className="md:max-w-[580px] text-right">
            <span className="text-xs md:text-sm">{description}</span>
          </div>

          <div className="hidden md:block absolute left-[-50px] bottom-10">
            <Image src={channel} alt={'channel'} width={85}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentInfo;
