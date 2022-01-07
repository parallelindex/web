import Skeleton from 'react-loading-skeleton';

import { CategoryStitch } from './stitch';

export function Category({ children }: { children?: React.ReactNode }) {
  if (!children) {
    return (
      <CategoryStitch>
        <h2
          style={{
            width: 100,
          }}
        >
          <Skeleton />
        </h2>
      </CategoryStitch>
    );
  }

  return (
    <CategoryStitch>
      <h2>{children}</h2>
    </CategoryStitch>
  );
}
