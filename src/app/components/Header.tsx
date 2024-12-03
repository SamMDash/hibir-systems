import React from "react";
import Image from "next/image";

// Define the type for the props
type HeaderProps = {
  isShrunk: boolean;
};

const Header = ({ isShrunk }: HeaderProps) => {
  return (
    <header
      className={`transition-all duration-500 ease-in-out flex flex-col gap-4 items-center ${
        isShrunk ? "text-left absolute top-4 left-4" : "text-center"
      }`}
    >
      <Image
        className={`rounded-full shadow-lg transition-all duration-500 ease-in-out ${
          isShrunk ? "w-12 h-12" : "w-36 h-36"
        }`}
        src="https://www.example.com/path/to/official/profile-pic.jpg" // Replace with official image URL
        alt="Samuel Mengistu"
        width={150}
        height={150}
        priority
      />
      <h1
        className={`text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white transition-all duration-500 ease-in-out ${
          isShrunk ? "text-xl" : "text-3xl"
        }`}
      >
        Samuel Mengistu
      </h1>
      <p
        className={`text-lg sm:text-xl text-gray-600 dark:text-gray-300 transition-all duration-500 ease-in-out ${
          isShrunk ? "text-sm" : "text-lg"
        }`}
      >
        Software Developer | Hibir Systems
      </p>
    </header>
  );
};

export default Header;
