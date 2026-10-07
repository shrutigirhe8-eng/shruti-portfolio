import { useEffect, useState } from 'react'
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Coffee,
  CodeXml,
  FileText,
  FolderKanban,
  Globe,
  Mail,
  Network,
  PanelsTopLeft,
  Phone,
} from 'lucide-react'
import {
  SiApachejmeter,
  SiC,
  SiCplusplus,
  SiGit,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJunit5,
  SiMysql,
  SiPostman,
  SiPostgresql,
  SiReact,
  SiSpring,
  SiTypescript,
} from 'react-icons/si'
import assessmentPortalImage from './assets/EAP.png'
import endavaTalentSphereImage from './assets/ETS.png'
import healthSyncImage from './assets/HealthSync.png'
import resumeUrl from './assets/Shruti_Sunil_Girhe_Resume.pdf'
import './App.css'

const greeting = "Hi, I'm Shruti"
const role = 'Full Stack Developer'
const greetingCharacterCount = Array.from(greeting).length
const roleStartIndex = greetingCharacterCount + 2
const typewriterCharacters = Array.from(`${greeting}👋\n${role}`)
const skillGroups = [
  { name: 'Language', skills: ['Java', 'C', 'C++'] },
  { name: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'] },
  { name: 'Backend', skills: ['Java', 'Spring Boot', 'REST API'] },
  { name: 'Database', skills: ['MySQL', 'PostgreSQL'] },
  { name: 'Testing', skills: ['JUnit', 'Mockito'] },
  { name: 'Tools', skills: ['Postman', 'GitLab', 'Git', 'JMeter'] },
  { name: 'Other', skills: ['Microservices', 'Reactive Programming'] },
]
const technologies = [...new Set(skillGroups.flatMap(({ skills }) => skills))]
const technologyIcons = {
  Java: Coffee,
  C: SiC,
  'C++': SiCplusplus,
  HTML: SiHtml5,
  CSS: PanelsTopLeft,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Spring Boot': SiSpring,
  'REST API': Network,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  JUnit: SiJunit5,
  Mockito: Code2,
  Postman: SiPostman,
  GitLab: SiGitlab,
  Git: SiGit,
  JMeter: SiApachejmeter,
  Microservices: Network,
  'Reactive Programming': Activity,
}
const projects = [
  {
    title: 'HealthSync',
    image: healthSyncImage,
    subtitle: 'Full Stack Healthcare & Insurance Application',
    description: [
      'A full-stack healthcare and insurance platform designed to streamline patient, hospital, doctor, and insurance workflows.',
      'Developed patient and hospital registration, insurance plan purchases, doctor appointments, and end-to-end insurance claim processing.',
      'Added automated patient-record matching and agent-based claim review workflows for approving or rejecting claims.',
    ],
    techStack: 'Java · Spring Boot · React · PostgreSQL · REST APIs',
    highlight: 'Supported 2,000+ users and contributed to a 33% improvement in task efficiency.',
  },
  {
    title: 'Assessment Portal',
    image: assessmentPortalImage,
    subtitle: 'Enterprise Assessment Platform',
    description: [
      'An enterprise assessment platform for internal employees and external candidates.',
      'Contributed role-based workflows for Super Admins, Recruiters, Admins, Users, and Maintainers, plus assessment assignments and candidate-link generation.',
      'Worked on Kafka-based concurrent submission processing and secure access using Spring Security.',
    ],
    features: [
      'Role-based access',
      'Assessment assignment',
      'Candidate links',
      'Concurrent submission processing',
    ],
  },
  {
    title: 'Endava Talent Sphere',
    image: endavaTalentSphereImage,
    subtitle: 'Employee Appraisal Management',
    description: [
      'A microservices-based employee appraisal platform for organizational cycles and hierarchical reviews.',
      'Developed appraisal cycles, employee assignments, and multi-stage reviews involving employees, managers, compensation reviewers, career coaches, and senior management.',
      'Applied organizational hierarchy rules to reviewer assignments and appraisal progression.',
    ],
    highlight: 'Supported appraisal processing involving 4,000+ employee appraisal records.',
  },
]

function App() {
  const [activeSkillCategory, setActiveSkillCategory] = useState(null)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [projectsPaused, setProjectsPaused] = useState(false)
  const [typedCharacterCount, setTypedCharacterCount] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? typewriterCharacters.length
      : 0,
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    let characterIndex = 0
    const typingTimer = window.setInterval(() => {
      characterIndex += 1
      setTypedCharacterCount(characterIndex)

      if (characterIndex === typewriterCharacters.length) {
        window.clearInterval(typingTimer)
      }
    }, 85)

    return () => window.clearInterval(typingTimer)
  }, [])

  useEffect(() => {
    if (
      projectsPaused ||
      prefersReducedMotion
    ) {
      return undefined
    }

    const carouselTimer = window.setInterval(() => {
      setActiveProjectIndex((index) => (index + 1) % projects.length)
    }, 5000)

    return () => window.clearInterval(carouselTimer)
  }, [prefersReducedMotion, projectsPaused])

  const typedGreeting = typewriterCharacters
    .slice(0, Math.min(typedCharacterCount, greetingCharacterCount))
    .join('')
  const typedRole = typewriterCharacters
    .slice(roleStartIndex, typedCharacterCount)
    .join('')
  const displayedProjects = prefersReducedMotion
    ? projects
    : [projects[activeProjectIndex]]

  return (
    <>
      <header className="site-header">
        <a className="identity" href="#" aria-label="Shruti Girhe portfolio home">
          <span className="identity-name">shruti.girhe</span>
          <span className="identity-label">portfolio</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#skills">
            <CodeXml aria-hidden="true" size={16} strokeWidth={1.75} />
            Skills
          </a>
          <a href="#project">
            <FolderKanban aria-hidden="true" size={16} strokeWidth={1.75} />
            Project
          </a>
          <a href="#experience">
            <BriefcaseBusiness aria-hidden="true" size={16} strokeWidth={1.75} />
            Experience
          </a>
          <a className="contact-link" href="#contact">
            <Mail aria-hidden="true" size={16} strokeWidth={1.75} />
            Contact
          </a>
        </nav>
      </header>

      <main className="intro">
        <h1 aria-label={`${greeting}. ${role}`}>
          <span className="intro-greeting" aria-hidden="true">
            <span
              className={`greeting-text${typedCharacterCount < greetingCharacterCount ? ' typing-cursor' : ''}`}
            >
              {typedGreeting}
            </span>
            {typedCharacterCount > greetingCharacterCount && (
              <span className="wave-icon">👋</span>
            )}
          </span>
          <span
            className={`intro-role${typedCharacterCount >= roleStartIndex ? ' typing-cursor' : ''}`}
            aria-hidden="true"
          >
            {typedRole}
          </span>
        </h1>
        <p>
          I build full-stack applications, solve real-world problems, and turn
          ideas into working products.
        </p>
        <div className="intro-actions">
          <a
            className="resume-button"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText aria-hidden="true" size={18} strokeWidth={1.75} />
            Resume
          </a>
          <a className="project-button" href="#project">
            <FolderKanban aria-hidden="true" size={18} strokeWidth={1.75} />
            Project
          </a>
        </div>
      </main>

      <section className="skills-section" id="skills" aria-labelledby="skills-title">
        <div className="skills-grid">
          <h2 className="skills-title" id="skills-title">
            <span className="skills-mark" aria-hidden="true">
              <Code2 size={21} strokeWidth={2} />
            </span>
            My Skills
          </h2>
          <p className="skills-summary">
            I have a strong foundation in full-stack development, with skills
            in building responsive user interfaces, developing backend
            applications and REST APIs, working with databases, and integrating
            frontend and backend systems. I enjoy learning new technologies,
            solving problems, and writing clean, efficient, and maintainable
            code.
          </p>

          <h2 className="skill-category-title">
            Skills <ArrowRight aria-hidden="true" size={20} strokeWidth={1.5} />
          </h2>

          <div className="skill-categories" aria-label="Skill categories">
            {skillGroups.map(({ name }) => (
              <button
                className={`skill-category${activeSkillCategory === name ? ' is-active' : ''}`}
                type="button"
                aria-pressed={activeSkillCategory === name}
                key={name}
                onMouseEnter={() => setActiveSkillCategory(name)}
                onMouseLeave={() => setActiveSkillCategory(null)}
                onFocus={() => setActiveSkillCategory(name)}
                onBlur={() => setActiveSkillCategory(null)}
              >
                {name}
              </button>
            ))}
          </div>

          <h2 className="work-stack-title" id="work-stack-title">
            Tech Stack <ArrowRight aria-hidden="true" size={20} strokeWidth={1.5} />
          </h2>

          <ul
            className={`work-stack${activeSkillCategory ? ' has-active-category' : ''}`}
            aria-labelledby="work-stack-title"
          >
            {technologies.map((technology) => {
              const Icon = technologyIcons[technology]
              const isHighlighted = skillGroups.some(
                (group) =>
                  group.name === activeSkillCategory &&
                  group.skills.includes(technology),
              )

              return (
                <li
                  className={`work-stack-item${isHighlighted ? ' is-highlighted' : ''}`}
                  key={technology}
                >
                  <Icon className="work-stack-icon" aria-hidden="true" />
                  <span>{technology}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="projects-section" id="project" aria-labelledby="projects-title">
        <h2 className="projects-title" id="projects-title">
          Projects
          <span className="skills-mark" aria-hidden="true">
            <FolderKanban size={20} strokeWidth={1.8} />
          </span>
        </h2>
        <div
          className="project-viewport"
          onMouseEnter={() => setProjectsPaused(true)}
          onMouseLeave={() => setProjectsPaused(false)}
          onFocusCapture={() => setProjectsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setProjectsPaused(false)
            }
          }}
        >
          {displayedProjects.map((project) => (
            <article
              className="project-card"
              key={prefersReducedMotion ? project.title : 'active-project'}
            >
              <div className="project-card-content" key={project.title}>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <ul className="project-description">
                    {project.description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {project.techStack && (
                    <p className="project-detail">
                      <strong>Tech Stack:</strong> {project.techStack}
                    </p>
                  )}
                  {project.features && (
                    <div className="project-detail">
                      <strong>Key Features:</strong>
                      <ul className="project-features">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.highlight && (
                    <p className="project-detail project-highlight">
                      <strong>Highlight:</strong> {project.highlight}
                    </p>
                  )}
                </div>
                <div className="project-image-frame">
                  <img
                    className="project-image"
                    src={project.image}
                    alt={`${project.title} project preview`}
                  />
                </div>
              </div>
              </article>
          ))}
        </div>
      </section>

      <section
        className="experience-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <h2 className="projects-title" id="experience-title">
          Experience
          <span className="skills-mark" aria-hidden="true">
            <BriefcaseBusiness size={20} strokeWidth={1.8} />
          </span>
        </h2>
        <div className="experience-timeline">
          <span className="experience-flow" aria-hidden="true" />
          <article className="experience-entry">
            <p className="experience-dates">
              <time dateTime="2025-08">Aug 2025</time>
              <span aria-hidden="true">–</span>
              <time dateTime="2026-09">Sep 2026</time>
            </p>
            <div className="experience-details">
              <h3>Full-time Developer</h3>
              <p className="experience-progression">
                Junior Developer
                <ArrowRight aria-hidden="true" size={15} />
                Developer
              </p>
              <p>Endava Solutions Private Limited</p>
            </div>
          </article>
          <article className="experience-entry">
            <p className="experience-dates">
              <time dateTime="2025-01">Jan 2025</time>
              <span aria-hidden="true">–</span>
              <time dateTime="2025-06">Jun 2025</time>
            </p>
            <div className="experience-details">
              <h3>Internship</h3>
              <p>Endava Solutions Private Limited</p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-card">
          <div className="contact-copy">
            <p className="contact-eyebrow">Get in touch</p>
            <h2 id="contact-title">Let&apos;s build something meaningful.</h2>
            <p>
              Have a project or opportunity in mind? I&apos;d be happy to hear
              from you.
            </p>
            <a className="contact-email" href="mailto:shrutigirhe8@gmail.com">
              Send me an email
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>

          <div className="contact-details" aria-label="Contact details">
            <a href="mailto:shrutigirhe8@gmail.com">
              <Mail aria-hidden="true" size={19} />
              <span>
                <small>Email</small>
                <strong>shrutigirhe8@gmail.com</strong>
              </span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a href="tel:+917249263730">
              <Phone aria-hidden="true" size={19} />
              <span>
                <small>Phone</small>
                <strong>+91 72492 67304</strong>
              </span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a
              href="https://linkedin.com/in/shruti-girhe-248993263"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe aria-hidden="true" size={19} />
              <span>
                <small>LinkedIn</small>
                <strong>Connect with Shruti</strong>
              </span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>Designed by <strong>Shruti Girhe</strong></p>
        <p>Built with React, Vite, CSS, Lucide React, and React Icons.</p>
      </footer>
    </>
  )
}

export default App
