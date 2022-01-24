import { useEffect, useState } from 'react';
import Image from 'next/image';

import type { Company } from 'types';

import { getImageUrl } from '../../../lib';

import ListItemStitch from './stitch';

const { Description, Icon, Info, LinkAnchor, LinkBlock, Logo } = ListItemStitch;

export function ListItem({
  category,
  inlineStyles,
  logo,
  name,
  noLink = false,
  uuid,
  canEdit = false
}: Company & {
  inlineStyles?: boolean;
  noLink?: boolean;
  canEdit?: boolean;
}) {
  const [logoUrl, setLogoUrl] = useState();

  useEffect(() => {
    if (logo)
      getImageUrl({
        bucket: 'companies',
        path: `${uuid}/logo/${logo}`,
        setUrl: setLogoUrl,
      });
  }, [uuid, logo]);

  return (
    <li>
      <ListItemLink
        href={`/${ canEdit ? 'submit' : 'company'}/${uuid}`}
        inlineStyles={inlineStyles}
        noLink={noLink}
      >
        <Logo>
          {logo && logoUrl && (
            <Image
              alt={name}
              height={48}
              objectFit="cover"
              priority
              src={logoUrl}
              width={48}
            />
          )}
        </Logo>
        <Info>
          <h4>{name}</h4>
          <Description>{category.name}</Description>
        </Info>
      </ListItemLink>
    </li>
  );
}

function ListItemLink({
  children,
  href,
  inlineStyles,
  noLink,
}: {
  children: React.ReactNode;
  href: string;
  inlineStyles: boolean;
  noLink: boolean;
}) {
  if (noLink) return <LinkBlock inline={inlineStyles}>{children}</LinkBlock>;
  return (
    <LinkAnchor href={href} inline={inlineStyles}>
      {children}
      <Icon />
    </LinkAnchor>
  );
}
