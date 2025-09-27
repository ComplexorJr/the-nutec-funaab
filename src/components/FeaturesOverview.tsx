import { motion } from "motion/react";
import { AnimationWrapper } from "./AnimationWrapper";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  BookOpen, 
  Users, 
  Lightbulb, 
  Trophy, 
  Calendar,
  Code,
  Rocket,
  Globe
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Interactive Learning",
    description: "Access comprehensive courses, webinars, and hands-on workshops",
    badge: "Full Library"
  },
  {
    icon: Code,
    title: "Project Showcase",
    description: "Display your work, get feedback, and discover amazing projects",
    badge: "Community Driven"
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Connect with industry professionals and fellow learners",
    badge: "Networking"
  },
  {
    icon: Calendar,
    title: "Live Events",
    description: "Join tech talks, workshops, and networking events",
    badge: "Events"
  },
  {
    icon: Trophy,
    title: "Skill Recognition",
    description: "Earn certificates, badges, and climb the leaderboards",
    badge: "Achievement System"
  },
  {
    icon: Rocket,
    title: "Career Opportunities",
    description: "Access job boards, mentorship, and career guidance",
    badge: "Career Support"
  }
];

export function FeaturesOverview() {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                <Globe className="w-4 h-4 mr-2" />
                Platform Features
              </Badge>
              <h2 className="mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Unlock Your Tech Potential
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Join thousands of tech enthusiasts and professionals on our comprehensive learning platform. 
                Sign up to access content, connect with experts, and accelerate your career.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="mb-4 text-primary">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Join our community of tech enthusiasts and unlock access to rich content, 
                  events, and career opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Users className="w-4 h-4 mr-2" />
                    Sign Up Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
