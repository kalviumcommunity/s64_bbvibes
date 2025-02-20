import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <img src="/logo.png" alt="VibeSync Logo" className="logo" />
        <h1>Welcome to VibeSync</h1>
        <p>Share your vibe and explore real-time moods around you!</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About VibeSync</h2>
        <p>VibeSync is a platform where people share their current moods using colors.</p>
        <p>Each vibe lasts for 30 minutes, ensuring real-time insights.</p>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>🔹 Select your current vibe (green, yellow, orange, red)</li>
          <li>🔹 Your vibe is displayed on the map for 30 minutes</li>
          <li>🔹 Explore vibes around different locations</li>
        </ol>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 VibeSync. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
