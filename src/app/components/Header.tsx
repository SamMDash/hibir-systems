import React from "react";
import Image from "next/image";

// Define the type for the props
type HeaderProps = {
  isShrunk: boolean;
};

const Header = ({ isShrunk }: HeaderProps) => {
  return (
    <header
      className={`transition-all duration-1700 ease-in-out flex flex-col items-center ${
        isShrunk ? "absolute top-16 left-4 z-20" : "pt-16 z-10"
      }`}
    >
      {/* Profile Image */}
      <div
        className={`rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl transform ${
          isShrunk ? "w-20 h-20" : "w-36 h-36"
        }`}
      >
        <Image
          className="rounded-full object-cover"
          src="/images/profile.jpg" // Replace with the actual path
          alt="Samuel Mengistu"
          width={150}
          height={150}
          priority
        />
      </div>

      {/* Text */}
      <div
        className={`transition-all duration-1700 ease-in-out flex flex-col items-center ${
          isShrunk ? "mt-2" : "mt-4"
        }`}
      >
        <h1
          className={`font-bold transition-all ${isShrunk ? "text-sm sm:text-base" : "text-3xl sm:text-4xl"} text-gray-800 dark:text-white`}
        >
          Samuel Mengistu
        </h1>
        <p
          className={`transition-all ${isShrunk ? "text-xs sm:text-sm" : "text-lg sm:text-xl"} text-gray-600 dark:text-gray-300`}
        >
          Hibir Systems
        </p>
      </div>
    </header>
  );
};

export default Header;
