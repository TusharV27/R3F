import "./GuestForm.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
export default function GuestForm() {
  return (
    //     <div class="bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center min-h-screen">
    //       <div
    //         class="h-full w-[80%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100
    //   md:max-w-md p-6"
    //       >
    //         <h2 class="text-2xl font-bold mb-6 text-center">
    //           Welcome To Megascale Inaguration
    //         </h2>
    //         <form>
    //           <div class="mb-4">
    //             <label for="name" class="block text-sm font-medium text-gray-700">
    //               Name
    //             </label>
    //             <input
    //               type="text"
    //               id="name"
    //               name="name"
    //               class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //             />
    //           </div>
    //           {/* <div class="mb-4">
    //             <label for="email" class="block text-sm font-medium text-gray-700">
    //               Email
    //             </label>
    //             <input
    //               type="email"
    //               id="email"
    //               name="email"
    //               class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //             />
    //           </div> */}
    //           <div class="mb-4">
    //             <label for="phone" class="block text-sm font-medium text-gray-700">
    //               Whatsapp Number
    //             </label>
    //             <input
    //               type="tel"
    //               id="phone"
    //               name="phone"
    //               class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //             />
    //           </div>
    //           {/* <div class="mb-4">
    //             <label
    //               for="message"
    //               class="block text-sm font-medium text-gray-700"
    //             >
    //               Message
    //             </label>
    //             <textarea
    //               id="message"
    //               name="message"
    //               rows="4"
    //               class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //             ></textarea>
    //           </div> */}
    //           <div class="flex items-center justify-center mt-6">
    //             <button
    //               type="submit"
    //               class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    //             >
    //               Submit
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login">
            <div class="login__field">
              <FaUserAlt class="login__icon" />
              <input type="text" class="login__input" placeholder="Name" />
            </div>
            <div class="login__field">
              <IoLogoWhatsapp class="login__icon" />
              <input
                type="tel"
                class="login__input"
                placeholder="Whatsapp Number"
              />
            </div>
            <button class="button login__submit">
              <span class="button__text">Submit</span>
              <FaChevronRight class="button__icon" />
            </button>
          </form>
          <div class="social-login">
            <h3 class="text-xl">
              <a href="https://www.megascale.in/">Megascale</a>
            </h3>

            <h3 class="text-lg">
              <a href="sifremiunuttum.php">Ajay Devmurari</a>
            </h3>
            <div class="social-icons">
              <a
                href="https://www.instagram.com/_megascale_/"
                class="social-login__icon fab fa-instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/megascalesurat/"
                class="social-login__icon fab fa-facebook"
              >
                <FaSquareFacebook />
              </a>
              <a
                href="https://in.linkedin.com/company/megascale"
                class="social-login__icon fab fa-twitter"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}
