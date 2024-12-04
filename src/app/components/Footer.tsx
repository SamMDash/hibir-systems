import Image from "next/image";

const Footer = () => {
  const FooterLink = ({ href, src, alt }: { href: string; src: string; alt: string }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-transform duration-300 transform hover:scale-110"
      >
        <Image
          src={src}
          alt={alt}
          width={24}  // Reduced size for better compactness
          height={24} // Consistent size
        />
      </a>
    );
  };

  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 py-2 sm:py-3">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Section with text and icons */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 mb-2 flex-wrap">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-4">Connect with Me</p>
          <div className="flex gap-6 sm:gap-8 md:gap-10">
            <FooterLink
              href="https://github.com/AnbessawM"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
              alt="GitHub"
            />
            <FooterLink
              href="https://www.linkedin.com/in/samuel-mengistu"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
              alt="LinkedIn"
            />
            <FooterLink
              href="https://twitter.com/AnbessawM"
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg"
              alt="Twitter"
            />
          </div>
        </div>
        {/* Year at the bottom */}
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">© 2024 Hibir Systems. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
