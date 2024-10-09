import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-white text-black py-12 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <img src="/img/bnwdark.png" alt="Logo" className="w-24 h-20 mb-4" />
            <p className="mb-4 font-poppins text-textColor">
              "Caring for Pets, Connecting Hearts. Adopt, Shop, and Love
              Unconditionally!"
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a
                href="#"
                className="text-gray-800 hover:text-buttonColor transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-buttonColor transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-buttonColor transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>

          {/* Column 1 - Animals */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-heading font-Inter">
              ANIMALS
            </h3>
            <ul className="space-y-2 font-poppins">
              <li>
                <a
                  href="/missing-pet"
                  className="hover:text-buttonColor transition-colors duration-300"
                >
                  When your pet is missing
                </a>
              </li>
              <li>
                <a
                  href="/recently-found"
                  className="hover:text-buttonColor transition-colors duration-300"
                >
                  Recently found
                </a>
              </li>
              <li>
                <a
                  href="/how-to-adopt"
                  className="hover:text-buttonColor transition-colors duration-300"
                >
                  How to adopt?
                </a>
              </li>
              <li>
                <a
                  href="/pets-for-adoption"
                  className="hover:text-buttonColor transition-colors duration-300"
                >
                  Pets for adoption
                </a>
              </li>
              <li>
                <a
                  href="/material-gifts"
                  className="hover:text-buttonColor transition-colors duration-300"
                >
                  Material gifts
                </a>
              </li>
              <li>
                <a
                  href="/help-with-walks"
                  className="hover:text-buttonColor transition-colors duration-300"
                >
                  Help with walks
                </a>
              </li>
              <li>
                <a
                  href="/volunteer-activities"
                  className="hover:text-buttonColor transition-colors duration-300"
                >
                  Volunteer activities
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Shelter Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-heading font-Inter">
              SHELTER INFO
            </h3>
            <ul className="space-y-2 font-poppins">
              <li>
                <a
                  href="/general-info"
                  className="hover:text-buttonColor transition-colors duration-300"
                >
                  General information
                </a>
              </li>
              <li>
                <a
                  href="/about-shelter"
                  className="hover:text-buttonColor transition-colors duration-300"
                >
                  About the shelter
                </a>
              </li>
              <li>
                <a
                  href="/statistic-data"
                  className="hover:text-buttonColor transition-colors duration-300"
                >
                  Statistic data
                </a>
              </li>
              <li>
                <a
                  href="/jobs"
                  className="hover:text-buttonColor transition-colors duration-300"
                >
                  Job
                </a>
              </li>
              <li>
                <a
                  href="/tenders"
                  className="hover:text-buttonColor transition-colors duration-300"
                >
                  Tenders
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-buttonColor transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-heading font-Inter">
              CONTACT
            </h3>
            <ul className="space-y-2 font-poppins">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Warsaw, 57 Street, Poland
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +01 234 567 89
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                contact@example.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-textColor font-Inter">
          <p>&copy; 2024 Copyright: BeaknFreak.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
