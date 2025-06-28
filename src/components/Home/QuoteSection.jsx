import ShinyText from "../ui/ShinyText"

export function QuoteSection() {
    return (
      <div className="opacity-100  px-8 py-16  ">
        <div className="  mx-auto max-w-7xl">
          <div className="flex flex-col items-end gap-">
            <div className="relative w-full max-w-lg  ">
              {/* Quote marks */}
              <span className="absolute -left-4 -top-4 font-mono text-2xl text-yellow-300">#</span>
              <span className="absolute -bottom-4 -right-4 font-mono text-2xl text-yellow-300">#</span>
              
              {/* Quote content */}
              <div className="border backdrop-blur-md border-[#ABB2BF] p-8">
                <p className="font-['Fira_Code'] text-[#ABB2BF]">
            <ShinyText text="With great power comes great electricity bill " disabled={false} speed={3} className='custom-class' />
            

                </p>
              </div>
            </div>
            
            {/* Attribution */}
            <div className="border border-[#ABB2BF] px-4 py-2">
              <p className="font-['Fira_Code'] text-[#ABB2BF]">- Dr. Who</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  