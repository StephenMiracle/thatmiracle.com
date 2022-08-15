import React, {useState} from "react"

export default () => {


   const [hasSent, setHasSent] = useState(false)
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [message, setMessage] = useState('')

   const handleFormSubmit = (e) => {
        e.preventDefault(); 
        setHasSent(true);
   }

   return (
    <>
    {
        !hasSent &&  <form onSubmit={handleFormSubmit} className={hasSent ? 'hidden' : 'block'}>
        <div className="mb-4">
        <label 
            className="block text-gray-700 text-lg font-bold mb-2" 
            htmlFor="user-name">
            Name 
        </label>
        <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            value={name} 
            onChange={(evt) => {setName(evt.target.value)}} 
            id="user-name" 
            type="text" 
            placeholder="Name: Jack Doe" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="user-email">
            Email
        </label>
        <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            value={email} 
            onChange={(evt) => {setEmail(evt.target.value)}} 
            id="user-email" 
            type="email" 
            placeholder="Email: jack@needshelp.com" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="user-phone">
            Phone
        </label>
        <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            value={phone} 
            onChange={(evt) => {setPhone(evt.target.value)}} 
            id="user-phone" 
            type="number" 
            placeholder="Phone: 415 123 1234" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="user-message">
            Message
        </label>
        <textarea 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            value={message} 
            onChange={(evt) => {setMessage(evt.target.value)}} 
            id="user-message" 
            rows= {5} 
            placeholder="Message: Hello there!" 
            />
        </div>
        <div className="mt-6">
        <button className="shadow font-cursive bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 block w-full text-2xl focus:outline-none focus:shadow-outline" type="submit">
            Send Email
        </button>
        </div>
    </form>
    }
    {
        hasSent &&  (
            <div className={hasSent ? 'block' : 'hidden'}>
              <p className="text-center text-gray-700 text-2lg font-bold mb-2">
               Thank you for reaching out. I will get back with you as soon as possible. Have a great day.
              </p>
            </div>
          )
    }
   
    </>
   )
    
}