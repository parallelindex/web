import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Layout } from '../../../components';

import Update from '../../../content/forms/password/update/update';

import meta from '../../../content/data/meta.json';

export default function PasswordUpdate() {
  const router = useRouter();

  const { asPath } = router;

  const accessToken = getAccessToken(asPath);

  useEffect(() => {
    if (!accessToken) {
      router.push('/account');
    }
  }, [accessToken, router]);

  return (
    <Layout>
      <Head>
        <title>Update Your Password | {meta.siteTitle}</title>
      </Head>
      <Update accessToken={String(accessToken)} />
    </Layout>
  );
}

function getAccessToken(asPath: string) {
  const tokenKey = '#access_token=';
  const tokenStart = asPath.indexOf(tokenKey);
  const tokenEnd = asPath.indexOf('&');
  const accessToken = asPath.slice(tokenStart + tokenKey.length, tokenEnd);

  if (tokenStart !== -1 && tokenEnd !== -1) {
    return accessToken;
  }
}
