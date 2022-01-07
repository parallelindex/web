import { useCallback, useEffect } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

import SegmentStitch from './stitch';

const { TabsRoot, TabsList, TabsTrigger } = SegmentStitch;

export function Segment({
  panels,
  setValue,
  tabs,
  value = 0,
}: {
  panels: React.ReactNode[];
  setValue;
  tabs: string[];
  value: number;
}) {
  const handleTabsChange = useCallback(
    (index: number) => {
      setValue(index);
    },
    [setValue],
  );

  useEffect(() => {
    handleTabsChange(value);
  }, [handleTabsChange, value]);

  return (
    <Tabs.Root value={`tab-${value}`} onValueChange={() => handleTabsChange}>
      <TabsList>
        {tabs.map((tab, index) => (
          <TabsTrigger
            key={`tab-${index}`}
            onClick={() => handleTabsChange(index)}
            value={`tab-${index}`}
          >
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
      {panels.map((panel, index) => (
        <Tabs.Content key={`content-${index}`} value={`tab-${index}`}>
          {panel}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
