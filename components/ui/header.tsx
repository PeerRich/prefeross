import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

export default function Header() {
  return (
    <header className="absolute top-2 md:top-6 w-full z-30">
      <div className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between h-14 border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg px-3">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link
                className="flex items-center justify-center bg-white w-8 h-8 rounded shadow-sm shadow-zinc-950/20"
                href="/"
              >
                <Image src={Logo} width={24} height={24} alt="Logo" />
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 lg:px-5 py-2 flex items-center transition"
                    href="/login"
                  >
                    Log in
                  </Link>
                </li>
                <li className="ml-1">
                  <Link
                    className="btn-sm text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow"
                    href="https://formbricks.com/clnyjwz1h06fwt80f45imeftb"
                  >
                    List my Company
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
