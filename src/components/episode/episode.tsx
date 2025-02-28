import React from 'react';
import Image from 'next/image';
import { IEpisode } from '@/components/episode/models';
import thumbUpFilled from '@/icons/thumb-up-filled.svg';

const Episode = ({ image, title, subtitle, season, episode, views, duration, likes }: IEpisode) => {
  return (
    <div className="md:w-[280px] h-[190px] md:h-[240px] cursor-pointer">
      <div className="hidden md:block p-3">
        <div className="relative">
          <Image src={image} alt={title} className="w-full" />
          <span className="absolute bottom-2 left-2 bg-black/70 text-xs px-2 py-1 rounded">
            {duration}
          </span>
        </div>

        <div className="mt-3 text-right space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold">{title}</span>
            <div className="flex items-center gap-1 text-gray-400">
              <Image src={thumbUpFilled} alt={'thumbup filled'}></Image>
              <span className="text-xs">%{likes}</span>
            </div>
          </div>
          <div className="text-gray-400 text-xs">{subtitle}</div>
          <span className="text-gray-400 text-xs">
            فصل {season} قسمت {episode} · {views} هزار بازدید
          </span>
        </div>
      </div>

      <div className="md:hidden flex gap-5 p-3">
        <div className="relative">
          <Image src={image} alt={title} />
          <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {duration}
          </span>
        </div>

        <div className="flex flex-col justify-between space-y-3">
          <div className="space-y-3">
            <div className="text-sm font-bold">{title}</div>
            <div className="text-gray-400 text-xs">{subtitle}</div>
            <div className="text-gray-400 text-xs">
              فصل {season} قسمت {episode} · {views} هزار بازدید
            </div>
          </div>
          <div className="flex items-center gap-1 text-gray-400 mb-2">
            <Image src={thumbUpFilled} alt={'thumbup filled'}></Image>
            <span className="text-xs">%{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
