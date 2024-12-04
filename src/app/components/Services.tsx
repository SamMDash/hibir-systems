import { FaLaptopCode, FaCloud, FaCodeBranch, FaCogs } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const ServiceCard = ({ icon, title, description, bgColor, delay }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger animation when 10% of the element is in the viewport
    );

    const cardElement = document.getElementById(title);
    if (cardElement) {
      observer.observe(cardElement);
    }

    // Cleanup observer when the component is unmounted
    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [title]);

  return (
    <div
      id={title}
      className={`service-card bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transition-all transform opacity-0 ${
        inView
          ? `opacity-100 translate-y-0 transition-all ease-out duration-1000 delay-[${delay}s]`
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className={`text-4xl ${bgColor} mx-auto mb-4`}>{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-gray-700 dark:text-gray-200">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
        My Professional Services
      </h2>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service 1: Web & Mobile App Development */}
        <ServiceCard
          icon={<FaLaptopCode />}
          title="Web & Mobile App Development"
          description="Building responsive and high-performance web and mobile apps tailored to your needs."
          bgColor="text-blue-500"
          delay={0.1}
        />

        {/* Service 2: Software Architecture & Consulting */}
        <ServiceCard
          icon={<FaCodeBranch />}
          title="Software Architecture & Consulting"
          description="Expert advice on creating scalable, maintainable, and high-performance software solutions."
          bgColor="text-green-500"
          delay={0.2}
        />

        {/* Service 3: API Development and Integration */}
        <ServiceCard
          icon={<FaCloud />}
          title="API Development & Integration"
          description="Seamlessly connect your applications with secure and efficient APIs."
          bgColor="text-orange-500"
          delay={0.3}
        />

        {/* Service 4: Cloud Solutions & DevOps */}
        <ServiceCard
          icon={<FaCogs />}
          title="Cloud Solutions & DevOps"
          description="Delivering robust cloud solutions and implementing DevOps for continuous integration and delivery."
          bgColor="text-purple-500"
          delay={0.4}
        />
      </div>
    </section>
  );
};

export default Services;
