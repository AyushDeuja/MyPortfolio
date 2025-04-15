import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", progress: 100 },
    { name: "CSS", progress: 95 },
    { name: "JavaScript", progress: 80 },
    { name: "React", progress: 80 },
    { name: "Node.js", progress: 70 },
    { name: "UI/UX Design", progress: 70 },
    { name: "Tailwind CSS", progress: 95 },
    { name: "TypeScript", progress: 65 },
  ];

  const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Figma",
    "dbdiagram.io",
    "Terminal",
    "Postman",
  ];

  return (
    <section id="skills" className="section">
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-title">My Skills</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.progress}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Tools & Software</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Soft Skills</h3>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Problem Solving</li>
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Adaptability</li>
              <li>Creativity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
