import React from "react";
import {
  FolderOpen,
  Layers,
  ExternalLink,
  Github,
  GithubIcon,
  LucideGithub,
} from "lucide-react";

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Netflix-GPT",
      category: "Full Stack Development",
      image: "/netflix-gpt.jpg",
      github: "https://github.com/AyushDeuja/netflix-gpt",
      description:
        "A Netflix clone with a chatbot interface for personalized recommendations and suggestions according to user requirements.",
    },
    {
      id: 2,
      title: "Youtube Clone",
      category: "Frontend Development",
      image: "/youtube.jpg",
      github: "https://github.com/AyushDeuja/youtube",
      description: "A clone of YouTube with video streaming & live chats.",
    },
    {
      id: 3,
      title: "Todos API",
      category: "Backend Development",
      image: "/todosApi.jpg",
      github: "https://github.com/AyushDeuja/Todos-api",
      description: "A simple API for managing todos with CRUD operations.",
    },
    {
      id: 4,
      title: "Food ordering website",
      category: "Frontend Development",
      image: "/foodApp.jpg",
      github: "https://github.com/AyushDeuja/FoodApp",
      description:
        "A food ordering website where people can order foods from different restaurants.",
    },
    {
      id: 5,
      title: "LMS API",
      category: "Backend Development",
      image: "/lmsApi.jpg",
      github: "https://github.com/AyushDeuja/LMS/tree/main/Backend",
      description:
        "A simple API for managing a library management system with CRUD operations and OTP features to register.",
    },
    {
      id: 6,
      title: "Movie Mania",
      category: "Frontend Development",
      image: "/movieMania.jpg",
      github: "https://github.com/AyushDeuja/HDC-TMDB-API-REACT",
      description:
        "A movie recommendation website that provides personalized movie suggestions based on upcoming, trending & user preferences.",
    },
  ];

  return (
    <section id="works" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">
            My Recent Works
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <FolderOpen className="h-5 w-5 text-primary" />
            <p className="text-muted-foreground text-lg">Portfolio Showcase</p>
          </div>
          <p className="text-muted-foreground">
            A collection of my recent projects and accomplishments spanning
            various fields of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Github className="h-8 w-8 text-white hover:scale-110 transition-transform" />
                </a>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="h-4 w-4 text-primary" />
                  <span className="text-xs text-muted-foreground font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
