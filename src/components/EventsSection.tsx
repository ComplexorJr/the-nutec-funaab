import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Video,
  Star,
  ExternalLink,
  BookOpen,
  Trophy,
  Lightbulb,
  Target,
  ArrowRight,
  User,
  Globe
} from "lucide-react";
import { motion } from "motion/react";
import { AnimationWrapper, StaggerContainer, StaggerItem, cardHover, buttonHover, buttonTap } from "./AnimationWrapper";

const upcomingEvents = [
  {
    id: 1,
    title: "AI & Machine Learning Masterclass",
    description: "Deep dive into modern AI techniques, neural networks, and practical implementation strategies for real-world applications.",
    image: "https://images.unsplash.com/photo-1733222765056-b0790217baa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHdvcmtzaG9wJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc1NjU5MjcxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    type: "Workshop",
    format: "Hybrid",
    date: "Jan 15, 2025",
    time: "2:00 PM - 6:00 PM EST",
    location: "Virtual + NYC",
    instructor: "Dr. Sarah Chen",
    level: "Intermediate",
    price: "Free",
    attendees: 245,
    rating: 4.9,
    tags: ["AI", "Machine Learning", "Python"]
  },
  {
    id: 2,
    title: "Full-Stack React Development Bootcamp",
    description: "Build complete web applications using React, Node.js, and modern development tools. Perfect for career changers.",
    image: "https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBib290Y2FtcCUyMHByb2dyYW1taW5nJTIwY2xhc3N8ZW58MXx8fHwxNzU2NTkyNzE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "Bootcamp",
    format: "Online",
    date: "Jan 20, 2025",
    time: "6:00 PM - 9:00 PM EST",
    location: "Virtual",
    instructor: "Marcus Johnson",
    level: "Beginner",
    price: "$49",
    attendees: 180,
    rating: 4.8,
    tags: ["React", "JavaScript", "Full-Stack"]
  },
  {
    id: 3,
    title: "Cybersecurity Fundamentals Workshop",
    description: "Learn essential cybersecurity practices, threat detection, and security frameworks used by industry professionals.",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB3ZWJpbmFyJTIwdmlydHVhbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU2NTkyNzE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "Webinar",
    format: "Online",
    date: "Jan 25, 2025",
    time: "1:00 PM - 3:00 PM EST",
    location: "Virtual",
    instructor: "Alex Rivera",
    level: "All Levels",
    price: "Free",
    attendees: 320,
    rating: 4.7,
    tags: ["Cybersecurity", "Network Security", "Ethics"]
  }
];

const pastEvents = [
  {
    title: "Cloud Computing with AWS",
    date: "Dec 18, 2024",
    attendees: 450,
    rating: 4.9,
    recording: true
  },
  {
    title: "Data Science with Python",
    date: "Dec 10, 2024",
    attendees: 380,
    rating: 4.8,
    recording: true
  },
  {
    title: "Mobile App Development",
    date: "Dec 5, 2024",
    attendees: 290,
    rating: 4.7,
    recording: true
  }
];

const eventCategories = [
  { name: "All Events", count: 24 },
  { name: "Workshops", count: 8 },
  { name: "Webinars", count: 12 },
  { name: "Bootcamps", count: 4 }
];

export function EventsSection() {
  return (
    <section id="events" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimationWrapper variant="scaleIn">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-primary font-medium">Learning Events</span>
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper variant="fadeInUp" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tech Events
              </span>
            </h2>
          </AnimationWrapper>
          
          <AnimationWrapper variant="fadeInUp" delay={0.4}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Connect with industry experts, learn cutting-edge technologies, and advance your 
              career through our workshops, webinars, and bootcamps.
            </p>
          </AnimationWrapper>
        </div>

        {/* Event Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {eventCategories.map((category) => (
            <Badge
              key={category.name}
              variant={category.name === "All Events" ? "default" : "secondary"}
              className={`cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-200 ${
                category.name === "All Events" 
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground" 
                  : "hover:bg-primary/10"
              }`}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Tabs for Event Types */}
        <Tabs defaultValue="upcoming" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              Upcoming Events
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              Past Events
            </TabsTrigger>
          </TabsList>

          {/* Upcoming Events */}
          <TabsContent value="upcoming" className="space-y-8">
            <StaggerContainer className="grid lg:grid-cols-3 gap-6" stagger={0.2}>
              {upcomingEvents.map((event) => (
                <StaggerItem key={event.id}>
                  <motion.div
                    whileHover={cardHover}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group h-full border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                      <div className="relative overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ImageWithFallback
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <motion.div 
                          className="absolute top-3 left-3 flex gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                            {event.type}
                          </Badge>
                          <Badge className="bg-black/20 backdrop-blur-sm text-white border-white/20">
                            {event.format}
                          </Badge>
                        </motion.div>
                        <motion.div 
                          className="absolute top-3 right-3"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          <Badge variant="secondary" className="bg-black/20 backdrop-blur-sm text-white border-white/20">
                            {event.price}
                          </Badge>
                        </motion.div>
                      </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {event.instructor}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">{event.attendees} registered</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                        <span className="font-medium">{event.rating}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {event.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                      <div className="pt-2">
                        <motion.div
                          whileHover={buttonHover}
                          whileTap={buttonTap}
                        >
                          <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 group/btn">
                            Register Now
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
              <div className="max-w-2xl mx-auto">
                <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Host Your Own Event</h3>
                <p className="text-muted-foreground mb-6">
                  Share your expertise with our community. Apply to become an event host and reach 
                  thousands of eager learners.
                </p>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                  Apply to Host
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Event Recordings</h3>
              <p className="text-muted-foreground">
                Catch up on our previous events with full recordings and resources.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold group-hover:text-primary transition-colors duration-300">
                          {event.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">{event.date}</p>
                      </div>
                      {event.recording && (
                        <Badge variant="secondary" className="text-xs">
                          <Video className="w-3 h-3 mr-1" />
                          Recording
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">{event.attendees} attended</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                        <span className="font-medium">{event.rating}</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full border-primary/20 hover:bg-primary/5">
                      <Video className="w-4 h-4 mr-2" />
                      Watch Recording
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                View All Past Events
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Never Miss an Event
            </h3>
            <p className="text-muted-foreground">
              Subscribe to our event newsletter and be the first to know about upcoming workshops, 
              webinars, and learning opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
