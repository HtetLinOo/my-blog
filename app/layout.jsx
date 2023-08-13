import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "myblog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto px-5 mt-20 md:mt-0">{children}</main>
      </body>
    </html>
  );
}
