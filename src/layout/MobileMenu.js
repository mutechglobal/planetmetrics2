import Link from "next/link";
import { useState } from "react";
import { Blog, Contact, Home, PagesMobile, Portfolio, Shop } from "./Menus";
const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation clearfix d-block d-lg-none mobile-header">
      <li>
    <Link href="/" onClick={() => activeMenuSet("home")}>Home</Link>
  </li>
  <li>
    <Link href="/about" onClick={() => activeMenuSet("about")}>About Us</Link>
  </li>
  <li>
    <Link href="/services" onClick={() => activeMenuSet("services")}>Services</Link>
  </li>
  <li>
    <Link href="/portfolio-fluid" onClick={() => activeMenuSet("portfolio")}>Portfolio</Link>
  </li>
  <li>
    <Link href="/blog-grid" onClick={() => activeMenuSet("blog")}>Blog</Link>
  </li>
  <Contact />
</ul>
    
  );
};
export default MobileMenu;
