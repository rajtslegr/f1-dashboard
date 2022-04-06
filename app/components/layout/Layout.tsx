import SideBar from './SideBar';

const Layout: React.FC = ({ children }) => (
  <div className="flex min-h-screen w-screen flex-row bg-gray-50">
    <SideBar />
    <main className="w-full p-4">{children}</main>
  </div>
);

export default Layout;
