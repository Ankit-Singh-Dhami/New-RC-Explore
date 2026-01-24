export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Logo / Brand */}
          <div className="text-xl font-bold text-teal-600">MyWebsite</div>

          {/* Text */}
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>

          {/* Social Icons */}
          <ul className="flex gap-6">
            {/* Facebook */}
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </li>

            {/* Instagram */}
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="size-6"
                >
                  <path d="M7.75 2h8.5C19.985 2 22 4.015 22 6.75v10.5C22 19.985 19.985 22 16.25 22h-8.5C4.015 22 2 19.985 2 17.25V6.75C2 4.015 4.015 2 7.75 2zm0 1.5A4.25 4.25 0 003.5 6.75v10.5A4.25 4.25 0 007.75 21h8.5a4.25 4.25 0 004.25-4.25V6.75a4.25 4.25 0 00-4.25-4.25h-8.5z" />
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
            </li>

            {/* Twitter / X */}
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="size-6"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.971 6.817H1.675l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
