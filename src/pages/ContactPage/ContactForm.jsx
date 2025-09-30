import React from 'react'

const ContactForm = () => {
  return (
    <div className="max-w-[600px] mx-auto shadow-lg rounded-[24px] border border-[#E6E6E6] p-10" >
      {}
      <h1 className="text-center text-[32px] font-bold mb-4">Get in touch</h1>
      <p className="text-center text-[#777E90] mb-8">
        Your email address will not be published. Required fields are marked *
      </p>

      {}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#777E90] mb-2">NAME</label>
        <input
          type="text"
          placeholder="Input Name"
          className="w-full p-4 rounded-lg border border-[#E6E6E6] focus:outline-none focus:border-[#00C566]"
        />
      </div>

      {}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#777E90] mb-2">EMAIL</label>
        <input
          type="email"
          placeholder="Input Email"
          className="w-full p-4 rounded-lg border border-[#E6E6E6] focus:outline-none focus:border-[#00C566]"
        />
      </div>

      {}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#777E90] mb-2">MESSAGE</label>
        <textarea
          rows="4"
          placeholder="Your message"
          className="w-full p-4 rounded-lg border border-[#E6E6E6] focus:outline-none focus:border-[#00C566]"
        ></textarea>
      </div>

      {}
      <div className="flex items-start mb-6">
        <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#141416]" />
        <p className="ml-3 text-sm text-[#777E90]">
          Save my name, email, and website in this browser for the next time I comment.
        </p>
      </div>

      {}
      <button className="w-full bg-[#00C566] text-white font-semibold py-4 rounded-full hover:bg-[#00b55b] transition">
        Send now
      </button>
    </div>
  )
}

export default ContactForm
