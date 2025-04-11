import Navbar from "/workspaces/portfolio/src/components/Navbar/Navbar.jsx";
import ThemeSwitcher from "/workspaces/portfolio/src/components/ThemeSwitcher/ThemeSwitcher.jsx";
import Footer from "/workspaces/portfolio/src/Components/Footer/Footer.jsx";
import SignupWidget from "../components/SidebarWidget/SignupWidget/SignupWidget.jsx";
import WorkWidget from "../components/SidebarWidget/WorkWidget/WorkWidget.jsx";
import "./page.css";
import SkillsWidget from "../components/SidebarWidget/SkillsWidget/SkillsWidget.jsx";
import Intro from "../components/Intro/Intro.jsx";
import Articles from "../components/Articles/Articles.jsx";

export const metadata = {
  title: "Portfolio - Home",
  description: "The projects page of my portfolio.",
};

export default function Home() {
  const navOptions = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  const skills = [
    { name: "HTML", proficiency: 60, icon: "html5.png" },
    { name: "CSS", proficiency: 40, icon: "css3.png" },
    { name: "JavaScript", proficiency: 80, icon: "javascript.png" },
  ];

  const signupProps = {
    title: "Stay up to date",
    content: "Get notified when I publish something new, and unsubscribe at any time.",
  };

  const workProps = {
    title: "Work",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    experiences: [
      {
        logo: "/slack.png",
        organization: "Slack",
        jobTitle: "Software Engineer",
        startYear: 2016,
        endYear: null,
      },
      {
        logo: "/spotify.png",
        organization: "Spotify",
        jobTitle: "Software Engineer",
        startYear: 2014,
        endYear: 2015,
      },
      {
        logo: "/audible.png",
        organization: "Audible",
        jobTitle: "Software Engineer",
        startYear: 2012,
        endYear: 2013,
      },
      {
        logo: "/microsoft.png",
        organization: "Microsoft",
        jobTitle: "Software Engineer",
        startYear: 2010,
        endYear: 2011,
      },
    ],
  };

  return (
    <div className="relative min-h-screen">
      <Navbar options={navOptions} />
      <ThemeSwitcher darkClassName="dark" />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        {/* Intro always on top */}
        <Intro />

        {/* Grid Layout: Articles + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left: Articles (2/3 width) */}
          <div className="lg:col-span-2 space-y-12">
            <Articles />
          </div>

          {/* Right: Sidebar Widgets (1/3 width) */}
          <div className="space-y-6">
            <SignupWidget {...signupProps} />
            <WorkWidget {...workProps} />
            <SkillsWidget
              title={"Skills"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
              skills={skills}
            />
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer options={navOptions} />
    </div>
  );
}
