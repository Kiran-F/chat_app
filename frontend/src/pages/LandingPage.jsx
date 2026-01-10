import { Link } from 'react-router-dom';
import HeroImage from './assets/hero-illustration.png' // ← add your illustration image here

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-yellow-50">
      {/* Navbar */}
      <nav className="w-full py-5 px-8 flex justify-between items-center border-b border-gray-100 bg-white">
        <div className="flex items-center space-x-2">
          <span className="bg-black text-white font-bold text-xl px-3 py-1 rounded">S</span>
          <Link to="/" className="text-xl font-semibold text-gray-900">Simplr</Link>
        </div>

        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#product" className="hover:text-black">Product</a>
          <a href="#partner" className="hover:text-black">Partner with us</a>
          <a href="#contact" className="hover:text-black">Contact us</a>
          <a href="#careers" className="hover:text-black">Careers</a>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-black font-medium">Login</Link>
          <Link
            to="/signup"
            className="bg-black text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            SIGN UP
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between flex-1 px-8 md:px-16 lg:px-24 py-16">
        {/* Left content */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Stay Connected,<br /> Anytime, Anywhere
          </h1>
          <p className="text-lg text-gray-600">
            Chat effortlessly with friends and family — no matter the distance.
          </p>
          <div className="pt-4">
            <Link to="/login" className="border-2 rounded-md px-5 py-1.5 text-gray-700 hover:text-black font-medium">Login</Link>
            <Link
            to="/signup"
            className="bg-black text-white mx-3 px-5 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Signup
          </Link>
          </div>
        </div>

        {/* Right illustration */}
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={HeroImage}
            alt="Illustration of chatting person"
            className="w-full max-w-md"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
