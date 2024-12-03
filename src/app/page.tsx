import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 bg-gradient-to-b from-[#f7f7f7] to-[#e2e2e2]">
      <header className="flex flex-col gap-4 items-center">
        <Image
          className="rounded-full shadow-lg"
          src="/profile-pic.jpg" // Use your profile picture here
          alt="Samuel Mengistu"
          width={150}
          height={150}
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white">
          Samuel Mengistu
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Software Developer | Founder of Hibir Systems
        </p>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <section className="max-w-4xl w-full text-gray-700 dark:text-gray-200">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg">
            Welcome to Hibir Systems

            At Hibir Systems, we are dedicated to revolutionizing healthcare through innovative technology. Our mission is to bridge the gap between modern medicine and cutting-edge software solutions, improving both patient care and the capabilities of the medical industry.

            I’m Samuel Mengistu, a passionate software developer with a focus on building efficient and scalable solutions. I specialize in web and mobile application development, and have a deep interest in creating user-friendly, high-performance applications. As the founder of Hibir Systems, I strive to provide cutting-edge software solutions that contribute to the healthcare field. My goal is to leverage technology to improve healthcare, making it more accessible, efficient, and impactful. Through intelligent, user-centric applications, we aim to transform healthcare services and empower the medical world to provide better care for everyone.
          </p>
        </section>

        <section className="max-w-4xl w-full text-gray-700 dark:text-gray-200">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">My Services</h2>
          <ul className="list-disc pl-6">
            <li>Web & Mobile App Development</li>
            <li>Software Architecture & Consulting</li>
            <li>API Development and Integration</li>
            <li>Cloud Solutions & DevOps</li>
          </ul>
        </section>

        <section className="max-w-4xl w-full text-gray-700 dark:text-gray-200">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Technologies I Use</h2>
          <div className="flex gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-lg">
              <Image src="/nextjs-icon.png" alt="Next.js" width={40} height={40} />
              <span>Next.js</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Image src="/react-icon.png" alt="React" width={40} height={40} />
              <span>React</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Image src="/nodejs-icon.png" alt="Node.js" width={40} height={40} />
              <span>Node.js</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Image src="/tailwindcss-icon.png" alt="Tailwind CSS" width={40} height={40} />
              <span>Tailwind CSS</span>
            </div>
          </div>
        </section>

        {/* Hibir Medicos App Section */}
        <section className="max-w-4xl w-full text-gray-700 dark:text-gray-200">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Hibir Medicos App</h2>
          <p className="text-lg mb-4">
            Hibir Medicos is an Android app I developed to improve healthcare accessibility. It includes essential medical calculators, growth charts, and decision support tools designed to assist healthcare professionals in delivering better care. The app aims to simplify everyday tasks for doctors, nurses, and healthcare providers, improving decision-making processes and streamlining medical workflows.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.hibir.medicos" // Replace with your actual download link if available
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-600 hover:bg-green-700 rounded-lg px-6 py-3"
          >
            Download Hibir Medicos App
          </a>
        </section>

        <section className="max-w-4xl w-full text-gray-700 dark:text-gray-200">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Me</h2>
          <p className="text-lg mb-4">
            Interested in collaborating or have a project in mind? Feel free to reach out!
          </p>
          <a
            href="mailto:anbessm16@gmail.com"
            className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-3"
          >
            Email Me
          </a>
        </section>
      </main>

      <footer className="flex justify-center items-center gap-4 py-8">
        <a
          href="https://github.com/AnbessawM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
        >
          <Image src="/github-icon.svg" alt="GitHub" width={24} height={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-mengistu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
        >
          <Image src="/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} />
        </a>
        <a
          href="https://twitter.com/AnbessawM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
        >
          <Image src="/twitter-icon.svg" alt="Twitter" width={24} height={24} />
        </a>
      </footer>
    </div>
  );
}
