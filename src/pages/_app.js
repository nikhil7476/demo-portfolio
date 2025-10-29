import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MegaMenu from "@/components/MegaMenu";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <MegaMenu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
