import React from "react";
import Image from "next/image";

// Define the type for the props
type HeaderProps = {
  isShrunk: boolean;
};

const Header = ({ isShrunk }: HeaderProps) => {
  return (
    <header
      className={`transition-all duration-500 ease-in-out ${
        isShrunk
          ? "absolute top-16 left-4 flex items-center gap-4 z-20"
          : "relative flex flex-col gap-4 items-center pt-16 z-10"
      }`}
    >
      <div
        className={`transition-all duration-500 ease-in-out ${
          isShrunk ? "w-12 h-12" : "w-36 h-36"
        }`}
      >
        <Image
          className="rounded-full shadow-lg"
          src="https://www.example.com/path/to/official/profile-pic.jpg" // Replace with official image URL
          alt="Samuel Mengistu"
          width={150}
          height={150}
          priority
        />
      </div>
      <h1
        className={`transition-all duration-500 ease-in-out ${
          isShrunk ? "text-xl" : "text-3xl sm:text-4xl"
        } text-gray-800 dark:text-white`}
      >
        Samuel Mengistu
      </h1>
      <p
        className={`transition-all duration-500 ease-in-out ${
          isShrunk ? "text-sm" : "text-lg sm:text-xl"
        } text-gray-600 dark:text-gray-300`}
      >
        Software Developer | Hibir Systems
      </p>
    </header>
  );
};

export default Header;
