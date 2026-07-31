export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0b1020",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
        }}
      >
        Atlas Template Base
      </h1>

      <p
        style={{
          maxWidth: "700px",
          textAlign: "center",
          opacity: 0.8,
          lineHeight: 1.8,
        }}
      >
        Official application template for the Atlas Ecosystem.
      </p>

      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          border: "1px solid #2d3748",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "700px",
        }}
      >
        <h2>Included</h2>

        <ul>
          <li>✅ Next.js 15</li>
          <li>✅ TypeScript</li>
          <li>✅ Tailwind CSS</li>
          <li>✅ ESLint</li>
          <li>✅ GitHub Actions</li>
          <li>✅ Docker Support</li>
          <li>✅ Testing Ready</li>
        </ul>
      </div>

      <footer
        style={{
          marginTop: "3rem",
          opacity: 0.6,
        }}
      >
        Atlas Ecosystem • v0.1.0-alpha
      </footer>
    </main>
  );
}
