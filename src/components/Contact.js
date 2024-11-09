
const Contact = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
    <h1 className="font-bold text-2xl text-center mb-6">Contact Us</h1>
    
    <label className="block text-gray-700 font-semibold mb-2">Name</label>
    <input 
        type="text" 
        className="w-full border border-gray-300 p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Your Name"
    />

    <label className="block text-gray-700 font-semibold mb-2">Email</label>
    <input 
        type="email" 
        className="w-full border border-gray-300 p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Your Email"
    />

    <label className="block text-gray-700 font-semibold mb-2">Mobile</label>
    <input 
        type="tel" 
        className="w-full border border-gray-300 p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Your Mobile Number"
    />

    <label className="block text-gray-700 font-semibold mb-2">Message</label>
    <textarea 
        className="w-full border border-gray-300 p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Your Message" 
        rows="4"
    ></textarea>

    <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-bold hover:bg-blue-600 transition duration-300">
        Submit
    </button>
</div>

  )
}

export default Contact;