import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, TrendingUp, Users, Zap } from "lucide-react"

const projects = [
  {
    title: "E-commerce Microservices Platform",
    description:
      "Architected and built a scalable e-commerce platform serving 100K+ users with 99.9% uptime. Implemented event-driven architecture with automated scaling.",
    image: "/modern-e-commerce-dashboard-with-microservices-arc.jpg",
    technologies: ["Java", "Spring Boot", "AWS", "Kubernetes", "PostgreSQL", "Redis"],
    metrics: {
      performance: "40% faster response times",
      cost: "60% cost reduction",
      scale: "100K+ active users",
    },
    links: {
      demo: "#",
      github: "#",
    },
    featured: true,
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "Developed a real-time analytics platform with machine learning insights. Processes 1M+ events daily with automated anomaly detection.",
    image: "/ai-analytics-dashboard-with-charts-and-machine-lea.jpg",
    technologies: ["Python", "FastAPI", "TensorFlow", "AWS Lambda", "DynamoDB", "React"],
    metrics: {
      performance: "Real-time processing",
      cost: "50% infrastructure savings",
      scale: "1M+ events/day",
    },
    links: {
      demo: "#",
      github: "#",
    },
    featured: true,
  },
  {
    title: "DevOps Automation Suite",
    description:
      "Created comprehensive CI/CD pipeline automation reducing deployment time by 80%. Includes automated testing, security scanning, and rollback capabilities.",
    image: "/devops-automation-pipeline-dashboard-with-ci-cd-wo.jpg",
    technologies: ["Python", "Jenkins", "Docker", "Terraform", "AWS", "Ansible"],
    metrics: {
      performance: "80% faster deployments",
      cost: "45% operational cost reduction",
      scale: "50+ microservices",
    },
    links: {
      demo: "#",
      github: "#",
    },
    featured: false,
  },
  {
    title: "Multi-Cloud Cost Optimizer",
    description:
      "Built intelligent cost optimization system that automatically adjusts cloud resources based on usage patterns and business requirements.",
    image: "/cloud-cost-optimization-dashboard-with-multi-cloud.jpg",
    technologies: ["Python", "AWS", "Azure", "GCP", "Terraform", "Grafana"],
    metrics: {
      performance: "Automated optimization",
      cost: "35% average savings",
      scale: "Multi-cloud deployment",
    },
    links: {
      demo: "#",
      github: "#",
    },
    featured: false,
  },
  {
    title: "Real-time Collaboration Platform",
    description:
      "Developed a high-performance collaboration platform with real-time messaging, file sharing, and video conferencing capabilities.",
    image: "/real-time-collaboration-platform-with-messaging-an.jpg",
    technologies: ["Node.js", "WebRTC", "Socket.io", "MongoDB", "Redis", "Docker"],
    metrics: {
      performance: "Sub-100ms latency",
      cost: "Optimized for scale",
      scale: "10K+ concurrent users",
    },
    links: {
      demo: "#",
      github: "#",
    },
    featured: false,
  },
  {
    title: "Blockchain Supply Chain Tracker",
    description:
      "Implemented blockchain-based supply chain tracking system ensuring transparency and authenticity across global logistics networks.",
    image: "/blockchain-supply-chain-tracking-dashboard-with-gl.jpg",
    technologies: ["Solidity", "Web3.js", "Node.js", "PostgreSQL", "AWS", "React"],
    metrics: {
      performance: "Immutable tracking",
      cost: "Reduced fraud by 90%",
      scale: "Global deployment",
    },
    links: {
      demo: "#",
      github: "#",
    },
    featured: false,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-balance mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Showcasing sophisticated applications and integrations that deliver real business value
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-space-grotesk group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Featured
                  </Badge>
                </div>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-border/50">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-xs text-muted-foreground">{project.metrics.performance}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-xs text-muted-foreground">{project.metrics.cost}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-xs text-muted-foreground">{project.metrics.scale}</div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold font-space-grotesk mb-8 text-center">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-space-grotesk group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
