import Navbar from "@/components/Navbar";

const products = [
  { id: 1, name: "Shoes", price: "$50" },
  { id: 2, name: "Watch", price: "$120" },
  { id: 3, name: "Headphones", price: "$80" },
  { id: 4, name: "Bag", price: "$60" },
  { id: 5, name: "Laptop", price: "$900" },
  { id: 6, name: "Mobile", price: "$500" },
];

export default function Products() {
  return (
    <div>
      <Navbar />

      <h1 style={styles.title}>🛍️ Our Products</h1>

      <div style={styles.grid}>
        {products.map((item) => (
          <div key={item.id} style={styles.card}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  title: {
    textAlign: "center",
    margin: "20px",
    fontSize: "28px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    padding: "20px",
    background: "#f4f4f4",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  button: {
    marginTop: "10px",
    padding: "8px 15px",
    background: "#111",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};