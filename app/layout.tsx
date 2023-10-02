import TopNav from "@/Components/TopNav";
import "./globals.css";
import type { Metadata } from "next";
import MidNav from "@/Components/MidNav";
import LastNav from "@/Components/LastNav";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "Atech",
  description: "Atech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <MidNav />
        <LastNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
