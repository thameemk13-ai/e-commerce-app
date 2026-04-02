"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>ShopEase</h2>

      <div>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/products" style={styles.link}>Products</Link>
        <Link href="/cart" style={styles.link}>Cart</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#111",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  link: {
    marginLeft: "20px",
    color: "#fff",
    textDecoration: "none",
  },
};