import React from "react";
import { Briefcase, MapPin, Bookmark } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">
              Hello! I'm Ayush, a passionate web developer with creating modern
              web applications. I specialize in React, Node.js, and UI/UX
              design.
            </p>
            <p>
              My approach combines technical expertise with creative
              problem-solving. I believe in writing clean, efficient code that
              delivers exceptional user experiences. Whether working on a team
              or independently, I'm committed to continuous learning and staying
              updated with the latest industry trends.
            </p>
            <p>
              I enjoy turning complex problems into simple, beautiful and
              intuitive designs. When I'm not coding or pushing pixels, you'll
              find me watching anime and movies, reading mangas, or playing
              games.
            </p>
            <div className="flex flex-col space-y-3 mt-6">
              <div className="flex items-center">
                <Briefcase size={20} className="text-primary mr-2" />
                <span>Intern at Tech Company</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-primary mr-2" />
                <span>Biratnagar, Nepal</span>
              </div>
              <div className="flex items-center">
                <Bookmark size={20} className="text-primary mr-2" />
                <span>Available for freelance work</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-lg p-6 border">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">
              Personal Details
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="font-medium">Name: </span>
                <span>Ayush Deuja</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Email: </span>
                <span className="text-right pl-4">ayushdeuja11@gmail.com</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Phone: </span>
                <span>9814348735</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Experience: </span>
                <span>Fresher</span>
              </li>
              <li className="flex justify-between ">
                <span className="font-medium">Languages: </span>
                <span className=" text-right">Nepali, English, Hindi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
