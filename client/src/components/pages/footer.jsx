import React from 'react';
import { Button } from '../ButtonComponent';
import { Link } from 'react-router-dom';
import '../pages/Footer.css'

function Footer() {
  return (
    <div className = 'footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Mari Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <p className="footer-subscription-text">
          Hubungi kami di.. dimana hayoo
        </p>
        <div className="input-areas">
          <form>
            <input className='footer-input' type = 'nohp' name = 'nohp' placehoder = 'No Handphone Anda' />
            <Button buttonStyle = 'btn--outline'>Hubungi Kami</Button>
            </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-links-wrapper">
            <div className ="footer-link-items">
                <h2>Tentang Kami</h2>
                <Link to='/sign-up'>Daftar</Link>
                <Link to='/'>Testimoni</Link>
                <Link to='/'>Testimoni</Link>
                <Link to='/'>Term of Service</Link>
            </div>
        </div>
        <div className="footer-links-wrapper">
            <div className ="footer-link-items">
                <h2>Hubungi Kami</h2>
                <Link to='/'>Daftar</Link>
                <Link to='/'>Testimoni</Link>
                <Link to='/'>Testimoni</Link>
                <Link to='/'>Term of Service</Link>
            </div>
        </div>
        <div className="footer-links-wrapper">
            <div className ="footer-link-items">
                <h2>Sosial Media</h2>
                <Link to='/'>Instagram</Link>
                <Link to='/'>Facebook</Link>
                <Link to='/'>YouTube</Link>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Footer