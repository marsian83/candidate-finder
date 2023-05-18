import { Link } from "react-router-dom";

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
  return (
    <nav className="p-page flex justify-between">
      <div>
        <img src="/logo.png" />
      </div>
      <ul className="flex items-center gap-x-8">
        {navItems.map((item, i) => (
          <li key={i}>
            {item.target && <Link to={item.target}> {item.title} </Link>}
            {item.items && (
              <div className="relative group">
                <button className="flex items-center">
                  {item.title} <span className="material-icons">&#xe5cf;</span>
                </button>
                <ul className="absolute top-full pointer-events-none duration-300 group-hover:pointer-events-auto flex-col bg-cyan-300 opacity-0 group-hover:opacity-100">
                  {item.items.map((dropDownItem, index) => (
                    <li>
                      <Link
                        key={index}
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
      </ul>
    </nav>
  );
}
