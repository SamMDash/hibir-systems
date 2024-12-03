import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col gap-4 items-center">
      <Image
        className="rounded-full shadow-lg"
        src="https://www.example.com/path/to/official/profile-pic.jpg" // Replace with official image URL
        alt="Samuel Mengistu"
        width={150}
        height={150}
        priority
      />
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white">
        Samuel Mengistu
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        Software Developer | Hibir Systems
      </p>
    </header>
  );
};

export default Header;
