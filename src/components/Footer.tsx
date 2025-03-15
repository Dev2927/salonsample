import { Input } from "./ui/input";
import { Button } from "./ui/button";

const socialIcons = [
  { name: 'facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { name: 'instagram', path: 'M12 2c2.8 0 3.2 0 4.3.1a4.5 4.5 0 0 1 2.6 1.1 4.5 4.5 0 0 1 1.1 2.6c.1 1.1.1 1.5.1 4.3s0 3.2-.1 4.3a4.5 4.5 0 0 1-1.1 2.6 4.5 4.5 0 0 1-2.6 1.1c-1.1.1-1.5.1-4.3.1s-3.2 0-4.3-.1a4.5 4.5 0 0 1-2.6-1.1 4.5 4.5 0 0 1-1.1-2.6c-.1-1.1-.1-1.5-.1-4.3s0-3.2.1-4.3a4.5 4.5 0 0 1 1.1-2.6 4.5 4.5 0 0 1 2.6-1.1C8.8 2 9.2 2 12 2zm0 2c-2.7 0-3.1 0-4.2.1a2.5 2.5 0 0 0-1.5.6 2.5 2.5 0 0 0-.6 1.5c-.1 1-.1 1.4-.1 4.2s0 3.1.1 4.2a2.5 2.5 0 0 0 .6 1.5 2.5 2.5 0 0 0 1.5.6c1 .1 1.4.1 4.2.1s3.1 0 4.2-.1a2.5 2.5 0 0 0 1.5-.6 2.5 2.5 0 0 0 .6-1.5c.1-1 .1-1.4.1-4.2s0-3.1-.1-4.2a2.5 2.5 0 0 0-.6-1.5 2.5 2.5 0 0 0-1.5-.6C15.1 4 14.7 4 12 4zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' },
  { name: 'twitter', path: 'M22 5.9a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1 4.2 4.2 0 0 0-7.1 3.8 12 12 0 0 1-8.6-4.3 4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.05a4.2 4.2 0 0 0 3.3 4.1 4.2 4.2 0 0 1-1.9.07 4.2 4.2 0 0 0 3.9 2.9 8.4 8.4 0 0 1-5.2 1.8 12 12 0 0 0 6.4 1.9c7.7 0 12-6.3 12-12v-.6a8.5 8.5 0 0 0 2-2.2z' }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 flex justify-center">
      <div className="container py-12 sm:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-rose-700 to-pink-700 bg-clip-text text-transparent mb-4">
              GlamourStudio
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Where beauty meets perfection. Book your transformation today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Services', 'Team', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="flex items-center group text-gray-400 hover:text-rose-600 transition-colors"
                  >
                    <span className="w-2 h-2 bg-rose-700 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-lg">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                '123 Beauty Street',
                'New York, NY 10001',
                'Phone: (555) 123-4567',
                'Email: hello@glamourstudio.com'
              ].map((item) => (
                <li 
                  key={item}
                  className="text-gray-400 flex items-center"
                >
                  <span className="w-2 h-2 bg-rose-700 rounded-full mr-3 opacity-70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-lg">Newsletter</h4>
            <form className="flex flex-col gap-3 sm:gap-4">
              <Input
                placeholder="Your email"
                className="rounded-full py-4 sm:py-5 px-6 bg-gray-800 border-gray-700 focus:border-rose-600 text-white placeholder-gray-500 focus:ring-2 focus:ring-rose-600/30"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-700 to-pink-700 hover:from-rose-800 hover:to-pink-800 rounded-full py-5 sm:py-6 font-medium shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm mb-6">
            © 2024 GlamourStudio. All rights reserved.
          </p>
          
          <div className="flex justify-center gap-4 sm:gap-6">
            {socialIcons.map((platform) => (
              <a
                key={platform.name}
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors group relative"
              >
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-rose-600 transition-colors"
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d={platform.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}