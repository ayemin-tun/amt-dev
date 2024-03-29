import About from "@/components/about/About"
import Contact from "@/components/contact/Contact"
import Hero from "@/components/home/Hero"
import Projects from "@/components/projects/Projects"
import Skills from "@/components/skills/Skills"

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <ScrollSection /> */}
      <Contact />
    </div>
  )
}

export default page