import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Instrumentos</title>
      </Head>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
