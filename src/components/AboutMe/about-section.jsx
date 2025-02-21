import HeroImage from "../../assets/HeroSectionImage.png"

export default function AboutSection() {
  return (
    <section className="  text-gray-300 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-mono mb-6 text-white">/about-me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="font-mono tracking-wider text-md">Hello, I&apos;m Aabid!</p>
            <p className="font-mono  tracking-wider  text-md">
              I&apos;m a self-taught front-end developer based in [city]. Focused on delivering responsive web
              applications that are both user-friendly and aesthetically pleasing.
            </p>
            <p className="font-mono tracking-wider text-md">
              Currently, I&apos;m working on my portfolio and I love exploring new technologies and frameworks.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-4 -top-4 w-64 h-64 bg-dots-pattern opacity-20" />
            <img
              src={HeroImage}
              alt="Decorative tech pattern"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

