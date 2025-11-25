import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { addContactMessage } from "../firebase";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await addContactMessage(formData);

      // Confetti celebration
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
      });

      // Toast success
      toast.success("Message sent successfully!");

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact submission error:", err);
      toast.error("Could not send message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 py-16 px-6">
      <SectionHeader
        title="̲C̲̲o̲̲n̲̲t̲a̲̲c̲̲t̲ ̲M̲̲e̲"
        subtitle="Feel free to reach out for collaborations, questions, or learning opportunities."
      />

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-pink-100 dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-amber-800 hover:bg-pink-500 disabled:opacity-60 text-white py-2 rounded-md font-medium transition"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;