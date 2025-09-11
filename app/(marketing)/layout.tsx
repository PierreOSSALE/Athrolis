// app/layout.tsx

import "@/styles/globals.css";
import Header from "@/components/core/layout/header/Header";
import { albertSans, inter } from "@/components/core/ui/fonts";
import Footer from "@/components/core/layout/footer/Footer";

export const metadata = {
  title: "Athrolis — Elite Fitness Club",
  description: "Modern fitness & performance coaching",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${albertSans.variable} ${inter.variable}`}>
      <body className="bg-deep-forest text-white font-body antialiased">
        {" "}
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
