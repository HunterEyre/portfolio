import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Intro() {
  return (
    <section className="mb-10">
      <div className="flex items-center mb-4">
        <img src="/Profile.jpg" alt="Profile" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h1 className="text-2xl font-semibold">Software/data engineer, husband, and believer</h1>
        </div>
      </div>

      {/* Longer intro content */}
      <p className="max-w-2xl mb-6 leading-relaxed">
        I am a data engineer with a passion for building scalable data pipelines and systems. I love working with
        data and using it to solve real-world problems. I have experience in various programming languages and
        technologies, including Python, SQL, and cloud platforms like AWS and Azure. I am always eager to learn new
        technologies and improve my skills. In my free time, I enjoy reading, camping, fishing, working out, and spending time with my family.
      </p>

      {/* Social icons */}
      <div className="flex gap-4 text-xl text-gray-500">
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-500"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-500"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
