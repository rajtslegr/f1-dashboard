const Layout: React.FC = ({ children }) => (
  <div className="min-h-screen w-screen bg-slate-700 text-gray-50">
    <div className="flex flex-row space-x-4 p-4">{children}</div>
  </div>
);

export default Layout;
