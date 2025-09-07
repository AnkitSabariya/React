import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-[91.1vh] px-6 pt-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-blue-600">Contact Us</h2>
      <form className="flex flex-col w-full max-w-md gap-4 p-6 mt-6 bg-white rounded-lg shadow-lg">
        <input type="text" placeholder="Your Name" className="p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="p-3 border rounded-lg" />
        <textarea placeholder="Your Message" className="p-3 border rounded-lg"></textarea>
        <button className="py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
