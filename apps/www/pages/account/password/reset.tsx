import Head from 'next/head';

import { Layout } from '../../../components';

import Reset from '../../../content/forms/password/reset/reset';

import meta from '../../../content/data/meta.json';

export default function PasswordReset() {
  return (
    <Layout>
      <Head>
        <title>Reset Your Password | {meta.siteTitle}</title>
      </Head>
      <Reset />
    </Layout>
  );
}
