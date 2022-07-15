import SelectCountry from "./SelectCountry";
import Disclaimer from "./Disclaimer";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="container">
        <SelectCountry />
        {children}
        <Disclaimer />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
