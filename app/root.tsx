import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

import Document from '~/components/Document';
import Layout from '~/components/layout/Layout';
import styles from '~/tailwind.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Formula 1 Dashboard',
  viewport: 'width=device-width,initial-scale=1',
});

const App: React.FC = () => (
  <Document>
    <Layout>
      <Outlet />
    </Layout>
  </Document>
);

export default App;
