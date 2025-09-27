import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { 
  UserPlus, 
  BookOpen, 
  Hammer, 
  Share2, 
  Network,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Join",
    description: "Sign up and complete your profile to get personalized course recommendations.",
    details: "Free registration • Instant access",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BookOpen,
    title: "Learn",
    description: "Access curated courses, interactive tutorials, and live sessions with experts.",
    details: "Self-paced learning • Expert mentorship",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Apply your knowledge through hands-on projects and real-world challenges.",
    details: "Portfolio projects • Code reviews",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Share2,
    title: "Showcase",
    description: "Share your projects with the community and get valuable feedback.",
    details: "Public portfolio • Peer reviews",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Network,
    title: "Connect",
    description: "Network with peers, mentors, and potential employers in your field.",
    details: "Job opportunities • Community support",
    color: "from-indigo-500 to-purple-500"
  }
];

const funFacts = [
  "Students complete an average of 3 projects per month",
  "95% of graduates land tech jobs within 6 months",
  "Our community spans across 40+ countries",
  "Over 1,000 successful project deployments monthly"
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <CheckCircle className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">Your Learning Journey</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nutec
            </span>{" "}
            Works
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our proven 5-step methodology has helped thousands of students transform 
            their careers and build amazing projects.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-20">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardContent className="p-6 text-center relative">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${step.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="text-2xl font-bold text-primary mb-1">
                      {index + 1}
                    </div>
                    
                    <h3 className="font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="text-xs text-primary/70 font-medium">
                      {step.details}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Did You Know?</h3>
            <p className="text-muted-foreground">Amazing facts about our learning community</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-foreground leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 group">
            Start Your Journey Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
