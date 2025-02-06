import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";

const HeaderFooterLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen"> {children}</div>
      <Footer />
    </>
  );
};
HeaderFooterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderFooterLayout;
