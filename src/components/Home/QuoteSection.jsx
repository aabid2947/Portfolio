import ShinyText from "../ui/ShinyText"

export function QuoteSection() {
    return (
      <div className="opacity-100 px-4 py-8 sm:px-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-end gap-">
            <div className="relative w-full max-w-md sm:max-w-lg ">
              {/* Quote marks */}
              <span className="absolute -left-3 -top-3 sm:-left-4 sm:-top-4 font-mono text-xl sm:text-2xl text-yellow-300">#</span>
              <span className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 font-mono text-xl sm:text-2xl text-yellow-300">#</span>
              
              {/* Quote content */}
              <div className="border backdrop-blur-md border-[#ABB2BF] p-6 sm:p-8">
                <p className="font-['Fira_Code'] text-[#ABB2BF] text-base sm:text-lg">
            <ShinyText text="With great power comes great electricity bill " disabled={false} speed={3} className='custom-class' />
            

                </p>
              </div>
            </div>
            
            {/* Attribution */}
            <div className="border border-[#ABB2BF] px-3 py-1 sm:px-4 sm:py-2 mt-4">
              <p className="font-['Fira_Code'] text-[#ABB2BF] text-sm sm:text-base">- Dr. Who</p>
            </div>
          </div>
        </div>
      </div>
    )
  }