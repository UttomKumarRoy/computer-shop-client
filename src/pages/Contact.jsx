
const Contact = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We love to hear from you! Please fill out the form below or reach us at our contact information.
          </p>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row justify-center">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6 lg:w-1/2 lg:mr-6">
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit" disabled
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/3">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
              <h3 className="text-gray-900 text-lg font-bold mb-4">Contact Information</h3>
              <p className="text-gray-700 text-base mb-4">
                <strong>Address:</strong> Dhaka, Bangladesh
              </p>
              <p className="text-gray-700 text-base mb-4">
                <strong>Phone:</strong> +88 0172522222
              </p>
              <p className="text-gray-700 text-base mb-4">
                <strong>Email:</strong> info@computershop.com
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.51 0-10 4.49-10 10s4.49 10 10 10 10-4.49 10-10-4.49-10-10-10zm.63 15v-4h-1.6v4h-2.63v-6h-1.6v-2.23h1.6v-1.58c0-1.46.95-2.25 2.33-2.25.66 0 1.22.05 1.39.07v1.61h-.96c-.75 0-.89.35-.89.88v1.27h1.79l-.23 2.23h-1.56z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.47 20.47H3.53V3.53h16.94v16.94zM5.35 5.35v13.29h13.29V5.35H5.35zM18 12c0-3.31-2.69-6-6-6s-6 2.69-6 6 2.69 6 6 6 6-2.69 6-6zm-3.5 0c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 5.64c-.8.35-1.67.59-2.58.7.93-.56 1.63-1.46 1.96-2.52-.86.52-1.8.9-2.8 1.1-.82-.88-1.99-1.43-3.28-1.43-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.7.11 1.03-3.74-.18-7.06-1.98-9.29-4.68-.39.66-.61 1.42-.61 2.24 0 1.54.79 2.9 2 3.7-.73-.02-1.42-.22-2.02-.56v.06c0 2.15 1.53 3.94 3.56 4.34-.37.1-.76.15-1.16.15-.29 0-.56-.03-.84-.08.56 1.74 2.19 3 4.12 3.04-1.51 1.18-3.41 1.89-5.47 1.89-.36 0-.72-.02-1.07-.07 1.95 1.25 4.26 1.98 6.75 1.98 8.1 0 12.53-6.71 12.53-12.53 0-.19-.01-.39-.02-.58.86-.62 1.6-1.4 2.19-2.28z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
