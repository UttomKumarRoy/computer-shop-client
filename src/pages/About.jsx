
const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to Our Computer Shop
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide the best computers and accessories to meet all your needs.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap justify-center">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1112 0v2a4 4 0 014 4v5a4 4 0 01-4 4H4a4 4 0 01-4-4v-5a4 4 0 014-4zm2-2v2h8V6a4 4 0 10-8 0z"/></svg>
                    Your trusted technology partner
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">Our Mission</div>
                  <p className="text-gray-700 text-base">
                    Our mission is to provide the best products and services to our customers. We aim to be the most trusted and reliable computer shop in the community.
                  </p>
                </div>
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar of our team member"/>
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">Uttom Roy</p>
                    <p className="text-gray-600">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm w-full lg:max-w-full lg:flex mt-6 lg:mt-0 lg:ml-6">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1112 0v2a4 4 0 014 4v5a4 4 0 01-4 4H4a4 4 0 01-4-4v-5a4 4 0 014-4zm2-2v2h8V6a4 4 0 10-8 0z"/></svg>
                    Quality and Service
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">Our Vision</div>
                  <p className="text-gray-700 text-base">
                    We envision a world where technology is seamlessly integrated into every aspect of life, providing endless possibilities and opportunities for everyone.
                  </p>
                </div>
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar of our team member"/>
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">Parul Rani</p>
                    <p className="text-gray-600">Chief Technology Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-xl text-gray-700">
              Visit us at Dhaka, bangladesh, or call us at +880170865437.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
