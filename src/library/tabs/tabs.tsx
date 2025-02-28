'use client';

import React, { useEffect, useState } from 'react';
import { TabsProps } from '@/library/tabs/models';

const Tabs = ({ tabs, onChangeActiveTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    onChangeActiveTab?.(activeTab);
  }, [activeTab]);

  return (
    <div className="w-full border-b border-gray-900">
      <div className="flex justify-start gap-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative px-6 py-2 text-white text-sm cursor-pointer ${
              activeTab === index
                ? 'bg-gradient-to-t from-primary/20 to-transparent border-b-2 border-primary'
                : 'hover:text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
