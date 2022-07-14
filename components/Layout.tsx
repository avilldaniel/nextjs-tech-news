import SelectCountry from "./SelectCountry";
import Disclaimer from "./Disclaimer";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SelectCountry />
      <Disclaimer />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
