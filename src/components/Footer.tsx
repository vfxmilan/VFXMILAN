import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-white w-full bottom-0 static text-center py-6">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex justify-center items-center pb-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="https://www.linkedin.com/in/milan-dudkiya-b55013317/">
                <FontAwesomeIcon icon={faLinkedin} color="black" size="2x" />
              </a>
            </li>
            <li>
              <a href="mailto:milandudkiya4@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} color="black" size="2x" />
              </a>{" "}
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1TH4gFknJ5ojMl1Oeir3Mv6OyJHeSSSRiqQGjBTfD1h8/edit?usp=sharing            "
                className="text-white hover:text-blue-200 transition duration-150 ease-in-out"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Resume"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path
                    fill="##0a0a0a"
                    d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

      <div className="flex items-stretch">
  <p className="text-black text-sm mt-1 text-left pl-4 flex-1">
    © {new Date().getFullYear()}{" "}
    <a
      href="."
      target="_blank"
      rel="noopener noreferrer"
    >
      VFX Milan
    </a>
    . All rights reserved.
  </p>
  <p className="text-black text-sm mt-1 text-right flex-1">
    <a
      href="."
      target="_blank"
      rel="noopener noreferrer"
    >
    </a>
    Design & Developed by Dnyaneshwar Kolhe
  </p>
</div>

      </div>
    </footer>
  );
}

export default Footer;
