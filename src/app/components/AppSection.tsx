const AppSection = () => {
  return (
    <section className="max-w-6xl w-full text-gray-700 dark:text-gray-200 py-12 px-6 sm:px-12">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center">
        Hibir Medicos App
      </h2>
      <p className="text-lg mb-6 text-center sm:text-left">
        Hibir Medicos is an innovative Android app developed to enhance healthcare accessibility in various fields, offering essential tools for medical professionals and students. With features that streamline diagnosis, treatment planning, and data collection, Hibir Medicos ensures improved healthcare delivery and a better user experience.
      </p>
      <div className="text-center sm:text-left">
        <a
          href="https://t.me/HibirSystems/3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-green-600 hover:bg-green-700 rounded-lg px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Download
        </a>
      </div>
    </section>
  );
};

export default AppSection;
