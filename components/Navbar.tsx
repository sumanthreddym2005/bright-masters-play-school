import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <img
          src="/assets/logo/logo.svg"
          alt="Bright Masters Play School Logo"
          className="h-10"
        />
        <span className="font-semibold hover:text-primary transition">
          Bright Masters Play School
        </span>
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/gallery" className="hover:text-primary">
          Gallery
        </Link>

        <a
          href="tel:08686356192"
          className="bg-primary text-white px-4 py-2 rounded-full"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
}