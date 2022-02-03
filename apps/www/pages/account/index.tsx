import Head from 'next/head';

import { useAuth } from 'auth';
import type { Company, PublishState } from 'types';
import { Card, Label } from 'ui';

import { Layout, ListItem, ListStitch, Sign } from '../../components';
import { useCompanies, useUser } from '../../hooks';

import meta from '../../content/data/meta.json';

export default function Account() {
  const { user } = useAuth();

  if (!user)
    return (
      <Layout>
        <Head>
          <title>Account | {meta.siteTitle}</title>
        </Head>
        <Sign />
      </Layout>
    );

  return <SignedIn id={user.id} email={user.email} />;
}

export function SignedIn({ id, email }: { id: string; email: string }) {
  const { user, isLoading, isError } = useUser(id);

  if (isError)
    return (
      <Layout>
        <div style={{ textAlign: 'center' }}>Failed to load profile.</div>
      </Layout>
    );
  if (isLoading)
    return (
      <Layout>
        <div>
          <Card />
        </div>
      </Layout>
    );

  return (
    <Layout>
      <Head>
        <title>Account | {meta.siteTitle}</title>
      </Head>
      <div>
        <Card>
          <h2>Account</h2>
          <div>
            <Label>Name</Label>
            <span>{`${user.firstName} ${user.lastName}`}</span>
          </div>
          <div>
            <Label>Email</Label>
            <div>{email}</div>
          </div>
        </Card>
        <Companies userId={user.id} />
      </div>
    </Layout>
  );
}

function SortedCompanies({
  companies,
  publishState,
}: {
  companies;
  publishState: PublishState;
}) {
  const sortedCompanies = companies
    .sort((a: Company, b: Company) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .map((company: Company) => {
      if (company.publishState === publishState) {
        const {
          id,
          uuid,
          category,
          description,
          gab,
          images,
          logo,
          name,
          publishState,
          website,
        } = company;

        return (
          <ListItem
            key={id || uuid}
            id={id}
            category={category}
            description={description}
            gab={gab}
            images={images}
            logo={logo}
            name={name}
            noLink={false}
            uuid={uuid}
            website={website}
            inlineStyles
            canEdit={true}
          />
        );
      }
    });

  return sortedCompanies;
}

function Companies({ userId }: { userId: number }) {
  const { companies, isLoading, isError } = useCompanies(userId);

  if (isError)
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Companies</h2>
        <p>Failed to load companies.</p>
      </div>
    );
  if (isLoading) return null;

  if (companies.length > 0)
    return (
      <Card>
        <h2>Companies</h2>

        {companies.some((company) => company.publishState === 'PUBLISHED') && (
          <>
            <h3>Live</h3>
            <ListStitch single>
              <SortedCompanies companies={companies} publishState="PUBLISHED" />
            </ListStitch>
          </>
        )}

        {companies.some(({ publishState }) => publishState === 'PENDING') && (
          <>
            <h3>Pending</h3>
            <ListStitch single>
              <SortedCompanies companies={companies} publishState="PENDING" />
            </ListStitch>
          </>
        )}
      </Card>
    );

  return null;
}
