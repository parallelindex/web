import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTransition, animated } from '@react-spring/web';
import Head from 'next/head';
import Image from 'next/image';
import parsePhoneNumber from 'libphonenumber-js';
import Skeleton from 'react-loading-skeleton';
import { IoCall, IoGlobeOutline, IoMail } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';

import type { Company } from 'types';
import {
  Card,
  GridImage,
  ImageGrid,
  ImageSkeleton,
  ImageWrapper,
  styled,
} from 'ui';

import { Layout, Slideshow } from '../../components';
import { CompanyStitch } from '../../layouts';
import { getCompany, getImageUrl } from '../../lib';

import meta from '../../content/data/meta.json';

const { Content, Description, Heading, Links, Logo } = CompanyStitch;

const Article = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  [`& ${Content}`]: {
    padding: '0',
  },
});

export default function Company() {
  const [company, setCompany] = useState<Company>();
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const [logoUrl, setLogoUrl] = useState();
  const isDesktop = useMediaQuery({ query: '(min-width: 60rem)' });

  const [show, set] = useState(false);
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onStart: () => set(true),
  });

  const router = useRouter();
  const { uuid } = router.query;

  function addImage(imageUrl) {
    setImageUrls((imageUrls) => [...imageUrls, imageUrl]);
  }

  useEffect(() => {
      setIsLoading(true);
      getCompany(String(uuid))
      .then((response) => response)
      .then((data) => {
        setCompany(data);
        setIsLoading(false);
      });
  }, [uuid]);

  useEffect(() => {
    if (company && company.images)
      company.images.map((image: string) => {
        getImageUrl({
          bucket: 'companies',
          path: `${uuid}/images/${image}`,
          setUrl: addImage,
        });
      });
  }, [company, uuid]);

  useEffect(() => {
    if (company && company.logo)
      getImageUrl({
        bucket: 'companies',
        path: `${uuid}/logo/${company.logo}`,
        setUrl: setLogoUrl,
      });
  }, [uuid, company]);

  const skeleton = [
    <Skeleton key={'skeleton-1'} />,
    <Skeleton key={'skeleton-2'} />,
    <Skeleton key={'skeleton-3'} />,
    <Skeleton key={'skeleton-4'} />,
    <Skeleton key={'skeleton-5'} />,
  ];
  if (isLoading)
    return (
      <Layout wide>
        <Article>
          <Heading>
            <Logo style={{ flexShrink: 0 }}>
              <div style={{ height: '100%', width: '100%' }}>
                <Skeleton
                  circle
                  inline
                  style={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                  }}
                />
              </div>
            </Logo>
            <h4 style={{ maxWidth: '12rem', width: '100%' }}>
              <Skeleton inline />
            </h4>
          </Heading>

          <ImageGrid>
            {skeleton.map((item, index) => (
              <ImageWrapper key={index}>
                <ImageSkeleton inline />
              </ImageWrapper>
            ))}
          </ImageGrid>

          <Content style={{ padding: 0 }}>
            <Description>
              <Skeleton count={5} style={{ margin: '0.5rem 0' }} />
            </Description>

            <LinkList />
          </Content>
        </Article>
      </Layout>
    );

  return transitions(
    (styles, item) =>
      item && (
        <animated.div style={styles}>
          <Layout wide>
            <Head>
              <title>
                {company.name} | {meta.siteTitle}
              </title>
            </Head>
            <Article>
              <Heading>
                {company.logo && logoUrl && (
                  <Logo>
                    <Image
                      alt={company.name}
                      layout="fill"
                      objectFit="cover"
                      priority
                      src={logoUrl}
                    />
                  </Logo>
                )}
                <h4>{company.name}</h4>
              </Heading>

              {isDesktop
                ? company.images &&
                  imageUrls && (
                    <ImageGrid>
                      {imageUrls.map((url) => (
                        <ImageWrapper key={url}>
                          <GridImage
                            alt={company.name}
                            layout="fill"
                            objectFit="cover"
                            src={url}
                          />
                        </ImageWrapper>
                      ))}
                    </ImageGrid>
                  )
                : company.images &&
                  imageUrls && <Slideshow images={imageUrls} />}

              <Content style={{ padding: 0 }}>
                <Description>
                  {company.description && company.description}
                </Description>

                <LinkList
                  website={company.website}
                  email={company.email}
                  phone={company.phone}
                  gab={company.gab}
                />
              </Content>
            </Article>
          </Layout>
        </animated.div>
      ),
  );
}

function LinkList({
  email,
  gab,
  phone,
  website,
}: {
  email?: string;
  gab?: string;
  phone?: string;
  website?: string;
}) {
  if (!email && !gab && !phone && !website)
    return (
      <Card style={{ marginTop: 0, maxWidth: '100%', width: '100%' }}>
        <Links>
          <span>
            <Skeleton
              circle
              containerClassName="container"
              className="svg"
              inline
            />
            <Skeleton inline />
          </span>
          <span>
            <Skeleton
              circle
              containerClassName="container"
              className="svg"
              inline
            />
            <Skeleton inline />
          </span>
          <span>
            <Skeleton
              circle
              containerClassName="container"
              className="svg"
              inline
            />
            <Skeleton inline />
          </span>
          <span>
            <Skeleton
              circle
              containerClassName="container"
              className="svg"
              inline
            />
            <Skeleton inline />
          </span>
        </Links>
      </Card>
    );

  return (
    <Card style={{ marginTop: 0, maxWidth: '100%', width: '100%' }}>
      <Links>
        {website && (
          <a href={website} rel="noreferrer" target="_blank">
            <IoGlobeOutline />
            {website}
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} rel="noreferrer">
            <IoMail />
            {email}
          </a>
        )}
        {phone && (
          <a href={parsePhoneNumber(`+1${phone}`).getURI()} rel="noreferrer">
            <IoCall />
            {parsePhoneNumber(`+1${phone}`).formatNational()}
          </a>
        )}
        {gab && (
          <a href={`https://gab.com/${gab}`} rel="noreferrer" target="_blank">
            <svg
              version="1.1"
              viewBox="0 0 17 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>gab</title>
              <g fill="none">
                <g transform="translate(0 .2)" fill="#21CF7A">
                  <path d="m13.752 0.4h-2.4v0.7 0.7l-0.4-0.3c-0.8-0.9-2-1.5-3.3-1.5h-0.4-0.5c-5.6 0.3-8.7 7.2-5.4 12.1 2.3 3.4 7.1 4.1 9.7 1.5l0.3-0.3v0.7c0 1-0.1 1.5-0.4 2.2-1 2.4-4.1 3-6.8 1.3l-0.4-0.2c-0.1 0.1-1.9 3.5-1.9 3.6s0.5 0.4 0.8 0.6c2.2 1.4 5.6 1.7 8.3 0.8 2.7-0.9 4.5-3.2 5-6.4 0.2-1.1 0.2-0.8 0.2-8.4v-7.1h-2.4zm-4.1 10c-2.2 1.2-4.9-0.4-4.9-2.9 0-2.1 2.2-3.7 4.2-3.1 2.8 0.8 3.3 4.5 0.7 6z" />
                </g>
              </g>
            </svg>
            {gab}
          </a>
        )}
      </Links>
    </Card>
  );
}
