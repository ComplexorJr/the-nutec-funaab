import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Monitor, 
  Globe, 
  Users, 
  Trophy, 
  Briefcase, 
  Video,
  ArrowRight,
  Clock,
  Star
} from "lucide-react";
import { motion } from "motion/react";
import { AnimationWrapper, StaggerContainer, StaggerItem, cardHover, buttonHover, buttonTap } from "./AnimationWrapper";

const features = [
  {
    icon: Monitor,
    title: "Physical & Online Classes",
    description: "Flexible learning options with both in-person workshops and online courses to fit your schedule.",
    details: "50+ courses available",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Video,
    title: "Live Webinars & Events",
    description: "Interactive sessions with industry experts, Q&A, and real-time collaboration.",
    details: "Weekly sessions",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Practical Demonstrations",
    description: "Hands-on learning with real projects, code reviews, and practical applications.",
    details: "Project-based learning",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Star,
    title: "Creator Showcase",
    description: "Platform to showcase your projects, get feedback, and build your professional portfolio.",
    details: "Build your reputation",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description: "Direct connections to job opportunities, internships, and freelance projects.",
    details: "200+ partner companies",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Connect with learners worldwide, join study groups, and collaborate on projects.",
    details: "40+ countries",
    color: "from-teal-500 to-blue-500"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimationWrapper variant="scaleIn">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Trophy className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-primary font-medium">What We Offer</span>
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper variant="fadeInUp" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
          </AnimationWrapper>
          
          <AnimationWrapper variant="fadeInUp" delay={0.4}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From beginner-friendly courses to advanced workshops, Nutec provides a comprehensive 
              learning ecosystem designed to accelerate your tech career.
            </p>
          </AnimationWrapper>
        </div>

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" stagger={0.15}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={cardHover}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <CardHeader className="relative">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {feature.details}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {feature.description}
                    </CardDescription>
                    
                    <motion.div
                      whileHover={buttonHover}
                      whileTap={buttonTap}
                    >
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto group/btn"
                      >
                        Learn more 
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimationWrapper variant="fadeInUp" delay={0.3}>
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  Explore All Features
                </Button>
              </motion.div>
              <motion.div
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                  Schedule a Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
