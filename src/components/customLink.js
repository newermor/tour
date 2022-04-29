import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={{ color: match ? "#9ca3af" : "" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
export default CustomLink;
