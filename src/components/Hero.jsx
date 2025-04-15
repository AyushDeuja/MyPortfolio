import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-center items-center pt-16 pb-32 bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/10"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

      {/* Color accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-60 dark:opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[100px] opacity-60 dark:opacity-30 pointer-events-none"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute top-1/4 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>

        {/* Fine grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6bS0yIDRoMnYyaC0ydi0yem00LTR2MmgtMnYtMmgyem0yIDBoMnYyaC0ydi0yek0zNCAyMHYyaC0ydi0yaDJ6bTAgNGgydjJoLTJ2LTJ6bS00LTR2MmgtMnYtMmgyem0yIDBoMnYyaC0ydi0yek0zMiAzNHYyaC0ydi0yaDJ6bTAtMTB2MmgtMnYtMmgyem0wIDR2MmgtMnYtMmgyem0wLTEydjJoLTJ2LTJoMnptLTQgMGgydjJoLTJ2LTJ6bS0yIDRoMnYyaC0ydi0yem00LTR2MmgtMnYtMmgyem0yIDB2MmgtMnYtMmgyem0tMiA0djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 dark:opacity-20"></div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 flex flex-col items-center relative z-10">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-primary shadow-lg bg-background">
          <img
            src="/public/profile_img.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center animate-fade-in">
          Hi, I'm <span className="text-primary">Ayush Deuja</span>
        </h1>

        <h2 className="text-2xl md:text-3xl mt-4 text-muted-foreground text-center">
          Web Developer
        </h2>

        <p className="mt-6 text-lg text-center max-w-2xl">
          I create stunning web experiences with clean code and modern design.
          Let's build something amazing together.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md transition-colors shadow-md hover:shadow-lg"
          >
            Contact Me
          </a>
          <a
            href="#about"
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-md transition-colors shadow-sm hover:shadow-md"
          >
            Learn More
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
