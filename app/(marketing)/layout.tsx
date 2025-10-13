import "@/styles/globals.css";
import Header from "@/components/core/layout/header/Header";
import { albertSans, inter } from "@/components/core/ui/fonts";
import Footer from "@/components/core/layout/footer/Footer";

export const metadata = {
  title: "Athrolis — Elite Fitness Club",
  description:
    "Transform your body and mind with Athrolis — personalized fitness, run, and health coaching designed to help you move beyond your limits.",
  keywords: [
    "Athrolis",
    "Fitness coaching",
    "Personal training",
    "Health coaching",
    "Run coaching",
    "Gym",
    "Workout plans",
    "Athletic performance",
    "Elite fitness",
    "Coaching sportif",
    "Personal trainer",
    "Club de sport",
  ],
  authors: [
    { name: "LCR Agency", url: "https://simon-ossale-portfolio.vercel.app/" },
  ],
  creator: "SIMON OSSALE",
  publisher: "Athrolis — Elite Fitness Club",
  metadataBase: new URL("https://athrolis.com"),
  alternates: {
    canonical: "https://athrolis.com",
    languages: {
      "fr-FR": "https://athrolis.vercel.app/fr",
      "en-US": "https://athrolis.vercel.app/en",
    },
  },
  openGraph: {
    type: "website",
    url: "https://athrolis.vercel.app/",
    title: "Athrolis — Elite Fitness Club",
    description:
      "Personalized coaching programs for fitness, running, and health — tailored to push you beyond your limits.",
    siteName: "Athrolis",
    locale: "en_US",
    images: [
      {
        url: "https://athrolis.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Athrolis — Move beyond limits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athrolis — Move Beyond Limits",
    description:
      "Premium fitness, health, and performance coaching for those who want to move beyond limits.",
    creator: "@athrolis",
    site: "@athrolis",
    images: ["https://athrolis.com/images/og-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/Athrolis.png",
    shortcut: "/Athrolis.png",
    apple: "/Athrolis.png",
  },
  category: "Fitness & Health Coaching",
  generator: "Next.js 15 + Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${albertSans.variable} ${inter.variable}`}>
      <body className="bg-deep-forest text-white font-body antialiased">
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
