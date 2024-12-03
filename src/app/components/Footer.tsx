import Image from "next/image";

const Footer = () => {
    const FooterLink = ({ href, src, alt }: { href: string; src: string; alt: string }) => {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
                <Image src={src} alt={alt} width={24} height={24} />
            </a>
        );
    };
    return (
        <footer className="flex justify-center items-center gap-4 py-8">
            <FooterLink href="https://github.com/AnbessawM" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt="GitHub" />
            <FooterLink href="https://www.linkedin.com/in/samuel-mengistu" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" alt="LinkedIn" />
            <FooterLink href="https://twitter.com/AnbessawM" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg" alt="Twitter" />
        </footer>
    );
};

export default Footer;
