import { footerLinks, socialMedia } from "../constants";
import logo from "../../public/hoobank.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pl-4 pr-4">
        <div>
          {/* <h1 className="text-3xl font-bold mb-4">Logo</h1> */}
          <img
            className="nav__logo"
            src={logo}
            // style={{ width: "30x", height: "30px" }}
          />
          <p className="text-lg text-bold">Mella Marketing</p>
        </div>

        {footerLinks.map((footerlink) => (
          <div key={footerlink.title}>
            <h4 className="text-xl font-bold mb-4">{footerlink.title}</h4>
            <ul className="list-none mb-6">
              {footerlink.links.map((link) => (
                <li key={link.name} className="mb-2">
                  <a href={link.url} className="text-lg hover:text-yellow-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 py-6 pl-4 pr-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-lg text-white">
            &copy; 2023 company. All Rights Reserved.
          </p>

          <div className="flex space-x-4">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt={social.id} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
