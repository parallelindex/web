import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons/lib';

import { TabActiveCSS, TabsStitch } from './stitch';

export function Tabs({
  links,
}: {
  links: {
    icon?: IconType;
    link: string;
    text: string;
  }[];
}) {
  const router = useRouter();

  return (
    <TabsStitch>
      {links.map(({ icon, link, text }, index) => {
        const Icon = icon;

        return (
          <Link key={index} href={link}>
            <a className={router.pathname === link ? TabActiveCSS() : ''}>
              {icon && <Icon />}
              {text}
            </a>
          </Link>
        );
      })}
    </TabsStitch>
  );
}
