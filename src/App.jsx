import "./App.css";

// Images
import logo from "./assets/logo.svg";
import illustration from "./assets/illustration-mockups.svg";

// Icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const App = () => {
  return (
    <div className="font-open-sans min-h-screen bg-violet bg-mobile md:bg-desktop bg-no-repeat bg-contain md:grid md:place-items-center">
      <main className="mx-10 md:mx-16">
        <header>
          <a href="#" className="mt-10 inline-block">
            <img src={logo} alt="logo image" className="w-32 md:w-52" />
            <span className="sr-only">Logo</span>
          </a>
        </header>

        <section className="mt-16 md:mt-9 md:flex md:justify-between md:space-x-12">
          <div className="md:flex-1 overflow-hidden">
            <img
              src={illustration}
              className="w-full h-full object-contain"
              alt="illustration"
            />
          </div>

          <div className="text-center mt-16 md:mt-10 md:text-left">
            <h1 className="font-poppins font-bold text-2xl text-white md:text-[2.3rem] max-w-md md:leading-[1.5]">
              Build The Community Your Fans Will Love
            </h1>
            <p className="font-open-sans text-white text-md mt-4 md:max-w-lg">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="bg-white rounded-full px-16 py-2 font-poppins font-thin mt-6 text-violet text-sm md:py-3.5 md:text-lg shadow-lg shadow-zinc-700 hover:bg-soft-magenta hover:text-white transition duration-300">
              Register
            </button>
          </div>
        </section>

        <footer className="flex space-x-4 justify-center mt-20 md:mt-0 md:justify-end">
          <a
            href="#"
            className="inline-block text-white border border-white p-1.5 md:p-2.5 rounded-full hover:text-soft-magenta hover:border-soft-magenta transition duration-300"
          >
            <FaFacebookF className="h-3 w-3 md:h-5 md:w-5" />
            <span className="sr-only">facebook link</span>
          </a>
          <a
            href="#"
            className="inline-block text-white border border-white p-1.5 md:p-2.5 rounded-full hover:text-soft-magenta hover:border-soft-magenta transition duration-300"
          >
            <FaTwitter className="h-3 w-3 md:h-5 md:w-5" />
            <span className="sr-only">twitter link</span>
          </a>
          <a
            href="#"
            className="inline-block text-white border border-white p-1.5 md:p-2.5 rounded-full hover:text-soft-magenta hover:border-soft-magenta transition duration-300"
          >
            <FaInstagram className="h-3 w-3 md:h-5 md:w-5" />
            <span className="sr-only">instagram link</span>
          </a>
        </footer>
      </main>
    </div>
  );
};

export default App;
