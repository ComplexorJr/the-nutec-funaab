import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { 
  Mail, 
  Phone, 
  Clock,
  Send,
  CheckCircle,
  Users,
  HelpCircle,
  Briefcase,
  BookOpen
} from "lucide-react";

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Email Support",
    description: "Get help from our support team",
    contact: "support@nutec.edu",
    availability: "24/7 response"
  },
  {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: "Phone Support",
    description: "Speak directly with our team",
    contact: "+1 (555) 123-4567",
    availability: "Mon-Fri 9AM-6PM EST"
  },
];


const inquiryTypes = [
  { value: "general", label: "General Information", icon: <HelpCircle className="w-4 h-4" /> },
  { value: "enrollment", label: "Course Enrollment", icon: <BookOpen className="w-4 h-4" /> },
  { value: "technical", label: "Technical Support", icon: <Users className="w-4 h-4" /> },
  { value: "partnership", label: "Business Partnership", icon: <Briefcase className="w-4 h-4" /> }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Mail className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">Get in Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tech Journey?
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about our courses, need technical support, or want to discuss partnerships? 
            We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-5 h-5 mr-2 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      className="bg-input-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      className="bg-input-background border-border"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-input-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="bg-input-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry">Inquiry Type *</Label>
                  <Select>
                    <SelectTrigger className="bg-input-background border-border">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center">
                            {type.icon}
                            <span className="ml-2">{type.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input 
                    id="subject" 
                    placeholder="Brief description of your inquiry"
                    className="bg-input-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry, goals, or how we can help you..."
                    rows={6}
                    className="bg-input-background border-border resize-none"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary/20"
                  />
                  <Label htmlFor="newsletter" className="text-sm text-muted-foreground leading-relaxed">
                    I'd like to receive updates about new courses, events, and tech insights from Nutec.
                  </Label>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 group">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm mb-1">{method.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{method.description}</p>
                        <p className="text-sm font-medium text-primary">{method.contact}</p>
                        <div className="flex items-center mt-1">
                          <Clock className="w-3 h-3 text-muted-foreground mr-1" />
                          <span className="text-xs text-muted-foreground">{method.availability}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Response Promise */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We respond to all inquiries within 24 hours. For urgent matters, use our live chat for immediate assistance.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Check out our comprehensive FAQ section or contact us directly.
          </p>
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
            <HelpCircle className="w-4 h-4 mr-2" />
            View FAQ
          </Button>
        </div>
      </div>
    </section>
  );
}
