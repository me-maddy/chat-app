import Header from "./Header";
import PropTypes from "prop-types";

const HeaderFooterLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
HeaderFooterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderFooterLayout;
