import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Segment } from './segment';

import Login from '../content/forms/login/login';
import Signup from '../content/forms/signup/signup';

export function Sign() {
  const router = useRouter();

  const [tabValue, setTabValue] = useState(
    router.query.tab ? Number(router.query.tab) : 0,
  );

  useEffect(() => {
    setTabValue(router.query.tab ? Number(router.query.tab) : 0);
  }, [router.query.tab]);

  return (
    <Segment
      panels={[<Login key="login" />, <Signup key="signup" />]}
      setValue={setTabValue}
      tabs={['Log in', 'Sign up']}
      value={tabValue}
    />
  );
}
