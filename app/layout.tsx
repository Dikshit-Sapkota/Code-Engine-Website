import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Code Engine Pvt Ltd | Software Engineering Studio",
  description:
    "Code Engine is a software engineering studio in Kathmandu building Spring Boot, MERN and WordPress solutions.",
  keywords: [
    "Code Engine",
    "software company Kathmandu",
    "software development Nepal",
    "Spring Boot development",
    "MERN development",
    "WordPress development",
    "web development Nepal"
  ],
  authors: [{ name: "Code Engine Pvt Ltd" }],
  openGraph: {
    title: "Code Engine Pvt Ltd",
    description:
      "Software, engineered to run. Full-stack software development from Kathmandu.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}