import React from "react";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import LeftSidebarContent from "@/components/Blog/LeftSidebarContent";
import FooterTwo from "@/components/Layout/Footer/FooterTwo";

const BlogLeftSidebar = () => {
  return (
    <>
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <span className="sub-title red-light-color">Blog left sidebar</span>
            <h1>Our latest articles & resources</h1>
          </div>
        </div>
      </div>
      <LeftSidebarContent />
      <FooterTwo />
    </>
  );
};

export default BlogLeftSidebar;
