import React from "react";
import { FolderOpen, Image, Layers, ExternalLink } from "lucide-react";

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Netflix-GPT",
      category: "Full Stack Development",
      image: "/public/netflix-gpt.jpg",
      description:
        "A Netflix clone with a chatbot interface for personalized recommendations and suggestions according to user requirements.",
    },
    {
      id: 2,
      title: "Youtube Clone",
      category: "Frontend Development",
      image: "public/youtube.jpg",
      description: "A clone of YouTube with video streaming & live chats.",
    },
    {
      id: 3,
      title: "Todos API",
      category: "Backend Development",
      image: "/public/todosApi.jpg",
      description: "A simple API for managing todos with CRUD operations.",
    },
    {
      id: 4,
      title: "Food ordering website",
      category: "Frontend Development",
      image: "public/foodApp.jpg",
      description:
        "A food ordering website where people can order foods from different restaurants.",
    },
    {
      id: 5,
      title: "LMS API",
      category: "Backend Development",
      image: "/public/lmsApi.jpg",
      description:
        "A simple API for managing a library management system with CRUD operations and OTP features to register.",
    },
    {
      id: 6,
      title: "Movie Mania",
      category: "Frontend Development",
      image: "/public/movieMania.jpg",
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
            <p className="text-muted-foreground text-lg ">Portfolio Showcase</p>
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
