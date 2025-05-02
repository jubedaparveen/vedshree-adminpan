import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vedshree Admin Penal",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
  keywords: "Vedshree, vedshree admin penal, vedshree admin penal login",
  authors: [{ name: "Vedshree", url: "https://vedshree.com" }],
  creator: "Vedshree",
  publisher: "Vedshree",
  description:'Vedshree is a Ayruvedic and herbal product company. Vedshree Admin Penal is a platform for managing and monitoring the products, orders, and customers of Vedshree.',
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children} 
      </body>
    </html>
  );
}
