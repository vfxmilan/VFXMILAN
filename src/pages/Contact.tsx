import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const serviceID = "service_imnttin";
  const templateID = "__ejs-test-mail-service__";
  const publicKey = "4zS0nBBsiYTrjGz6I";

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage("");

    if (form.current) {
      emailjs
        .sendForm("service_imnttin", "__ejs-test-mail-service__", form.current, {
          publicKey:"4zS0nBBsiYTrjGz6I",
        })
        .then(
          () => {
            setFeedbackMessage("✅ Message sent successfully!");
            form.current?.reset();
          },
          (error: Error) => {
            console.error("EmailJS Error:", error);
            setFeedbackMessage("❌ Failed to send the message. Please try again.");
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section className="bg-black flex flex-col justify-center">
      <h1 className="pt-20 mb-4 text-4xl font-extrabold underline decoration-purple-500 leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
        Contact
      </h1>
      <div className="p-10 flex-grow flex flex-col justify-center py-24">
        <div className="max-w-xl space-y-3 text-center mx-auto">
          <p className="text-3xl text-white font-semibold sm:text-4xl">
            Don't hesitate to get in touch!
          </p>
          <p className="text-lg text-white">
            I'm passionate about creating captivating videos that engage and
            inspire. If you're looking for a skilled video editor to bring your
            vision to life, you've come to the right place. I would be thrilled
            to collaborate with you and help you achieve your goals.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-12 max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-800 text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-800 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-gray-800 text-white h-32"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {feedbackMessage && (
            <p className="text-white mt-2">{feedbackMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
