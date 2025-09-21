"use client";

import { Button } from "@/components/ui/button";
import { useLink } from "@/hooks/use-link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  const { openPage, clickOnLink } = useLink();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space-grotesk text-balance mb-6">
              <span className="text-foreground">Building</span>{" "}
              <span className="text-primary">Scalable</span>{" "}
              <span className="text-foreground">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Expert software developer specializing in cloud architecture,
              microservices, and automation. I transform complex business
              challenges into elegant, cost-effective solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="text-lg px-8 py-6"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-transparent"
            >
              Let's Talk
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="p-3"
              onClick={() => openPage('https://github.com/Ricardo272727')}
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="sm" className="p-3"
              onClick={() => openPage('https://www.linkedin.com/in/ricardo-segura-cuanalo-2b0b32189')}
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="sm" className="p-3" onClick={() => clickOnLink("mailto:cuanaloricardo@gmail.com")}>
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary font-space-grotesk">
                7+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary font-space-grotesk">
                25+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary font-space-grotesk">
                30%
              </div>
              <div className="text-sm text-muted-foreground">
                Average Cost Reduction
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary font-space-grotesk">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
