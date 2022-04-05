import Header from './Header';

const Layout: React.FC = ({ children }) => (
  <div className="min-h-screen w-screen bg-slate-700 text-gray-50">
    <Header />
    <main className="flex flex-row space-x-4 p-4">{children}</main>
  </div>
);

export default Layout;
