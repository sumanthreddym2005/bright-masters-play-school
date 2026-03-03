import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Bright Masters Play School | Kapra Hyderabad",
  description:
    "Nursery, Kindergarten and Day Care in Kapra, Hyderabad. 4.8 Rating. Safe CCTV campus with structured learning."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-soft text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}