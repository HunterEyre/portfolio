import Navbar from "/workspaces/portfolio/src/components/Navbar/Navbar.jsx";
import ThemeSwitcher from "/workspaces/portfolio/src/components/ThemeSwitcher/ThemeSwitcher.jsx";
import Footer from "/workspaces/portfolio/src/components/Footer/Footer.jsx";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About() {
  const navOptions = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Navbar */}
      <div className="w-full">
        <Navbar options={navOptions} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-5xl px-6 mt-12 mb-auto mx-auto">
        {/* Left: Text */}
        <div className="text-left max-w-xl lg:mr-12">
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            I’m Hunter. I live in Saratoga Springs, Utah.
          </h1>

          <p className="text-md mb-4 leading-relaxed">
            I am a data engineer going to school at Ensign College. I love the outdoors and traveling. My wife and I go to Disney often and love to see new places. 
            In my free time I enjoy reading, camping, fishing, working out, playing video games, developing, and watching movies. 
          </p>
          <p className="text-md mb-4 leading-relaxed">
            I currently work as a data engineer at Thomas Arts. I have enjoyed working with data because it is something you can measure. I love being a part of a 
            team that is constantly learning and growing. I have experience in various programming languages and technologies, including Python, SQL, Java, JavaScript, and cloud platforms like AWS. 
          </p>

          {/* Links for mobile only */}
          <div className="block lg:hidden mt-6 space-y-2 text-sm text-left">
            <p>💻 Follow me on Github-https://github.com/HunterEyre</p>
            <p>📧 Huntereyre23@gmail.com</p>
          </div>
        </div>

        {/* Right: Image and Desktop Links */}
        <div className="flex flex-col items-start mt-10 lg:mt-0">
          <div className="w-80 h-80 mb-4">
            <img
              src="/Profile.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover shadow-md rounded-2xl"
            />
          </div>

          {/* Links for desktop only */}
          <div className="hidden lg:block space-y-2 text-sm text-left">
            <p>💻 Follow me on Github-https://github.com/HunterEyre</p>
            <p>📧 Huntereyre23@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Theme Switcher */}
      <div className="fixed top-4 right-4">
        <ThemeSwitcher darkClassName="dark" />
      </div>

      {/* Footer */}
      <Footer options={navOptions} />
    </div>
  );
}
