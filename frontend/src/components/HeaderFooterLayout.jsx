import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import PropTypes from "prop-types";

const HeaderFooterLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        {" "}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
// HeaderFooterLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default HeaderFooterLayout;
