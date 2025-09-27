import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Star, 
  Quote,
  MessageCircle, 
  Users, 
  Trophy,
  Heart,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  TrendingUp,
  Award,
  Code,
  Briefcase,
  GraduationCap
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Nutec transformed my career. The practical approach and industry-relevant projects helped me land my dream job at Google. The community support was incredible throughout my journey.",
    course: "Full-Stack Development",
    beforeRole: "Marketing Coordinator",
    salaryIncrease: "180%"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The AI and Machine Learning course exceeded my expectations. Real-world projects and expert mentorship gave me the confidence to transition into data science.",
    course: "AI & Machine Learning",
    beforeRole: "Business Analyst",
    salaryIncrease: "150%"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Cybersecurity Analyst",
    company: "Amazon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Nutec's cybersecurity program is top-notch. The hands-on labs and industry connections helped me secure a position at Amazon within 3 months of completion.",
    course: "Cybersecurity Fundamentals",
    beforeRole: "IT Support",
    salaryIncrease: "120%"
  },
  {
    id: 4,
    name: "David Park",
    role: "Cloud Architect",
    company: "Netflix",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The cloud computing track provided exactly what I needed to advance my career. The instructors are industry veterans who bring real experience to the classroom.",
    course: "Cloud Computing",
    beforeRole: "System Administrator",
    salaryIncrease: "140%"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Mobile Developer",
    company: "Uber",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "From zero programming experience to mobile developer at Uber. Nutec's supportive community and comprehensive curriculum made it possible.",
    course: "Mobile Development",
    beforeRole: "Graphic Designer",
    salaryIncrease: "200%"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "DevOps Engineer",
    company: "Spotify",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The DevOps program taught me not just the tools, but the mindset. The collaborative learning environment mirrors real workplace dynamics perfectly.",
    course: "DevOps & Cloud",
    beforeRole: "Network Admin",
    salaryIncrease: "160%"
  }
];

const communityStats = [
  { number: "50K+", label: "Active Members", icon: <Users className="w-5 h-5" /> },
  { number: "15K+", label: "Success Stories", icon: <Trophy className="w-5 h-5" /> },
  { number: "200+", label: "Study Groups", icon: <MessageCircle className="w-5 h-5" /> },
  { number: "95%", label: "Job Placement Rate", icon: <TrendingUp className="w-5 h-5" /> }
];

const communityFeatures = [
  {
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
    title: "24/7 Discord Community",
    description: "Connect with peers, get help, and share your progress in our active Discord server."
  },
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    title: "Code Review Sessions",
    description: "Regular peer code reviews and feedback sessions to improve your programming skills."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    title: "Career Support",
    description: "Resume reviews, interview prep, and job referrals from our extensive network."
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "Mentorship Program",
    description: "One-on-one mentorship with industry professionals to guide your learning journey."
  }
];

export function CommunitySection() {
  return (
    <section id="community" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Heart className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">Community</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Our Thriving{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tech Community
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect with learners, share experiences, and accelerate your growth in a supportive 
            environment of tech enthusiasts and industry professionals.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Community Features</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the tools and resources that make our community special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {communityFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              Join Our Discord
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Success Stories</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates who transformed their careers through Nutec.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {testimonial.role} at {testimonial.company}
                        </CardDescription>
                      </div>
                    </div>
                    <Quote className="w-6 h-6 text-primary/20 flex-shrink-0" />
                  </div>
                  
                  <div className="flex items-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">Course:</span>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.course}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">Previous Role:</span>
                      <span className="font-medium">{testimonial.beforeRole}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">Salary Increase:</span>
                      <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs">
                        +{testimonial.salaryIncrease}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground mb-4">
                Global Network
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Connect with{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  50,000+ Learners
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our vibrant community spans across 120+ countries, bringing together learners, 
                mentors, and industry professionals. Share knowledge, collaborate on projects, 
                and build lasting professional relationships.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Peer Learning Groups</h4>
                  <p className="text-sm text-muted-foreground">
                    Join study groups based on your interests and skill level.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Industry Networking</h4>
                  <p className="text-sm text-muted-foreground">
                    Connect with professionals from top tech companies.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Project Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    Work together on real-world projects and build your portfolio.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                Join Community
              </Button>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVjaCUyMGNvbW11bml0eSUyMG5ldHdvcmtpbmd8ZW58MXx8fHwxNzU2NTkyNzc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Diverse tech community networking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
