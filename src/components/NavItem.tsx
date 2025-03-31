import { Link } from 'react-router';

export const NavItem = ({
  to,
  title,
  style,
}: {
  to: string;
  title: string;
  style?: string;
}) => (
  <Link
    to={to}
    className={`${style} hover:transition hover:duration-300`}
  >
    {title}
  </Link>
);
