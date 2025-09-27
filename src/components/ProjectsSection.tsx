import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Github, 
  ExternalLink, 
  Star, 
  GitFork, 
  Eye,
  Code,
  Trophy,
  Users,
  ArrowRight
} from "lucide-react";

const featuredProjects = [
  {
    title: "EcoTrack Dashboard",
    description: "A comprehensive environmental monitoring platform built with React, Node.js, and real-time data visualization.",
    image: "https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9qZWN0JTIwZGFzaGJvYXJkJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1NjU5MTk4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    creator: "Sarah Chen",
    tech: ["React", "Node.js", "D3.js", "MongoDB"],
    stats: { stars: 234, forks: 45, views: 1200 },
    featured: true
  },
  {
    title: "Smart Portfolio Website",
    description: "AI-powered portfolio generator that adapts content based on visitor preferences and job market trends.",
    image: "https://images.unsplash.com/photo-1517309561013-16f6e4020305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MXx8fHwxNzU2NTkxOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    creator: "Marcus Johnson",
    tech: ["Next.js", "OpenAI", "Tailwind", "Vercel"],
    stats: { stars: 189, forks: 32, views: 890 },
    featured: true
  },
  {
    title: "ML Prediction Engine",
    description: "Machine learning model for predicting market trends with interactive data visualization and real-time updates.",
    image: "https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc1NjQ5OTA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    creator: "Alex Rivera",
    tech: ["Python", "TensorFlow", "Flask", "Docker"],
    stats: { stars: 342, forks: 67, views: 1500 },
    featured: true
  }
];

const leaderboard = [
  { name: "Emily Zhang", projects: 12, score: 2340, avatar: "EZ" },
  { name: "David Park", projects: 8, score: 1890, avatar: "DP" },
  { name: "Sofia Gonzalez", projects: 15, score: 1750, avatar: "SG" },
  { name: "Ryan Thompson", projects: 6, score: 1420, avatar: "RT" },
  { name: "Aisha Patel", projects: 9, score: 1180, avatar: "AP" }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Code className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">Student Showcase</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Amazing{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>{" "}
            by Our Community
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover incredible projects built by Nutec students. From web applications 
            to AI models, our community creates solutions that matter.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Projects */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Featured Projects</h3>
              <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5">
                <Github className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>

            <div className="space-y-6">
              {featuredProjects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      {project.featured && (
                        <Badge className="absolute top-3 left-3 bg-gradient-to-r from-primary to-accent">
                          <Trophy className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <div className="md:col-span-2">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="group-hover:text-primary transition-colors duration-300">
                              {project.title}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">by {project.creator}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Github className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <CardDescription className="mb-4 leading-relaxed">
                          {project.description}
                        </CardDescription>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            {project.stats.stars}
                          </div>
                          <div className="flex items-center">
                            <GitFork className="w-4 h-4 mr-1" />
                            {project.stats.forks}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {project.stats.views}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Top Contributors</h3>
              <Trophy className="w-6 h-6 text-primary" />
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Community Leaders
                </CardTitle>
                <CardDescription>Most active project contributors this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {leaderboard.map((user, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent text-white text-sm font-bold">
                      {user.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {user.projects} projects • {user.score} points
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      #{index + 1}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold mb-2">Ready to Showcase?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Submit your project to get featured and gain recognition from the community.
                </p>
                <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  Submit Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 group">
              Browse All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
              <Github className="w-5 h-5 mr-2" />
              Open Source Hub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
