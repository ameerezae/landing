'use client';

import Tabs from '@/library/tabs/tabs';
import EpisodeList from '@/components/episode/edpisode-list';
import { Season } from '@/components/content-info/models';
import { useState } from 'react';

const Seasons = ({ seasons }: { seasons: Season[] }) => {
  const [activeSeason, setActiveSeason] = useState(0);

  return (
    <div className="px-4 md:px-32">
      <Tabs
        tabs={seasons.map(season => season.name)}
        onChangeActiveTab={activeTabIndex => {
          setActiveSeason(activeTabIndex);
        }}
      />
      <EpisodeList episodes={seasons[activeSeason].episodes} />
    </div>
  );
};

export default Seasons;
