import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import AOSWrapper from "@/wrappers/AOSWrapper";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coscut | Personalized Benefits for a Positive Workplace",
  description:
    "Coscut allows companies to revolutionize their approach to employee benefits, placing a focus on holistic well-being and satisfaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} text-gray-600`}>
        <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
