import { Link, useResolvedPath } from '@remix-run/react';
import clsx from 'clsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMatch } from 'react-router';

interface NavigationLinkProps {
  to: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ to, children }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={clsx(
        'cursor-pointer rounded-xl p-3 duration-100 ease-in hover:scale-105',
        !match && 'text-gray-400',
        match && 'bg-slate-900',
      )}
    >
      {children}
    </Link>
  );
};
export default NavigationLink;
