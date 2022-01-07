import { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';

import { AuthProvider } from 'auth';

import { globalStyles } from '../styles';

import 'react-loading-skeleton/dist/skeleton.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/svg-arrow.css';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </PlausibleProvider>
  );
}
