import Head from 'next/head';
import Link from 'next/link';

import { useAuth } from 'auth';

import { Layout } from '../components';

import Submit from '../content/forms/submit/submit';

import meta from '../content/data/meta.json';

export default function Account() {
  const { user } = useAuth();

  if (!user)
    return (
      <Layout>
        <Head>
          <title>Submit Your Business | {meta.siteTitle}</title>
        </Head>
        <p style={{ textAlign: 'center' }}>
          Please{' '}
          <Link href="/account?tab=0">
            <a>log in</a>
          </Link>{' '}
          or{' '}
          <Link href="/account?tab=1">
            <a>sign up</a>
          </Link>{' '}
          to submit your business.
        </p>
      </Layout>
    );

  return (
    <Layout>
      <Head>
        <title>Submit Your Business | {meta.siteTitle}</title>
      </Head>
      <Submit />
    </Layout>
  );
}
