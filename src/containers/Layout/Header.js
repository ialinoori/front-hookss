import { useAuth, useAuthActions } from "@/context/AuthContext";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { user,loading } = useAuth();
  const dispatch = useAuthActions();

  return (
    <header className={`bg-white shadow-md py-2 mb-8 `}>
      <div className={`container mx-auto xl:max-w-screen-xl px-4 md:px-0 transition-all ${loading ? "opacity-0":"opacity-100"}`}>
        <nav className="flex justify-between">
          <ul className="flex items-center gap-x-5">
            <li>
              <Link href="/">
                <a className="py-2 block">خانه</a>
              </Link>
            </li>

            <li>
              <Link href="/blogs">
                <a className="py-2 block">بلاگ ها</a>
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-x-4">
            {user ? (
              <>
                <button
                  onClick={() => dispatch({ type: "SIGNOUT" })}
                  className="bg-red-400 px-2 py-1 rounded text-white"
                >
                  خروج
                </button>
                <Link href="/profile">
                  <a className="py-2 block">
                    پروفایل - <span className="text-sm">{user.name} </span>
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/signin">
                  <a className="py-2 block">ورود</a>
                </Link>
                <Link href="/signup">
                  <a className="py-2 block">ثبت نام</a>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
