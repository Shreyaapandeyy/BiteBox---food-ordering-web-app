
const Contact = () => {
  return (
    <div>
        <h1 className="font-bold text-lg p-4 m-4"> Contact Us</h1>
        <input type="text" className=" border border-black p-2 m-2" placeholder="name">
        </input>
        <input type="text" className=" border border-black p-2 m-2" placeholder="message">
        </input>
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>

    </div>
  )
}

export default Contact;