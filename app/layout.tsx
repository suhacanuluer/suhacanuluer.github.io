import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suha Can Uluer | Software Engineer",
  description: "Software Engineer specialized in high-scale systems and mission-critical architectures. Building scalable solutions at sahibinden.com.",
  keywords: ["Software Engineer", "Java", "Spring Boot", "Microservices", "Backend Developer", "sahibinden.com", "HAVELSAN"],
  authors: [{ name: "Suha Can Uluer" }],
  openGraph: {
    title: "Suha Can Uluer | Software Engineer",
    description: "Building Scalable & High-scale Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-pattern">
        {children}
      </body>
    </html>
  );
}
