import Setting from "@/components/Setting"
import About from "@/components/about/About"
import Hero from "@/components/home/Hero"
import Projects from "@/components/projects/Projects"
import Skills from "@/components/skills/Skills"

const page = () => {
  return (
    <div>
      <Setting />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <ScrollSection /> */}
      {/* <Contact /> */}
    </div>
  )
}

export default page