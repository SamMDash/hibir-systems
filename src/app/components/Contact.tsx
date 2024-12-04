import { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form input change
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      const result = await response.json();

      setStatus(result.message);
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" }); // Reset form
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="max-w-4xl w-full text-gray-700 dark:text-gray-200 py-12 px-6 sm:px-12">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center sm:text-left">
        Get in Touch
      </h2>
      <p className="text-lg mb-8 text-center sm:text-left">
        Whether you have a question, want to collaborate, or just want to say
        hello, feel free to reach out! I would love to connect.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Social Media Links Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Find Me On</h3>
          <div className="flex gap-8 justify-center sm:justify-start">
            <a
              href="https://github.com/AnbessawM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Image
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                alt="GitHub"
                width={48}
                height={48}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-mengistu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Image
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
                alt="LinkedIn"
                width={48}
                height={48}
              />
            </a>
            <a
              href="https://twitter.com/AnbessawM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Image
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg"
                alt="Twitter"
                width={48}
                height={48}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Inquiry Form Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Or Send Me a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-600"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-600"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-600"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-3 text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p
            className={`mt-4 text-center text-lg ${
              status.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
