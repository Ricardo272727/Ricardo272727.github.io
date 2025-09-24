import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Coffee, Globe, Heart, Target, TrendingUp, Users } from "lucide-react"

const achievements = [
  {
    icon: Award,
    title: "Computer Science Engineer",
    description: "Bridging theory and practice",
  },
  {
    icon: TrendingUp,
    title: "30% Average Cost Reduction",
    description: "Across all client projects",
  },
  {
    icon: Users,
    title: "50+ Successful Projects",
    description: "From startups to enterprise",
  },
  {
    icon: Globe,
    title: "Global Remote Experience",
    description: "Working with international teams",
  },
]

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every solution is designed to deliver measurable business impact and ROI.",
  },
  {
    icon: Heart,
    title: "Quality First",
    description: "I believe in writing clean, maintainable code that stands the test of time.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and I stay ahead of the curve through constant learning.",
  },
  {
    icon: Coffee,
    title: "Collaborative",
    description: "Great software is built by great teams. I thrive in collaborative environments.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-balance mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Passionate about building technology that makes a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                With over 7 years of experience in software development, I specialize in creating scalable, efficient
                solutions that drive business growth. My expertise spans cloud architecture, microservices, and
                automation, with a proven track record of reducing costs while improving performance.
              </p>

              <p className="text-lg leading-relaxed text-foreground mb-6">
                I've worked with startups looking to scale rapidly and enterprises needing to modernize their
                infrastructure. My approach combines technical excellence with business acumen, ensuring that every
                solution delivers real value.
              </p>

              <p className="text-lg leading-relaxed text-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge through technical writing and mentoring.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold font-space-grotesk mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cloud Architecture",
                  "Microservices",
                  "Python",
                  "Java",
                  "AWS",
                  "Kubernetes",
                  "DevOps",
                  "Automation",
                  "Cost Optimization",
                  "Performance Tuning",
                ].map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-bold font-space-grotesk text-sm mb-2">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-space-grotesk text-center mb-12">My Values & Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                >
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-bold font-space-grotesk mb-3">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
