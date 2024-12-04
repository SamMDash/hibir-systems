import Image from 'next/image';
const AboutMe = () => {
  return (
    <section className="max-w-5xl w-full text-gray-700 dark:text-gray-200 mx-auto p-4 sm:p-8">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
        About Me
      </h2>

      {/* Description Paragraph */}
      <p className="text-lg sm:text-xl mb-6 leading-relaxed">
        Welcome to Hibir Systems! At Hibir Systems, we are dedicated to revolutionizing healthcare through innovative technology, combining cutting-edge software solutions with practical applications to improve patient care and streamline healthcare processes.
      </p>

      {/* Image or Visual Component (Placeholder) */}
      <div className="flex justify-center sm:justify-start mb-8">
        <Image
          src="images/logo.jpg"  // Placeholder image
          alt="Hibir Systems"
          className="w-full sm:w-80 rounded-lg shadow-lg"
        />
      </div>

      {/* Call to Action or More Info */}
      <div className="text-center sm:text-left">
        <button className="px-6 py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
