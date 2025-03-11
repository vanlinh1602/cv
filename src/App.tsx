import './App.css';

import { useDarkMode } from './hooks/useDarkMode';
import { config } from './libs/config';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-5xl mx-auto p-5">
        <div className="overflow-hidden rounded-xl shadow-2xl bg-white dark:bg-gray-800">
          {/* Header Section */}
          <header className="p-8 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-gray-800 dark:to-gray-900 text-white relative">
            <button
              onClick={toggleDarkMode}
              className="absolute top-4 right-4 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 ease-in-out"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-gray-700 dark:to-gray-800">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/images/avatar.jpg"
                    alt="Linh Nguyễn"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold">{config.userInfo.name}</h1>
                <p className="text-xl mt-1 opacity-90">
                  {config.userInfo.title}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
                  <a
                    href={`mailto:${config.userInfo.email}`}
                    className="flex items-center gap-2 hover:underline text-white!"
                  >
                    <span>📧</span> {config.userInfo.email}
                  </a>
                  <a
                    href={`tel:${config.userInfo.phone}`}
                    className="flex items-center gap-2 hover:underline text-white!"
                  >
                    <span>📱</span> {config.userInfo.phone}
                  </a>
                  <span className="flex items-center gap-2">
                    <span>📍</span> {config.userInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Sidebar */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
              <div className="space-y-8">
                <section>
                  <h2 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-white">
                    Connect
                  </h2>
                  <div className="flex flex-col gap-3">
                    {config.socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg 
                          bg-white hover:bg-gray-50 
                          dark:bg-gray-700 dark:hover:bg-gray-600 
                          shadow-sm transition-all duration-200 
                          border border-gray-100 dark:border-gray-600"
                      >
                        <img
                          src={link.icon}
                          alt={link.label}
                          className="w-6 h-6"
                        />
                        <span className="font-medium">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-white">
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {config.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-4 py-2 rounded-lg text-sm font-medium
                          bg-white dark:bg-gray-700
                          text-gray-700 dark:text-gray-200
                          border border-gray-100 dark:border-gray-600
                          shadow-sm"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-white">
                    Certifications
                  </h2>
                  <ul className="space-y-3">
                    {config.certifications.map((cert) => (
                      <li
                        key={cert.name}
                        className="p-4 rounded-lg 
                          bg-white dark:bg-gray-700
                          border border-gray-100 dark:border-gray-600
                          shadow-sm transition-all duration-200"
                      >
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {cert.organization}, {cert.year}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 md:col-span-2 bg-white dark:bg-gray-800">
              <section id="about" className="mb-8">
                <h2 className="text-xl font-bold pb-2 mb-4 border-b border-gray-200 dark:border-gray-700 dark:text-white">
                  About Me
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {config.userInfo.about}
                </p>
              </section>

              <section id="experience" className="mb-8">
                <h2 className="text-xl font-bold pb-2 mb-4 border-b border-gray-200 dark:border-gray-700 dark:text-white">
                  Work Experience
                </h2>

                <div className="space-y-6">
                  {config.workExperience.map((experience) => (
                    <div
                      key={experience.title}
                      className="p-5 rounded-lg 
                        bg-gray-50 dark:bg-gray-700
                        border border-gray-100 dark:border-gray-600
                        shadow-sm transition-all duration-200 dark:text-white"
                    >
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="text-lg font-bold">
                          {experience.title}
                        </h3>
                        <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300">
                          {experience.period}
                        </span>
                      </div>
                      <p className="font-medium text-gray-700 dark:text-gray-300 mb-3">
                        {experience.company}
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                        {experience.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section id="education" className="mb-8">
                <h2 className="text-xl font-bold pb-2 mb-4 border-b border-gray-200 dark:border-gray-700 dark:text-white">
                  Education
                </h2>

                <div className="space-y-4">
                  {config.education.map((edu) => (
                    <div
                      key={edu.degree}
                      className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                    >
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300">
                          {edu.period}
                        </span>
                      </div>
                      <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {edu.school}
                      </p>
                      {edu.description && (
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section id="projects" className="mb-8">
                <h2 className="text-xl font-bold pb-2 mb-4 border-b border-gray-200 dark:border-gray-700 dark:text-white">
                  Projects
                </h2>

                <div className="space-y-6">
                  {config.projects.map((project) => (
                    <div
                      key={project.name}
                      className="rounded-lg overflow-hidden
                        bg-white dark:bg-gray-700
                        border border-gray-200 dark:border-gray-600
                        shadow-sm transition-all duration-200 dark:text-white"
                    >
                      <div className="p-5">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-bold">{project.name}</h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-full text-xs font-medium
                                bg-blue-50 dark:bg-gray-600 
                                text-blue-600 dark:text-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          {project.link && (
                            <button
                              type="button"
                              onClick={() =>
                                window.open(project.link, '_blank')
                              }
                              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg text-xs! px-2! py-! text-center "
                            >
                              <span>🔗</span>
                              Link Project
                            </button>
                          )}
                          {project.git && (
                            <button
                              type="button"
                              onClick={() => window.open(project.git, '_blank')}
                              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg text-xs! px-2! py-0! text-center flex items-center gap-1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="25"
                                height="25"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                                ></path>
                              </svg>
                              Github
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <footer
            className="text-center py-6 
            bg-gray-50 dark:bg-gray-800 
            text-gray-600 dark:text-gray-400 
            border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-sm">
              © {new Date().getFullYear()} {config.userInfo.name}. All rights
              reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
