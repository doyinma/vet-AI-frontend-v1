import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faNotesMedical, faRobot, faCalendarAlt, faClock, faBrain, faPaw, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      <Head>
        <title>Vet Assistant App</title>
        <meta name="description" content="Interactive virtual veterinary service." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Comprehensive Care</span>
                <span className="block text-indigo-600 xl:inline">&nbsp;for Your Pets</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Get instant veterinary advice and support powered by AI, available 24/7.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="/login" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Start Chatting
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-5 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose Our Vet Assistant App?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
              <FontAwesomeIcon icon={faClock} className="text-4xl mb-2 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Our services are available round the clock to ensure your pet always has support when needed.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
              <FontAwesomeIcon icon={faBrain} className="text-4xl mb-2 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Driven Advice</h3>
              <p className="text-gray-600">Leverage cutting-edge AI technology for accurate and timely health advice for your pets.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
              <FontAwesomeIcon icon={faPaw} className="text-4xl mb-2 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Diverse Pet Care</h3>
              <p className="text-gray-600">Our app caters to a wide range of animals, ensuring specialized care for each.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-4xl mb-2 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Emergency Support</h3>
              <p className="text-gray-600">Quick access to emergency procedures and guidance in critical situations.</p>
            </div>
          </div>
        </div>
      </div>


      {/* How it works Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">
            How It Works
          </h2>
          <div className="mt-6 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Step 1 */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <FontAwesomeIcon icon={faUserPlus} className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Step 1: Sign Up</h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Register on our platform to start using our veterinary services.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <FontAwesomeIcon icon={faNotesMedical} className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Step 2: Input Symptoms</h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Enter details about your pet's symptoms through our user-friendly interface.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <FontAwesomeIcon icon={faRobot} className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Step 3: Receive Advice</h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Get instant, AI-powered advice tailored to your pet's specific needs.
                </p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Step 4: Connect & Book</h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Connect with a real veterinarian and book appointments on your behalf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
