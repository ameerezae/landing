'use client';

import ContentInfo from '@/components/content-info/content-info';
import { useEffect, useState } from 'react';
import { IContentInfo } from '@/components/content-info/models';
import { CONTENT_INFO } from '@/app/series/[id]/constants';

const SeriesPage = ({ params }: { params: Promise<{ category: string }> }) => {
  const [contentInfo, setContentInfo] = useState<IContentInfo | null>(null);

  useEffect(() => {
    params.then(_value => setContentInfo(CONTENT_INFO));
  }, [params]);

  if (!contentInfo) {
    return <></>;
  }

  return (
    <div>
      <ContentInfo {...contentInfo} />
    </div>
  );
};

export default SeriesPage;
