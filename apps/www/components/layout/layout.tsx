import { Footer, Header } from '../navigation';
import { Main } from './stitch';

export function Layout({
  children,
  wide,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <>
      <Header />

      <Main wide={wide}>{children}</Main>

      <Footer />
    </>
  );
}
