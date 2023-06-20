import React from "react";
import Link from 'next/link';
import Navbar from "@/components/Layout/Navigations/Navbar1";
import FooterTwo from "@/components/Layout/Footer/FooterTwo";
import PrivacyPolicyContent from "@/components/privacyPolicy/PrivacyPolicyContent";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Privacy Policy</h1>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <PrivacyPolicyContent />
      <FooterTwo />
    </>
  );
};

export default PrivacyPolicy;
