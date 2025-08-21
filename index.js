const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>EduTech Pro - Transform Your Learning Experience</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            overflow-x: hidden;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          /* Header */
          header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            font-size: 1.8rem;
            font-weight: bold;
          }

          nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
          }

          nav a {
            color: white;
            text-decoration: none;
            transition: opacity 0.3s;
          }

          nav a:hover {
            opacity: 0.8;
          }

          .cta-button {
            background: #ff6b6b;
            color: white;
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 25px;
            text-decoration: none;
            font-weight: bold;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255,107,107,0.4);
          }

          /* Hero Section */
          .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 120px 0 80px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="3" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
            animation: float 20s infinite linear;
          }

          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            100% { transform: translateY(-20px) rotate(360deg); }
          }

          .hero-content {
            position: relative;
            z-index: 2;
          }

          .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            animation: fadeInUp 1s ease-out;
          }

          .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            animation: fadeInUp 1s ease-out 0.3s both;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            animation: fadeInUp 1s ease-out 0.6s both;
          }

          .btn-primary {
            background: #ff6b6b;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s;
            display: inline-block;
          }

          .btn-secondary {
            background: transparent;
            color: white;
            padding: 1rem 2rem;
            border: 2px solid white;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s;
            display: inline-block;
          }

          .btn-primary:hover {
            background: #ff5252;
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(255,107,107,0.4);
          }

          .btn-secondary:hover {
            background: white;
            color: #667eea;
            transform: translateY(-3px);
          }

          /* Features Section */
          .features {
            padding: 80px 0;
            background: #f8f9fa;
          }

          .section-title {
            text-align: center;
            margin-bottom: 3rem;
          }

          .section-title h2 {
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 1rem;
          }

          .section-title p {
            font-size: 1.1rem;
            color: #666;
            max-width: 600px;
            margin: 0 auto;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .feature-card {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          }

          .feature-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-size: 1.5rem;
            color: white;
          }

          .feature-card h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: #333;
          }

          .feature-card p {
            color: #666;
            line-height: 1.6;
          }

          /* About Section */
          .about {
            padding: 80px 0;
            background: white;
          }

          .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
          }

          .about-text h2 {
            font-size: 2.2rem;
            color: #333;
            margin-bottom: 1rem;
          }

          .about-text p {
            color: #666;
            margin-bottom: 1.5rem;
            line-height: 1.8;
          }

          .stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-top: 2rem;
          }

          .stat {
            text-align: center;
          }

          .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: #667eea;
            display: block;
          }

          .stat-label {
            color: #666;
            font-size: 0.9rem;
          }

          .about-image {
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 15px;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 3rem;
          }

          /* Contact Section */
          .contact {
            padding: 80px 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
          }

          .contact h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .contact p {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            opacity: 0.9;
          }

          .contact-form {
            max-width: 500px;
            margin: 0 auto;
            display: grid;
            gap: 1rem;
          }

          .contact-form input,
          .contact-form textarea {
            padding: 1rem;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
          }

          .contact-form button {
            background: #ff6b6b;
            color: white;
            padding: 1rem;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s;
          }

          .contact-form button:hover {
            background: #ff5252;
          }

          /* Footer */
          footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 2rem 0;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .header-content {
              flex-direction: column;
              gap: 1rem;
            }

            nav ul {
              gap: 1rem;
            }

            .hero h1 {
              font-size: 2.5rem;
            }

            .hero p {
              font-size: 1.1rem;
            }

            .hero-buttons {
              flex-direction: column;
              align-items: center;
            }

            .about-content {
              grid-template-columns: 1fr;
              text-align: center;
            }

            .stats {
              grid-template-columns: 1fr;
              gap: 1rem;
            }

            .features-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 0 15px;
            }

            .hero {
              padding: 100px 0 60px;
            }

            .hero h1 {
              font-size: 2rem;
            }

            .features,
            .about,
            .contact {
              padding: 60px 0;
            }
          }
        </style>
      </head>
      <body>
        <!-- Header -->
        <header>
          <div class="container">
            <div class="header-content">
              <div class="logo">EduTech Pro</div>
              <nav>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
              <a href="#contact" class="cta-button">Get Started</a>
            </div>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="home" class="hero">
          <div class="container">
            <div class="hero-content">
              <h1>Transform Your Learning Experience</h1>
              <p>Empower students and educators with cutting-edge technology that makes learning engaging, accessible, and effective for everyone.</p>
              <div class="hero-buttons">
                <a href="#features" class="btn-primary">Explore Features</a>
                <a href="#about" class="btn-secondary">Learn More</a>
              </div>

              <!-- Added button from diff -->
              <button class="custom-button">Click me!</button>

              <!-- Added two-column layout from diff -->
              <div class="builder-section">
                <div class="builder-columns">
                  <div class="builder-column">
                    <div class="image-container">
                      <img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
                           alt="Builder.io content"
                           class="builder-image"
                           loading="lazy" />
                      <div class="image-overlay">
                        <p>Testing builder.io</p>
                      </div>
                    </div>
                  </div>
                  <div class="builder-column">
                    <div class="content-section">
                      <section class="builder-inner-section">
                        <!-- Content area -->
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="features">
          <div class="container">
            <div class="section-title">
              <h2>Powerful Features for Modern Education</h2>
              <p>Discover how our innovative tools are revolutionizing the way students learn and teachers teach.</p>
            </div>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">📚</div>
                <h3>Interactive Learning</h3>
                <p>Engage students with interactive lessons, quizzes, and multimedia content that adapts to different learning styles.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">📊</div>
                <h3>Progress Tracking</h3>
                <p>Monitor student progress with detailed analytics and personalized learning paths that identify strengths and areas for improvement.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🌐</div>
                <h3>Remote Learning</h3>
                <p>Access quality education from anywhere with our cloud-based platform that works seamlessly across all devices.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">👥</div>
                <h3>Collaborative Tools</h3>
                <p>Foster teamwork and communication with built-in collaboration features, discussion forums, and group projects.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🎯</div>
                <h3>Personalized Learning</h3>
                <p>AI-powered recommendations and adaptive content delivery ensure each student gets a customized learning experience.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🛡️</div>
                <h3>Secure & Reliable</h3>
                <p>Enterprise-grade security and 99.9% uptime guarantee ensure your data is safe and accessible when you need it.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about">
          <div class="container">
            <div class="about-content">
              <div class="about-text">
                <h2>Empowering Education Since 2020</h2>
                <p>At EduTech Pro, we believe that education is the key to unlocking human potential. Our mission is to make quality education accessible to everyone, everywhere, through innovative technology solutions.</p>
                <p>We've partnered with leading educational institutions and technology experts to create a platform that not only meets today's educational needs but also prepares learners for the challenges of tomorrow.</p>
                <div class="stats">
                  <div class="stat">
                    <span class="stat-number">50K+</span>
                    <span class="stat-label">Active Students</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">1,200+</span>
                    <span class="stat-label">Educators</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">98%</span>
                    <span class="stat-label">Satisfaction Rate</span>
                  </div>
                </div>
              </div>
              <div class="about-image">
                🎓
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="contact">
          <div class="container">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of educators and students who are already transforming their learning experience with EduTech Pro.</p>
            <form class="contact-form">
              <input type="text" placeholder="Your Name" required>
              <input type="email" placeholder="Your Email" required>
              <input type="text" placeholder="Institution/Organization">
              <textarea rows="4" placeholder="Tell us about your educational needs" required></textarea>
              <button type="submit">Start Your Free Trial</button>
            </form>
          </div>
        </section>

        <!-- Footer -->
        <footer>
          <div class="container">
            <p>&copy; 2024 EduTech Pro. All rights reserved. | Transforming education through technology.</p>
          </div>
        </footer>

        <script>
          // Smooth scrolling for navigation links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            });
          });

          // Form submission handler
          document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you soon.');
            this.reset();
          });

          // Add scroll effect to header
          window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
              header.style.background = 'rgba(102, 126, 234, 0.95)';
            } else {
              header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }
          });
        </script>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`EduTech Pro landing page running at http://localhost:${port}/`);
});
