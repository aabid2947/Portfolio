import { Instagram, LinkedinIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getAboutMe } from '../../API/api'

export default function ContactSection() {
  const [socialLink,setSocialLink] = useState([])

  useEffect(() => {
    console.log("Fetching main projects")
    const fetchSocialLinks = async () => {
      try {
        const fetchedAboutme = await getAboutMe()

        if (fetchedAboutme) {
          setSocialLink(fetchedAboutme[0].socialLink)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchSocialLinks()
  }, [])

  return (
    <section className="w-full  py-16 px-8 relative ">
      {/* Dots decoration */}
      <div className="absolute left-8 top-12 opacity-20">
        <div className="grid grid-cols-3 gap-[6px]">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-[3px] h-[3px] bg-zinc-400 rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex items-center gap-2">
            <h2 className="font-mono text-[#C778DD] text-base text-lg lg:text-3xl">#contacts</h2>
            <div className="h-[1px] w-32 bg-[#C778DD]" />
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row justify-between gap-8 font-mono">
            <p className="text-[#ABB2BF] text-base max-w-md">
              I'm interested in freelance opportunities. However,
              if you have other request or question, don't hesitate to contact me
            </p>

            {/* Contact buttons */}
            <div className="flex flex-col gap-2">
              <div className="border border-[#ABB2BF] p-4">
                <a href={socialLink.instagram} target="_blank">

                <div className="flex items-center gap-2 text-[#ABB2BF]">
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">!aabid2947</span>
                </div>
                </a>
              </div>
              <div className="border border-[#ABB2BF] p-4">
                <a href={socialLink.linkedin} target="_blank" >

                <div className="flex items-center gap-2 text-[#ABB2BF]">
                  <LinkedinIcon className="w-5 h-5" />
                  <span className="text-sm">@aabid</span>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

