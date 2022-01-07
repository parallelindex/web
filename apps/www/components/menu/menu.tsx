import Link from 'next/link';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { IoChevronForward } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

import { MenuContent, MenuTrigger } from './stitch';

export function Menu({
  button,
  links,
}: {
  button: React.ReactNode;
  links: {
    icon?: IconType;
    link: string;
    text: string;
  }[];
}) {
  return (
    <DropdownMenu.Root>
      <MenuTrigger tabIndex={0}>{button}</MenuTrigger>
      <MenuContent align="end" portalled={false}>
        {links.map(({ icon, link, text }, index) => {
          const Icon = icon;

          return (
            <Link key={index} href={link}>
              <a>
                {icon && <span>{<Icon />}</span>}
                {text}
                <IoChevronForward />
              </a>
            </Link>
          );
        })}
      </MenuContent>
    </DropdownMenu.Root>
  );
}
