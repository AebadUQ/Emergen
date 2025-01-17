import "@/app/globals.css";
import "@fontsource/poppins";
import localFont from "next/font/local";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
const NexaBold = localFont({
  src: [
    {
      path: "./fonts/Nexa.ttf",
    },
  ],
  variable: "--font-nexa-bold",
});

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" />
      </head>
      <body
        className={`${NexaBold.className} light font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
