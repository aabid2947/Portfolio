import Img from '../../assets/Group 50.png';


export default function AboutSection() {
    return (
      <div className="  min-h-[400px] relative overflow-hidden px-8 py-8 md:px-8 ">
        {/* Top-left dots pattern */}
        {/* <div className="absolute left-0 top-0 w-24 h-24 opacity-20">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div key={`top-left-${i}`} className="w-1 h-1 bg-gray-400 rounded-full" />
            ))}
          </div>
        </div> */}
  
        {/* Bottom-right dots pattern */}
        <div className="absolute right-12 bottom-12 w-24 h-24 opacity-20">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div key={`bottom-right-${i}`} className="w-1 h-1 bg-gray-400 rounded-full" />
            ))}
          </div>
        </div>
  
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-purple-400 text-lg font-mono">#about-me</h2>
            
            <div className="space-y-4 text-gray-300 ">
              <p className="text-xl">Hello, I&apos;m Elias!</p>
              
              <p className="text-sm leading-relaxed">
                I&apos;m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                scratch and raise them into modern user-friendly web experiences.
              </p>
              
              <p className="text-sm leading-relaxed">
                Transforming my creativity and knowledge into websites has been my passion for over a year. I have
                been helping various clients to establish their presence online. I always strive to learn about the
                newest technologies and frameworks.
              </p>
  
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
    )
  }
