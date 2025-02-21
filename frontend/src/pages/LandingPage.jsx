import React, { useEffect } from 'react';
import "../styles/LandingPage.css";

function LandingPage() {
    useEffect(() => {
        const canvas = document.getElementById('bgCanvas');
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        const numberOfParticles = 150;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        class Particle {
            constructor(){
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 1; // Adjusted size for more visibility
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
                this.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Neon colors
            }
            draw(){
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
            update(){
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) {
                    this.speedX = -this.speedX;
                }
                if (this.y < 0 || this.y > canvas.height) {
                    this.speedY = -this.speedY;
                }
                this.draw();
            }
        }

        function init() {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++){
                particlesArray.push(new Particle());
            }
        }

        function animate(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++){
                particlesArray[i].update();
            }
            requestAnimationFrame(animate);
        }

        init();
        animate();
    }, []);

    return (
        <div className="landing-container">
            {/* Navigation Bar */}

            <nav className="navbar">
                <img src="https://emoji.discadia.com/emojis/ad2026df-c1b6-454a-bfab-2061c54b48fc.png" alt="vibeSync" className="logo" />
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#">Login/Signup</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Ignite Your Vibe</h1>
                    <p>Share your mood. Explore the world's energy.</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </section>

            {/* About Section */}
            <section className="about" id="about">
                <h2>About VibeSync</h2>
                <p>VibeSync is where colors meet connections. Share your vibe in real-time and see what the world is feeling.</p>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works" id="how-it-works">
                <h2>How It Works</h2>
                <ol>
                    <li><span>1</span> Select Your Vibe</li>
                    <li><span>2</span> Share Your Energy</li>
                    <li><span>3</span> Explore Connections</li>
                </ol>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <p>© 2025 VibeSync. All rights reserved.</p>
            </footer>

            {/* Live Background (Canvas) */}
            <canvas id="bgCanvas"></canvas>
        </div>
    );
}

export default LandingPage;
