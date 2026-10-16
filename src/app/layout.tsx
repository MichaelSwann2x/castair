import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Castair — Aircraft Quality Control & RTS Inspector",
  description:
    "Agentic, encrypted, sandboxed platform for aviation quality control, return-to-service and safety inspection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-[#111111] font-sans">
        {children}
      </body>
    </html>
  );
}
