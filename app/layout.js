import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import CartEvent from "@/components/ui/CartEvent";
import Cart from "@/components/modals/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const metadata = {
  title: "Ruprong | Buy authentic cosmetic and beauty products online in Bangladesh",
  description: "Buy authentic cosmetic and beauty products online in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <title>Ruprong - Buy authentic cosmetic and beauty products online in Bangladesh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="Shajgoj" name="Shajgoj is the first online cosmetic and beauty products store in Bangladesh" />
        <meta content="Shajgoj" name="random author" />
      </head>
       <body className="text-base font-montserrat" suppressHydrationWarning={true}>
          <Header />
          <CartEvent />
          <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} newestOnTop={true} closeOnClick pauseOnHover theme="colored" />
          <Cart />
          <main className="pt-28">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
