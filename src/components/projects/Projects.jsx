import { useState } from "react";
// @ts-ignore
import react from "../../assets/images/react.png";
// @ts-ignore
import node from "../../assets/images/node.jpg";
//@ts-ignore
import php from "../../assets/images/php.png";
import "./projects.css";

const MY_PROJECTS = [
  {
    id: 1,
    image: react,
    title: "React Project",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda natus quaerat ipsa nihil amet numquam! Rerum molestiae, consequatur repudiandae dolorem dignissimos impedit officiis ad ipsam.",
    category: "react",
    tags: "#React",
    link: "https://react.dev/",
    githubLink: "https://github.com/NajiLameh",
  },
  {
    id: 2,
    image: react,
    title: "React Native Project",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda natus quaerat ipsa nihil amet numquam! Rerum molestiae, consequatur repudiandae dolorem dignissimos impedit officiis ad ipsam.",
    category: "react-native",
    tags: "#React Native",
    link: "https://reactnative.dev/",
    githubLink: "https://github.com/NajiLameh",
  },
  {
    id: 3,
    image: node,
    title: "Node Project",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda natus quaerat ipsa nihil amet numquam! Rerum molestiae, consequatur repudiandae dolorem dignissimos impedit officiis ad ipsam.",
    category: "node",
    tags: "#Node & Express",
    link: "https://nodejs.org/en",
    githubLink: "https://github.com/NajiLameh",
  },
  {
    id: 4,
    image: php,
    title: "PHP Project",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda natus quaerat ipsa nihil amet numquam! Rerum molestiae, consequatur repudiandae dolorem dignissimos impedit officiis ad ipsam.",
    category: "php",
    tags: "#PHP",
    link: "https://www.php.net/",
    githubLink: "https://github.com/NajiLameh",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(MY_PROJECTS);

  const handleProjectFilter = (category) => {
    if (category === "all") {
      setFilteredProjects(() => MY_PROJECTS);
    } else {
      setFilteredProjects(() => {
        const _filterdProjects = MY_PROJECTS.filter(
          (project) => project.category === category
        );
        return _filterdProjects;
      });
    }
    setActiveTab(category);
  };
  return (
    <section id="projects" className="projects flex">
      <div className="left-section flex">
        <button
          className={activeTab === "all" ? "active" : undefined}
          onClick={() => handleProjectFilter("all")}
        >
          All Projects
        </button>
        <button
          className={activeTab === "react" ? "active" : undefined}
          onClick={() => handleProjectFilter("react")}
        >
          React
        </button>
        <button
          className={activeTab === "react-native" ? "active" : undefined}
          onClick={() => handleProjectFilter("react-native")}
        >
          React Native
        </button>
        <button
          className={activeTab === "node" ? "active" : undefined}
          onClick={() => handleProjectFilter("node")}
        >
          Node & Express
        </button>
        <button
          className={activeTab === "php" ? "active" : undefined}
          onClick={() => handleProjectFilter("php")}
        >
          PHP
        </button>
      </div>
      <div className="right-section flex">
        {filteredProjects.map((project) => (
          <article key={project.id} className="card">
            <img src={project.image} alt="" />
            <div className="box">
              <h1 className="title">{project.title}</h1>
              <p className="sub-title">{project.description}</p>
              <div className="tag-and-icon flex">
                <div className="tags">{project.tags}</div>
                <div className="links flex">
                  {project.link && (
                    <a
                      className="icon-link"
                      href={project.link}
                      target="_blank"
                    />
                  )}
                  {project.githubLink && (
                    <a
                      className="icon-github"
                      href={project.githubLink}
                      target="_blank"
                    />
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
        {filteredProjects.length < 1 && (
          <p className="project-alt">No Projects Yet</p>
        )}
      </div>
    </section>
  );
}
