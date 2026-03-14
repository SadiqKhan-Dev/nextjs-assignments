import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";

export default function Home() {
  return (
    <main className="bg-[#03030a] text-white">
      <Navbar />
      <Intro />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <ContactMe />

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-white/10 bg-[#03030a]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>
            Built with{" "}
            <span className="text-purple-400 font-semibold">Next.js</span> &{" "}
            <span className="text-cyan-400 font-semibold">Framer Motion</span>
          </span>
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
            © 2025 Sadiq Khan
          </span>
          <span>Designed &amp; Developed by Sadiq Khan</span>
        </div>
      </footer>
    </main>
  );
}
