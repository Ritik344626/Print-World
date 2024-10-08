import { Link } from 'react-router-dom';
import { Logo } from '@assets/brand/logo';
import { Mail, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-5 py-10 mt-32 bg-slate-100 h-fit">
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <Logo />
          <h3 className="font-semibold mt-4">© 2024</h3>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">Shop</Link>
            </li>
            <li>
              <Link to="/account" className="hover:underline">My Account</Link>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="font-semibold mb-4">Important</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:underline">Refund Policy</Link>
            </li>
            <li>
              <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-semibold mb-4">Contacts</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>123 Street, City, Country</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contact@example.com</span>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us On</h4>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-75">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-75">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-75">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
