import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Confused Bank | Banking Management System",
  description: "Secure banking workspace for customers, staff and administrators.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
