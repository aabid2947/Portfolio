import Img from '../../assets/Group 50.png';
import { Link, useLocation } from "react-router-dom";


export default function AboutSection() {
  return (
    <div className="  min-h-[400px] relative overflow-hidden px-8 py-8 md:px-8 ">


      {/* Bottom-right dots pattern */}
      <div className="absolute right-12 bottom-12 w-24 h-24 opacity-20">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={`bottom-right-${i}`} className="w-1 h-1 bg-gray-400 rounded-full" />
          ))}
        </div>
      </div>
      <div className='w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden '>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center font-mono">
          <div className="space-y-6">
            <div className='flex items-center'>

              <h2 className="text-purple-400 font-mono text-lg lg:text-3xl ">#about-me</h2>
              <div className="m-1 h-[1px] w-16 sm:w-24 md:w-32 bg-[#C778DD]" />
            </div>


            <div className="space-y-4 text-gray-300 ">
              <p className="text-xl">Hello, I&apos;m Aabid!</p>

              <p className="text-sm leading-relaxed">
                I&apos;m a self-taught Full Stack developer based in Delhi, India. I can develop responsive websites from
                scratch and raise them into modern user-friendly web experiences.
              </p>

              <p className="text-sm leading-relaxed">
                Transforming my creativity and knowledge into websites has been my passion for over a year. I have
                been helping various clients to establish their presence online. I always strive to learn about the
                newest technologies and frameworks.
              </p>

              <Link to="/about-me">
                <button className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <span>Read more</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </Link>

            </div>
          </div>

          <div className="relative h-[500px] hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(58, 53, 53, 0)] to-transparent z-10" />
            <img
              src={Img}
              alt="Developer in hoodie"
              className="h-full w-full object-contain object-center opacity-80"
            />
            {/* Additional dots pattern near the image */}
            <div className="absolute right-24 top-24 w-24 h-24 opacity-20">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={`image-dots-${i}`} className="w-1 h-1 bg-gray-400 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
