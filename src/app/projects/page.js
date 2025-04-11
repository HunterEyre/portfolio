import Navbar from "/workspaces/portfolio/src/components/Navbar/Navbar.jsx";
import ThemeSwitcher from "/workspaces/portfolio/src/components/ThemeSwitcher/ThemeSwitcher.jsx";
import Footer from "/workspaces/portfolio/src/components/Footer/Footer.jsx";
import ProjectCard from "/workspaces/portfolio/src/components/ProjectCards/ProjectCard.jsx";
import "./page.css";

export const metadata = {
  title: "Portfolio - Projects",
  description: "Home page of my portfolio.",
};

export default function Projects() {
  const navOptions = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  const projects = [
    {
      logo: "/EnsignLogo.png",
      name: "Company",
      content: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://example.com/project-one"
    },
    {
      logo: "/EnsignLogo.png",
      name: "Company",
      content: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://example.com/project-one"
    },
    {
      logo: "/EnsignLogo.png",
      name: "Company",
      content: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://example.com/project-one"
    },
    {
      logo: "/EnsignLogo.png",
      name: "Company",
      content: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://example.com/project-one"
    },
    {
      logo: "/EnsignLogo.png",
      name: "Company",
      content: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://example.com/project-one"
    },
    {
      logo: "/EnsignLogo.png",
      name: "Company",
      content: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://example.com/project-one"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <div className="w-full">
        <Navbar options={navOptions} />
      </div>

      {/* Theme Switcher */}
      <div className="fixed top-4 right-4">
        <ThemeSwitcher darkClassName="dark" />
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        {/* Title and description */}
        <div class="title-container">
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Things I’ve made trying to put my dent in the universe.
          </h1>
          <p style={{ marginBottom: "40px" }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          </p>
        </div>
        {/* Project cards*/}
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", justifyContent: "center" }}>
            {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer options={navOptions} />

    </div>
  );
};
