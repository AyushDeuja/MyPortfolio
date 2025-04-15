import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree:
        "Bachelor of Science in Computer Science and Information Technology",
      institution: "Tribhuvan University, Nepal",
      duration: "2023 - Present",
      description:
        "Studying core areas of computer science including programming, algorithms, databases, networking, AI, and web development. Gaining both theoretical knowledge and practical experience through projects and coursework.",
    },
    {
      degree: "Computer Science",
      institution: "Bhanu Memorial, Biratnagar",
      duration: "2020 - 2022",
      description:
        "Studied the fundamentals of computer science including programming, computer systems, and basic networking. Gained foundational knowledge in both theory and practical applications through lab work and coursework.",
    },
  ];
  const certificationData = [
    {
      title: "Fullstack Development Certification",
      company: "Clove IT, Biratnagar",
      duration: "2025",
      description:
        "Completed a 3-month certification program in full-stack development, focusing on React for frontend, NestJS for backend, and PostgreSQL for database management. Gained hands-on experience in building CRUD operations, API fetching, and creating responsive designs.",
    },
  ];

  const experienceData = [
    {
      position: "Intern",
      company: "Clove IT",
      duration: "2025 - Present",
      description:
        "Worked on both frontend and backend development of web applications. Built responsive UIs and integrated APIs, contributing to end-to-end feature implementation.",
    },
  ];

  return (
    <section id="education" className="section bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-title">Education & Experience</h2>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <GraduationCap size={24} className="text-primary mr-2" />
              Education
            </h3>
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-primary/30 before:rounded-full"
                >
                  <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-primary -translate-x-[2px]"></div>
                  <h4 className="text-lg font-medium">{item.degree}</h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {item.institution} | {item.duration}
                  </p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <GraduationCap size={24} className="text-primary mr-2" />
                Certification
              </h3>
              <div className="space-y-8">
                {certificationData.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-primary/30 before:rounded-full"
                  >
                    <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-primary -translate-x-[2px]"></div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.company} | {item.duration}
                    </p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-7">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Briefcase size={24} className="text-primary mr-2" />
                Experience
              </h3>
              <div className="space-y-8">
                {experienceData.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-primary/30 before:rounded-full"
                  >
                    <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-primary -translate-x-[2px]"></div>
                    <h4 className="text-lg font-medium">{item.position}</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.company} | {item.duration}
                    </p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
