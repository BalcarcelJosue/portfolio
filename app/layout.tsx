import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "./globals.css";

const siteUrl = "https://portfolio-balcarceljosues-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Josué Balcárcel — Mechanical Engineering Portfolio",
  description:
    "Mechanical engineering portfolio: combat robotics, CAD, and manufacturing work by Josué Balcárcel, Case Western Reserve University.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Josué Balcárcel — Portfolio",
    title: "Josué Balcárcel — Mechanical Engineering Portfolio",
    description:
      "Combat robotics, CAD, and production engineering, documented like a lab notebook.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Josué Balcárcel — Mechanical Engineering Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josué Balcárcel — Mechanical Engineering Portfolio",
    description:
      "Combat robotics, CAD, and production engineering, documented like a lab notebook.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
