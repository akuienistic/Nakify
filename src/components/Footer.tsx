const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-[hsl(260,70%,50%)] to-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Brand Section */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto rounded-full border-3 border-white flex items-center justify-center mb-4 backdrop-blur-sm bg-white/10 shadow-xl">
              <span className="text-white font-bold text-3xl">N</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">Nakify</h3>
            <p className="text-white/90 text-lg mb-4">Solutions by Naki</p>
            <p className="text-white/80 max-w-2xl mx-auto">
              Your trusted partner for professional printing services—from documents to signage, 
              branded products to premium finishing.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/30 my-8" />

          {/* Bottom Section */}
          <div className="text-center space-y-3">
            <p className="text-white/90 text-sm">
              © {new Date().getFullYear()} Nakify. All rights reserved.
            </p>
            <p className="text-white/70 text-sm">
              Built and Designed by <span className="font-semibold text-white">Simon Akuien Atem</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
