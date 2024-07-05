import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./index.css";
import {ThirdwebProvider} from "@/app/thirdweb";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Web-3,0",
  description:
    "Web 3.0, also known as the decentralized web, represents the next phase of the internet, focusing on decentralized protocols and blockchain technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>{children}</ThirdwebProvider>
      </body>
    </html>
  );
}
