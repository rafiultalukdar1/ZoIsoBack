import { Link } from 'react-router-dom';

/** Router <Link> for internal paths, plain <a> for '#', tel:, mailto: and external URLs. */
export default function AppLink({ to, children, ...props }) {
  if (to.startsWith('/')) {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}
