import About from "@/components/about/About"
import Contact from "@/components/contact/Contact"
import Hero from "@/components/home/Hero"
import Skills from "@/components/skills/Skills"

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      {/* <ScrollSection /> */}
      <Contact />
    </div>
  )
}

export default page