import './Sections.css';

export default function Sections() {
  return (
    <main className="sections">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to Bella Vista</h2>
          <p className="hero-subtitle">Experience Authentic Italian Flavors</p>
          <button className="cta-button">Reserve a Table</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                For over three decades, Bella Vista has been serving authentic Italian cuisine
                crafted with passion and tradition. Our chefs bring generations of culinary
                expertise to every dish, using only the finest ingredients imported from Italy.
              </p>
              <p>
                We believe in creating memorable dining experiences where every meal tells a story
                of Italian heritage, family traditions, and culinary excellence.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>RestVoidFrament Interior</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu">
        <div className="container">
          <div className="section-header">
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <div className="menu-grid">
            <div className="menu-item">
              <div className="menu-item-header">
                <h3>Appetizers</h3>
              </div>
              <ul className="menu-list">
                <li>
                  <span className="dish-name">Bruschetta al Pomodoro</span>
                  <span className="dish-price">$12</span>
                </li>
                <li>
                  <span className="dish-name">Antipasto Misto</span>
                  <span className="dish-price">$18</span>
                </li>
                <li>
                  <span className="dish-name">Calamari Fritti</span>
                  <span className="dish-price">$16</span>
                </li>
              </ul>
            </div>
            <div className="menu-item">
              <div className="menu-item-header">
                <h3>Main Courses</h3>
              </div>
              <ul className="menu-list">
                <li>
                  <span className="dish-name">Spaghetti Carbonara</span>
                  <span className="dish-price">$24</span>
                </li>
                <li>
                  <span className="dish-name">Osso Buco</span>
                  <span className="dish-price">$32</span>
                </li>
                <li>
                  <span className="dish-name">Margherita Pizza</span>
                  <span className="dish-price">$20</span>
                </li>
              </ul>
            </div>
            <div className="menu-item">
              <div className="menu-item-header">
                <h3>Desserts</h3>
              </div>
              <ul className="menu-list">
                <li>
                  <span className="dish-name">Tiramisu</span>
                  <span className="dish-price">$10</span>
                </li>
                <li>
                  <span className="dish-name">Cannoli Siciliani</span>
                  <span className="dish-price">$9</span>
                </li>
                <li>
                  <span className="dish-name">Gelato Selection</span>
                  <span className="dish-price">$8</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Visit Us</h2>
            <div className="underline"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <h3>Location</h3>
                <p>123 Main Street<br />New York, NY 10001</p>
              </div>
              <div className="info-item">
                <h3>Hours</h3>
                <p>Monday - Thursday: 5:00 PM - 10:00 PM<br />
                   Friday - Saturday: 5:00 PM - 11:00 PM<br />
                   Sunday: 4:00 PM - 9:00 PM</p>
              </div>
              <div className="info-item">
                <h3>Contact</h3>
                <p>Phone: (555) 123-4567<br />
                   Email: info@bellavista.com</p>
              </div>
            </div>
            <div className="contact-form">
              <h3>Make a Reservation</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <input type="time" required />
                </div>
                <div className="form-group">
                  <input type="number" placeholder="Number of Guests" min="1" required />
                </div>
                <button type="submit" className="submit-button">Book Table</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

