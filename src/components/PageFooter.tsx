import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";
import { sourceCodePro400 } from "../../styles/fonts";

export default function PageFooter() {
  return (
    <footer
      className={`${sourceCodePro400.className} w-full bg-black py-12 px-8 sm:px-8 md:px-16 lg:px-30 relative`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
        <div
          id="footer-tools"
          className="flex-2 md:flex-1 mb-8 sm:mb-8 lg:mb-0"
        >
          <p className="text text-white">Built with:</p>
          <ul>
            <li>
              <a
                className="text-sm text-white hover:text-pink-300 underline"
                href="https://firebase.google.com/docs/app-hosting/?benxgao"
              >
                Firebase App hosting
              </a>
            </li>
            <li>
              <a
                className="text-sm text-white hover:text-pink-300 underline"
                href="https://github.com/features/copilot/?benxgao"
              >
                GitHub Copilot
              </a>
            </li>
            <li>
              <a
                className="text-sm text-white hover:text-pink-300 underline"
                href="https://nextjs.org/?benxgao"
              >
                Next.js
              </a>
            </li>
            <li>
              <a
                className="text-sm text-white hover:text-pink-300 underline"
                href="https://www.typescriptlang.org/?benxgao"
              >
                TypeScript
              </a>
            </li>
            <li>
              <a
                className="text-sm text-white hover:text-pink-300 underline"
                href="https://tailwindcss.com/?benxgao"
              >
                Tailwind CSS
              </a>
            </li>
          </ul>
        </div>
        {/* <div id="footer-resources" className="flex-1 mb-8 sm:mb-8 lg:mb-0">
          <p className="text text-white">Thanks to:</p>
          <ul>
            <li>
              <a
                className="text-sm text-white hover:text-pink-300 underline"
                href="https://www.canva.com/?benxgao"
              >
                canva.com
              </a>
            </li>
            <li>
              <a
                className="text-sm text-white hover:text-pink-300 underline"
                href="https://www.remove.bg/?benxgao"
              >
                remove.bg
              </a>
            </li>
            <li>
              <a
                className="text-sm text-white hover:text-pink-300 underline"
                href="https://www.http://wikipedia.org/?benxgao"
              >
                wikipedia.org
              </a>
            </li>
          </ul>
        </div> */}
        <div
          id="footer-social"
          className="flex-1 flex justify-start sm:justify-end gap-4"
        >
          <a
            href="https://medium.com/@benxgao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-300 underline"
          >
            <FaMedium size={24} />
          </a>
          <a
            href="https://github.com/benxgao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-fuchsia-300 underline"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/benxgao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-300 underline"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      <div className="flex flex-reverse sm:flex-row-reverse justify-between items-center">
        <p className="text-sm text-white">copyright © 2025 benxgao.com</p>
      </div>
    </footer>
  );
}
