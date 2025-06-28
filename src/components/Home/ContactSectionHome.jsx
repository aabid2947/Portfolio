import React, { useEffect, useState } from "react";
import { Instagram, LinkedinIcon } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { getAboutMe } from "../../API/api";

export default function ContactSection() {
  const [socialLink, setSocialLink] = useState({ instagram: "#", linkedin: "#" });

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const res = await getAboutMe();
        if (res?.[0]?.socialLink) setSocialLink(res[0].socialLink);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSocialLinks();
  }, []);

  return (
    <section className="text-white mb-6">
      <div className="container mx-auto px-8 text-center space-y-8">
        <h2 className="font-mono text-yellow-300 text-sm lg:text-6xl">
          Lets Work Together!
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
          I’m interested in <span className="highlight-tag">freelance opportunities</span>.  
          If you have other requests or questions, don’t hesitate to get in touch!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href={socialLink.instagram} target="_blank" rel="noreferrer">
            <GlowButton variant="cached">
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </GlowButton>
          </a>
          <a href={socialLink.linkedin} target="_blank" rel="noreferrer">
            <GlowButton variant="cached">
              <LinkedinIcon className="w-5 h-5 mr-2" />
              LinkedIn
            </GlowButton>
          </a>
        </div>
      </div>
    </section>
  );
}
