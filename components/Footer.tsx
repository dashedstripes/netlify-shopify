import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
        <p className="mt-2 text-sm">
          <a
            href="/privacy-policy" // Replace with your privacy policy page URL
            className="hover:text-blue-300"
          >
            Privacy Policy
          </a>
          {' | '}
          <a
            href="/terms-of-service" // Replace with your terms of service page URL
            className="hover:text-blue-300"
          >
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
