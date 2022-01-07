import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useAuth } from 'auth';

import meta from '../content/data/meta.json';

export default function Account() {
  const router = useRouter();
  const { signOut } = useAuth();

  const { redirect } = router.query;

  signOut();

  useEffect(() => {
    if (redirect) {
      router.push(`/${redirect}`);
    } else {
      router.push('/');
    }
  }, [redirect, router]);

  return (
    <Head>
      <title>Log out | {meta.siteTitle}</title>
    </Head>
  );
}
