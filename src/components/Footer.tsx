import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">R</div>
              <div>
                <span className="footer-logo-react">React</span>
                <span className="footer-logo-dc">DC</span>
              </div>
            </div>
            <p className="footer-mission">
              Empowering families with fidelity, empathy, and adaptability
              in the Washington DC metro area.
            </p>
          </div>

          <div className="footer-links">
            <h4>Organization</h4>
            <a href="https://www.reactdc.org/" target="_blank" rel="noopener noreferrer">About ReactDC</a>
            <a href="https://www.reactdc.org/" target="_blank" rel="noopener noreferrer">Our Programs</a>
            <a href="https://www.reactdc.org/" target="_blank" rel="noopener noreferrer">ReactWoman</a>
            <a href="https://www.reactdc.org/" target="_blank" rel="noopener noreferrer">Contact Us</a>
          </div>

          <div className="footer-links">
            <h4>Give</h4>
            <a href="#donate">Monthly Giving</a>
            <a href="#donate">Annual Giving</a>
            <a href="https://www.reactdc.org/" target="_blank" rel="noopener noreferrer">Corporate Partners</a>
            <a href="https://www.reactdc.org/" target="_blank" rel="noopener noreferrer">Volunteer</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-legal">
            ReactDC is a registered 501(c)(3) nonprofit organization. All donations are
            tax-deductible to the extent permitted by law. No goods or services were
            provided in exchange for your contribution.
          </p>
          <p className="footer-copyright">
            © {year} ReactDC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
