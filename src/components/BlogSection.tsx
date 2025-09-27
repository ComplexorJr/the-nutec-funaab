import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen,
  TrendingUp,
  MessageCircle,
  Share2,
  Heart,
  Eye
} from "lucide-react";

const featuredPost = {
  id: 1,
  title: "The Future of AI in Web Development: A Complete Guide",
  excerpt: "Discover how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user interfaces. Learn the tools and techniques that are shaping the future.",
  image: "https://images.unsplash.com/photo-1681583484651-281ae2defb17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY29kaW5nJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU2NTkyMzA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  author: "Dr. Sarah Chen",
  date: "Dec 28, 2024",
  readTime: "8 min read",
  category: "AI & Machine Learning",
  likes: 234,
  comments: 45,
  views: 2840,
  featured: true
};

const blogPosts = [
  {
    id: 2,
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn best practices for building large-scale React applications using TypeScript. From project structure to advanced patterns.",
    image: "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGphdmFzY3JpcHQlMjBjb2RlfGVufDF8fHx8MTc1NjU5MjMwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Marcus Johnson",
    date: "Dec 25, 2024",
    readTime: "6 min read",
    category: "Web Development",
    likes: 156,
    comments: 28,
    views: 1920
  },
  {
    id: 3,
    title: "Data Science Fundamentals: From Python to Production",
    excerpt: "A comprehensive guide to data science workflow, covering data collection, analysis, visualization, and deploying ML models to production.",
    image: "https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMG1hY2hpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NTY1OTIzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Elena Rodriguez",
    date: "Dec 22, 2024",
    readTime: "10 min read",
    category: "Data Science",
    likes: 298,
    comments: 67,
    views: 3450
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices for Developers",
    excerpt: "Essential security practices every developer should know. Protect your applications from common vulnerabilities and attacks.",
    image: "https://images.unsplash.com/photo-1660836814985-8523a0d713b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2NTg2MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Alex Rivera",
    date: "Dec 20, 2024",
    readTime: "7 min read",
    category: "Cybersecurity",
    likes: 189,
    comments: 32,
    views: 2100
  },
  {
    id: 5,
    title: "Cloud Computing: AWS vs Azure vs Google Cloud",
    excerpt: "Compare the top cloud platforms and learn which one is best for your next project. Detailed feature comparison and pricing analysis.",
    image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2NTI4MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "David Park",
    date: "Dec 18, 2024",
    readTime: "12 min read",
    category: "Cloud Computing",
    likes: 234,
    comments: 54,
    views: 2780
  },
  {
    id: 6,
    title: "Mobile App Development: Native vs Cross-Platform",
    excerpt: "Explore the pros and cons of native vs cross-platform development. Make informed decisions for your mobile app projects.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTY1NzA2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Sofia Gonzalez",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Mobile Development",
    likes: 167,
    comments: 39,
    views: 1850
  }
];

const categories = [
  "All",
  "Web Development",
  "AI & Machine Learning",
  "Data Science",
  "Cybersecurity",
  "Cloud Computing",
  "Mobile Development"
];

const trendingTopics = [
  "React 19 Features",
  "AI Code Generation",
  "DevOps Best Practices",
  "Blockchain Development",
  "UI/UX Trends 2025"
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">Tech Insights</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Latest from Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tech Blog
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Stay ahead of the curve with expert insights, tutorials, and industry analysis 
            from our community of tech leaders and educators.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Post */}
            <div>
              <div className="flex items-center mb-6">
                <TrendingUp className="w-5 h-5 text-primary mr-2" />
                <h3 className="text-xl font-bold">Featured Article</h3>
              </div>
              
              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent">
                    Featured
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white border-white/20">
                    {featuredPost.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300 leading-tight">
                    {featuredPost.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {featuredPost.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {featuredPost.comments}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredPost.views}
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 group/btn">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "secondary"}
                  className={`cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-200 ${
                    category === "All" 
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground" 
                      : "hover:bg-primary/10"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="relative">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <Badge className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm text-white border-white/20 text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Heart className="w-3 h-3 mr-1" />
                          {post.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          {post.comments}
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto group/btn">
                        Read more
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Topics */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 cursor-pointer transition-colors duration-200">
                    <span className="text-sm font-medium">{topic}</span>
                    <Badge variant="secondary" className="text-xs">
                      #{index + 1}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold">Stay in the Loop</h3>
                  <p className="text-sm text-muted-foreground">
                    Get weekly tech insights and tutorials delivered to your inbox.
                  </p>
                  <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    Subscribe to Newsletter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Share */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Share2 className="w-5 h-5 mr-2 text-primary" />
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay connected for the latest updates and tech discussions.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    Twitter
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    Discord
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
