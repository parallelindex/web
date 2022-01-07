import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTransition, animated } from '@react-spring/web';
import Skeleton from 'react-loading-skeleton';

import type { Company } from 'types';

import { Category, Layout, List, Search, Segment } from '../components';
import { getAllCategories, getAllCompanies } from '../lib';

import { HomeStitch } from '../layouts/home';

import meta from '../content/data/meta.json';

const { Hero } = HomeStitch;

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [companies, setCompanies] = useState<[Company]>();
  const [isCompanyLoading, setIsCompanyLoading] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const [show, set] = useState(false);
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onStart: () => set(true),
  });

  const router = useRouter();

  const { asPath } = router;

  if (asPath && asPath.includes('type=recovery')) {
    router.push(`/account/password/update${asPath}`);
  }

  useEffect(() => {
    setIsCategoryLoading(true);
    getAllCategories()
      .then((response) => response)
      .then((data) => {
        setCategories(data);
        setIsCategoryLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsCompanyLoading(true);
    getAllCompanies()
      .then((response) => response)
      .then((data) => {
        setCompanies(data);
        setIsCompanyLoading(false);
      });
  }, []);

  const skeleton = [
    <Skeleton key={'skeleton-1'} />,
    <Skeleton key={'skeleton-2'} />,
    <Skeleton key={'skeleton-3'} />,
  ];
  if (!categories || isCategoryLoading || !companies || isCompanyLoading)
    return (
      <Layout wide>
        <Head>
          <title>{meta.siteTitle}</title>
        </Head>
        <Hero>
          <h1>Search for businesses</h1>
          <Search />
        </Hero>
        <section>
          <div style={{ marginTop: '6rem' }}></div>
        </section>
      </Layout>
    );

  const companyCategories = companies.map(({ category }) => category.name);
  const companyNames = companies.map(({ name }) =>
    name.charAt(0).toUpperCase(),
  );

  return transitions(
    (styles, item) =>
      item && (
        <animated.div style={styles}>
          <Layout wide>
            <Head>
              <title>{meta.siteTitle}</title>
            </Head>
            <Hero>
              <h1>Search for businesses</h1>
              <Search dataset={companies} />
            </Hero>
            <section>
              <div style={{ marginTop: '6rem' }}>
                {categories.map(({ name }) => {
                  return (
                    companyCategories.includes(name) && (
                      <Fragment key={name}>
                        <Category>{name}</Category>

                        <List
                          currentCategory={name}
                          data={companies}
                          filterBy="category"
                        />
                      </Fragment>
                    )
                  );
                })}
              </div>
            </section>
          </Layout>
        </animated.div>
      ),
  );
}
