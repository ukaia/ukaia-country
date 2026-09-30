import { Link, useLocation } from "react-router-dom";

const SiteFooter = () => {
  const { pathname } = useLocation();

  // The quote page is a full-viewport embedded form. A footer would sit
  // underneath that frame and is not part of the quote experience.
  if (pathname === "/quote") return null;

  const onPrivacy = pathname === "/privacy";

  return (
    <footer className="w-full border-t border-border bg-background px-4 py-6">
      <nav
        aria-label="Legal"
        className="mx-auto flex max-w-6xl items-center justify-center"
      >
        <Link
          to="/privacy"
          aria-current={onPrivacy ? "page" : undefined}
          className="text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
};

export default SiteFooter;
