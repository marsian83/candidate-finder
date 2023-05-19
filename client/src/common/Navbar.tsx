import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useModal from "../hooks/useModal";

interface navItem {
  title: string;
  target?: string;
  items?: { title: string; target: string }[];
}

const navItems: navItem[] = [
  {
    title: "About Us",
    target: "/about",
  },
  {
    title: "Explore",
    items: [
      {
        title: "Terms and Condition",
        target: "/tnc",
      },
      {
        title: "General",
        target: "/general",
      },
      {
        title: "Privacy Policy",
        target: "/policy",
      },
    ],
  },
  {
    title: "Jobs",
    target: "/jobs",
  },
  {
    title: "Companies",
    target: "/companies",
  },
  {
    title: "Contact",
    target: "/contact",
  },
];

export default function Navbar() {
  const [navFixed, setNavFixed] = useState(false);

  function checkNavFixed() {
    setNavFixed(window.scrollY > 32);
  }

  const modal = useModal();

  useEffect(() => {
    checkNavFixed();
    window.addEventListener("scroll", checkNavFixed);
  }, []);

  return (
    <nav
      className={`p-page flex fixed top-0 left-0 w-full z-[1001] justify-between px-16 py-3 duration-500 ${
        navFixed && "bg-primary"
      }`}
      style={navFixed ? { boxShadow: "0px -8px 13px black" } : {}}
    >
      <div>
        <img src="/logo.png" />
      </div>
      <ul className="flex items-center gap-x-8 text-back">
        {navItems.map((item, i) => (
          <li key={i}>
            {item.target && <Link to={item.target}> {item.title} </Link>}
            {item.items && (
              <div className="relative group">
                <button className="flex items-center">
                  {item.title} <span className="material-icons">&#xe5cf;</span>
                </button>
                <ul className="absolute top-full duration-300 flex flex-col bg-background opacity-0 group-hover:opacity-100 mt-2">
                  {item.items.map((dropDownItem, index) => (
                    <li
                      className="pb-2 px-4 hover:bg-front hover:bg-opacity-10 py-2 cursor-pointer"
                      key={index}
                    >
                      <Link
                        className="whitespace-nowrap"
                        to={dropDownItem.target}
                      >
                        {dropDownItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
        <button
          className="flex items-center gap-x-2 bg-brand px-4 py-2 rounded-lg border-2 border-brand duration-300 hover:bg-background hover:text-brand"
          onClick={() => {
            modal.show(
              <div className="bg-white">
                <h1>lasjdnajdj</h1>
                <button
                  onClick={() => {
                    modal.hide();
                  }}
                >
                  close
                </button>
              </div>
            );
          }}
        >
          <span className="material-icons">&#xea77;</span>
          Login
        </button>
      </ul>
    </nav>
  );
}
