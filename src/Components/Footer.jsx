import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Branches Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Branches</h3>
          <ul className="space-y-2">
            {["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh"].map(
              (branch, index) => (
                <li key={index}>{branch}</li>
              )
            )}
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Service", "About", "Gallery", "Price", "Contact"].map(
              (link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-gray-100"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li>+919126751245</li>
            <li>onetapevents@gmail.com</li>
            <li>Tamil Nadu, India - 632014</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
              (platform, index) => (
                <li key={index}>
                  <a
                    href={`https://www.${platform.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-100"
                  >
                    {platform}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="text-center mt-8 text-gray-400">
        <p>Created By Sruthi Pyda | 23BDS0176</p>
      </div>
    </footer>
  );
};

export default Footer;
