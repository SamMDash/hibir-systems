import TechnologyCard from "./TechnologyCard";

const Technologies = () => {
  return (
    <section className="max-w-4xl w-full text-gray-700 dark:text-gray-200">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Technologies I Use</h2>
      <div className="flex gap-6 flex-wrap">
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg"
          alt="Next.js"
          name="Next.js"
        />
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg"
          alt="React"
          name="React"
        />
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg"
          alt="Node.js"
          name="Node.js"
        />
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg"
          alt="Tailwind CSS"
          name="Tailwind CSS"
        />
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/expo.svg"
          alt="Expo"
          name="Expo"
        />
        <TechnologyCard
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
          alt="GitHub"
          name="GitHub"
        />
      </div>
    </section>
  );
};

export default Technologies;
