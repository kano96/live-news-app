import Link from "next/link";

type NavLinkProps = {
  category: string;
  isActive: boolean;
};

const NavLink = ({ category, isActive }: NavLinkProps) => {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold text-lg"
      }`}
    >
      {category}
    </Link>
  );
};

export default NavLink;
