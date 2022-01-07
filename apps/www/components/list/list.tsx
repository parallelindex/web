import { Fragment } from 'react';

import type { Company } from 'types';

import { ListItem } from './listItem';
import { ListStitch } from './stitch';
import ListItemStitch from './listItem/stitch';

const { LinkSkeleton } = ListItemStitch;

export function List({
  currentCategory,
  data,
  filterBy,
}: {
  currentCategory?: string;
  data?: [Company];
  filterBy?: 'category' | 'name';
}) {
  if (!currentCategory && !data && !filterBy)
    return (
      <ListStitch>
        <LinkSkeleton inline />
        <LinkSkeleton inline />
      </ListStitch>
    );

  return (
    <ListStitch>
      {data.map(
        ({
          id,
          category,
          description,
          gab,
          images,
          logo,
          name,
          uuid,
          website,
        }) => {
          let filter;

          if (filterBy === 'category') {
            filter = category.name;
          } else if (filterBy === 'name') {
            filter = name.charAt(0).toUpperCase();
          }

          return (
            <Fragment key={uuid}>
              {currentCategory === filter && (
                <ListItem
                  id={id}
                  category={category}
                  description={description}
                  gab={gab}
                  images={images}
                  logo={logo}
                  name={name}
                  uuid={uuid}
                  website={website}
                />
              )}
            </Fragment>
          );
        },
      )}
    </ListStitch>
  );
}
