import Link from "next/link";
import { CardanoWallet } from "@meshsdk/react";

export default function Navbar() {
  return (
    <div className="bg-white z-50 fixed w-full">
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <>
                    <span className="sr-only">Logo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                    </svg>
                  </>
                </Link>
              </div>

              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <span className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    <Link href="/collection">Podcasts</Link>
                  </span>
                  <span className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    <Link href="/collection">Conferences</Link>
                  </span>
                  <span className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    <Link href="/collection">Talk Shows</Link>
                  </span>
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      src="https://cryptologos.cc/logos/cardano-ada-logo.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">ADA</span>
                  </a>
                </div>

                <CardanoWallet />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
