import Image from "next/image";
import { useEffect, useState } from "react";

const TechnologyCard = ({
  src,
  alt,
  name,
  description,
  delay,
}: {
  src: string;
  alt: string;
  name: string;
  description: string;
  delay: number;
}) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !inView) {
            setInView(true);
            observer.unobserve(entry.target); // Stop observing after the card has been animated
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardElement = document.getElementById(name);
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [name, inView]);

  return (
    <div
      id={name}
      className={`service-card p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col items-center gap-4 text-center transition-all transform opacity-0 ${
        inView
          ? `opacity-100 translate-y-0 transition-all ease-out duration-1000 delay-[${delay}s]`
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex justify-center items-center">
        <Image src={src} alt={alt} width={40} height={40} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const Technologies = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-gray-700 dark:text-gray-200">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
      Technologies I Have Experience Working With
      </h2>
      
      {/* Technologies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Technology 1: Next.js */}
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg"
          alt="Next.js"
          name="Next.js"
          description="A powerful React framework for building server-side rendered applications and static websites."
          delay={0.1}
        />

        {/* Technology 2: React */}
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg"
          alt="React"
          name="React"
          description="A popular JavaScript library for building user interfaces, especially single-page applications."
          delay={0.2}
        />

        {/* Technology 3: Node.js */}
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg"
          alt="Node.js"
          name="Node.js"
          description="A JavaScript runtime built on Chrome's V8 engine, used for building scalable backend applications."
          delay={0.3}
        />

        {/* Technology 4: Tailwind CSS */}
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg"
          alt="Tailwind CSS"
          name="Tailwind CSS"
          description="A utility-first CSS framework for rapidly building custom designs without writing custom CSS."
          delay={0.4}
        />

        {/* Technology 5: Expo */}
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/expo.svg"
          alt="Expo"
          name="Expo"
          description="A framework and platform for universal React applications, making mobile app development easier."
          delay={0.5}
        />

        {/* Technology 6: GitHub */}
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
          alt="GitHub"
          name="GitHub"
          description="A platform for version control and collaboration, enabling developers to manage projects and code."
          delay={0.6}
        />

        {/* Technology 7: Angular */}
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/angular.svg"
          alt="Angular"
          name="Angular"
          description="A platform and framework for building client-side applications with TypeScript, powered by Google."
          delay={0.7}
        />

        {/* Technology 8: Django */}
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/django.svg"
          alt="Django"
          name="Django"
          description="A high-level Python web framework that encourages rapid development of secure and maintainable websites."
          delay={0.8}
        />

        {/* Technology 9: MySQL */}
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg"
          alt="MySQL"
          name="MySQL"
          description="An open-source relational database management system used to store and manage data in a structured format."
          delay={0.9}
        />

        {/* Technology 10: AWS */}
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg"
          alt="AWS"
          name="AWS"
          description="A comprehensive cloud platform offering scalable computing power, storage, and other services."
          delay={1.0}
        />
      </div>
    </section>
  );
};

export default Technologies;
