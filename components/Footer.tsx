import React from 'react';

function Footer() {
  return (
    <footer className="w-full px-6 py-10 mt-20  border-t ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Socials Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">TikTok</a></li>
            </ul>
          </div>
          
          {/* Legals Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Back to Top</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm">
          &copy; {new Date().getFullYear()} zeron Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
