import Image from 'next/image';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

import NavigationStitch from './stitch';

import meta from '../../content/data/meta.json';

const { Footer: FooterStitch, GitHub, Links } = NavigationStitch;

export function Footer() {
  return (
    <FooterStitch>
      <div>
        <p>
          <strong>
            And one cried unto another, and said, Holy, holy, holy, is the LORD
            of hosts: the whole earth is full of his glory.
          </strong>
        </p>
        <p>Isaiah 6:3</p>
      </div>
      <Links>
        <li>
          <a
            href={meta.links.gab}
            rel="noreferrer"
            style={{ position: 'relative' }}
            target="_blank"
          >
            <Image alt="Gab" height={24} src="/images/gab.svg" width={40} />
          </a>
        </li>
        <li>
          <a href={meta.links.github} rel="noreferrer" target="_blank">
            <GitHub />
            <VisuallyHidden.Root>GitHub</VisuallyHidden.Root>
          </a>
        </li>
      </Links>
    </FooterStitch>
  );
}
