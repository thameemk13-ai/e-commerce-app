import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section style={styles.hero}>
        <h1>Welcome to ShopEase 🛒</h1>
        <p>Your one-stop shop for everything</p>

        <Link href="/products" style={styles.button}>
          Shop Now
        </Link>
      </section>

      <section style={styles.features}>
        <div style={styles.card}>
          <h3>Fast Delivery 🚚</h3>
          <p>Get your products quickly</p>
        </div>

        <div style={styles.card}>
          <h3>Best Prices 💰</h3>
          <p>Affordable and quality products</p>
        </div>

        <div style={styles.card}>
          <h3>24/7 Support 📞</h3>
          <p>We are here to help you</p>
        </div>
      </section>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    background: "#c99898ff",
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    background: "#111",
    color: "#fff",
    textDecoration: "none",
  },
  features: {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
  },
  card: {
    width: "250px",
    padding: "20px",
    background: "#dc9b9bff",
    textAlign: "center",
  },
};