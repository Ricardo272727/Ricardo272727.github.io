import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Code2, Database, Zap, Shield, Cpu, Server } from "lucide-react"

const skillCategories = [
  {
    title: "Cloud Architecture",
    description: "Designing scalable, resilient cloud infrastructure",
    icon: Cloud,
    skills: ["AWS", "Terraform", "Cloudformation", "Kubernetes", "Linux"],
    color: "text-blue-600",
  },
  {
    title: "Backend Development",
    description: "Building robust server-side applications",
    icon: Code2,
    skills: ["Python", "Java", "Node.js", "Spring Boot", "FastAPI", "NestJS", "Django"],
    color: "text-green-600",
  },
  {
    title: "Microservices",
    description: "Architecting distributed systems at scale",
    icon: Server,
    skills: ["Docker", "Kubernetes", "API Gateway", "Microservices", "SQS", "Lambda"],
    color: "text-purple-600",
  },
  {
    title: "Database Systems",
    description: "Optimizing data storage and retrieval",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Snowflake"],
    color: "text-orange-600",
  },
  {
    title: "DevOps & Automation",
    description: "Streamlining development and deployment",
    icon: Zap,
    skills: ["CI/CD", "Jenkins", "Monitoring", "Cron", "ETLs"],
    color: "text-yellow-600",
  },
  {
    title: "Performance & Security",
    description: "Ensuring fast, secure, and reliable systems",
    icon: Shield,
    skills: ["Load Balancing", "Caching", "Security Audits", "Performance Tuning"],
    color: "text-red-600",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-balance mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive skills across the full technology stack, from cloud infrastructure to application development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl font-space-grotesk">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <Cpu className="h-5 w-5" />
            <span>Always learning and adapting to new technologies</span>
          </div>
        </div>
      </div>
    </section>
  )
}
