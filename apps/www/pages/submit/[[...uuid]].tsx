import Head from 'next/head';
import Link from 'next/link';

import { useAuth } from 'auth';

import { Layout } from '../../components';

import Submit from '../../content/forms/submit/submit';

import meta from '../../content/data/meta.json';
import { getCompany, getImageUrl } from '../../lib';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Company } from 'types';

export default function Account({}) {
  const [company, setCompany] = useState<Company & { categoryId: number; notes: string }>();
  const [imageUrls, setImageUrls] = useState([]);
  const [logoUrl, setLogoUrl] = useState();
  
  const { user } = useAuth();

  const router = useRouter();
  const { uuid } = router.query;

  function addImage(imageUrl) {
    setImageUrls((imageUrls) => [...imageUrls, imageUrl]);
  }

  useEffect(() => {
    //setIsLoading(true);
    if(uuid){
      getCompany(String(uuid))
      .then((response) => response)
      .then((data) => {
        setCompany(data);
        //setIsLoading(false);
      });
    }
  }, [uuid]);

  useEffect(() => {
    if (uuid && company && company.images)
      company.images.map((image: string) => {
        getImageUrl({
          bucket: 'companies',
          path: `${uuid}/images/${image}`,
          setUrl: addImage,
        });
      });
  }, [company, uuid]);

  useEffect(() => {
    if (uuid && company && company.logo)
      getImageUrl({
        bucket: 'companies',
        path: `${uuid}/logo/${company.logo}`,
        setUrl: setLogoUrl,
      });
  }, [uuid, company]);

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
      <Submit company={company}/>
    </Layout>
  );
}
