import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Headroom from 'react-headroom';
import { IoHome, IoLogOut, IoPersonCircle } from 'react-icons/io5';

import { useAuth } from 'auth';

import NavigationStitch from './stitch';
import { Logo } from '../logo';
import { Menu } from '../menu';
import { Tabs } from './tabs';
import { Button } from '../button';
import { MediumFlexCSS, Small } from '../breakpoints';

import meta from '../../content/data/meta.json';
import header from '../../content/data/header.json';

const { Header: HeaderStitch, Nav } = NavigationStitch;

export function Header() {
  const router = useRouter();

  const { user } = useAuth();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={meta.siteDescription} />

        <meta property="og:url" content="https://www.parallelindex.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.siteTitle} />
        <meta property="og:description" content={meta.siteDescription} />
        <meta
          property="og:image"
          content="https://www.parallelindex.com/images/social.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <HeaderStitch>
        <Headroom disableInlineStyles>
          <Nav>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>

            <ul>
              {header.map(({ link, name }) => (
                <li key={link}>
                  <Link href={`/${link}`}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
              <div className={MediumFlexCSS()}>
                {user ? (
                  <li>
                    <Menu
                      button={
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ height: '2rem', width: '2rem' }}
                        >
                          <path
                            d="M12.4135 2.89447C7.03742 2.89447 2.66351 7.26838 2.66351 12.6445C2.66351 18.0206 7.03742 22.3945 12.4135 22.3945C17.7896 22.3945 22.1635 18.0206 22.1635 12.6445C22.1635 7.26838 17.7896 2.89447 12.4135 2.89447ZM10.0595 8.37041C10.6534 7.74088 11.4891 7.39447 12.4135 7.39447C13.3379 7.39447 14.1662 7.74322 14.7624 8.37603C15.3666 9.01728 15.6605 9.87884 15.5912 10.8051C15.4524 12.6445 14.0274 14.1445 12.4135 14.1445C10.7996 14.1445 9.37179 12.6445 9.23586 10.8046C9.16695 9.87088 9.46039 9.0065 10.0595 8.37041V8.37041ZM12.4135 20.8945C11.3122 20.8952 10.2219 20.6748 9.20734 20.2462C8.19278 19.8177 7.27461 19.1898 6.50726 18.3998C6.94674 17.773 7.50671 17.2402 8.15445 16.8323C9.34929 16.0663 10.8615 15.6445 12.4135 15.6445C13.9655 15.6445 15.4777 16.0663 16.6712 16.8323C17.3194 17.24 17.8799 17.7729 18.3198 18.3998C17.5525 19.1899 16.6343 19.8178 15.6198 20.2464C14.6052 20.6749 13.5149 20.8953 12.4135 20.8945V20.8945Z"
                            fill="url(#paint0_linear_141:1858)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_141:1858"
                              x1="12.4135"
                              y1="2.89447"
                              x2="12.4135"
                              y2="22.3945"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopOpacity="0.24" />
                              <stop offset="1" stopOpacity="0.48" />
                            </linearGradient>
                          </defs>
                        </svg>
                      }
                      links={[
                        {
                          icon: IoPersonCircle,
                          link: '/account',
                          text: 'Account',
                        },
                        {
                          icon: IoLogOut,
                          link: '/logout',
                          text: 'Log out',
                        },
                      ]}
                    />
                  </li>
                ) : (
                  <>
                    <li>
                      <Button
                        onClick={() => router.push('/account?tab=0')}
                        variant="secondary"
                      >
                        Log in
                      </Button>
                    </li>
                    <li>
                      <Button onClick={() => router.push('/account?tab=1')}>
                        Sign up
                      </Button>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </Nav>
        </Headroom>
      </HeaderStitch>

      <Small>
        <Tabs
          links={[
            {
              icon: IoHome,
              link: '/',
              text: 'Home',
            },
            {
              icon: IoPersonCircle,
              link: '/account',
              text: 'Account',
            },
          ]}
        />
      </Small>
    </>
  );
}
