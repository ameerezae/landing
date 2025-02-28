import { IEpisode } from '@/components/episode/models';
import Episode from '@/components/episode/episode';

const EpisodeList = ({ episodes }: { episodes: IEpisode[] }) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5">
      {episodes.map((episode, index) => {
        return (
          <div key={index}>
            <Episode {...episode} />
          </div>
        );
      })}
    </div>
  );
};

export default EpisodeList;
