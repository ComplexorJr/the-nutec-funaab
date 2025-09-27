import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Target, 
  Users, 
  Lightbulb, 
  Award, 
  BookOpen, 
  Globe,
  TrendingUp,
  Heart,
  Rocket,
  CheckCircle
} from "lucide-react";
import { motion } from "motion/react";
import { AnimationWrapper, StaggerContainer, StaggerItem, cardHover } from "./AnimationWrapper";

const values = [
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and methodologies to deliver the most effective learning experiences."
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Community Driven",
    description: "Our platform thrives on collaboration, peer learning, and building connections within the tech community."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    title: "Practical Learning",
    description: "Every course and project is designed with real-world applications and industry-relevant skills in mind."
  },
  
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Global Accessibility",
    description: "Making quality tech education accessible to learners worldwide, regardless of location or background."
  }
];

const achievements = [
  { number: "50K+", label: "Students Trained", icon: <Users className="w-5 h-5" /> },
  { number: "500+", label: "Courses Available", icon: <BookOpen className="w-5 h-5" /> },
  { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-5 h-5" /> },
  { number: "200+", label: "Industry Partners", icon: <Award className="w-5 h-5" /> }
];

const teamHighlights = [
  "Industry experts with 10+ years experience",
  "Certified instructors from top tech companies",
  "Dedicated career counselors and mentors",
  "24/7 technical support team"
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimationWrapper variant="scaleIn">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Heart className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-primary font-medium">Our Story</span>
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper variant="fadeInUp" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Empowering the Next Generation of{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tech Leaders
              </span>
            </h2>
          </AnimationWrapper>
          
          <AnimationWrapper variant="fadeInUp" delay={0.4}>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Nutec is an arm of the college of engineering dedicated to fostering practical skill development and technological awareness amongst engineering students and beyond.

Nutec aims to bridge skill gaps by organising practical courses, events and recognising talented creators in the community.

Nutec doors are open to everyone and every enthusiast who is passionate about changing the world with tech
            </p>
          </AnimationWrapper>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To make high-quality technology education accessible to everyone, everywhere. We believe 
                that with the right guidance and resources, anyone can master the skills needed to thrive 
                in the digital economy.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mr-3">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's leading platform for practical tech education, where learners 
                gain real-world skills, build meaningful projects, and launch successful careers in technology.
              </p>
            </div>

            <div className="space-y-3">
              {teamHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZWR1Y2F0aW9uJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU2NTkyNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nutec team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from course design to community building.
            </p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.15}>
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={cardHover}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group h-full border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5 
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {value.icon}
                      </motion.div>
                      <h4 className="font-bold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Impact</h3>
            <p className="text-muted-foreground">
              Numbers that reflect our commitment to educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform -rotate-3"></div>
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1754761986430-5d0d44d09d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTY1OTI2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Innovation technology workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground mb-4">
                Innovation Hub
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Where Technology Meets{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Education
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our state-of-the-art learning platform combines the latest in educational technology 
                with proven pedagogical methods. From AI-powered personalized learning paths to 
                immersive virtual labs, we're constantly innovating to enhance your learning experience.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Cutting-edge Technology</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn with the latest tools and frameworks used by industry leaders.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Personalized Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    AI-driven recommendations adapt to your pace and learning style.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Real-world Projects</h4>
                  <p className="text-sm text-muted-foreground">
                    Build portfolio-worthy projects that showcase your skills to employers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
