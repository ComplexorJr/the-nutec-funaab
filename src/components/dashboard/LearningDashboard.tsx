import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import {
  BookOpen,
  Play,
  Clock,
  Star,
  Users,
  CheckCircle,
  Search,
  Filter,
  TrendingUp,
  Award,
  Target
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface LearningDashboardProps {
  user: any;
}

const learningStats = [
  {
    title: "Courses in Progress",
    value: "3",
    icon: BookOpen,
    color: "text-blue-600"
  },
  {
    title: "Completed this Month",
    value: "2",
    icon: CheckCircle,
    color: "text-green-600"
  },
  {
    title: "Learning Streak",
    value: "7 days",
    icon: TrendingUp,
    color: "text-primary"
  },
  {
    title: "Certificates Earned",
    value: "5",
    icon: Award,
    color: "text-yellow-600"
  }
];

const coursesInProgress = [
  {
    id: 1,
    title: "Advanced React Development",
    instructor: "Sarah Chen",
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    nextLesson: "Context API Deep Dive",
    timeRemaining: "2h 30m",
    difficulty: "Advanced",
    rating: 4.8,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400"
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Kumar Patel",
    progress: 45,
    totalLessons: 32,
    completedLessons: 14,
    nextLesson: "Neural Networks Introduction",
    timeRemaining: "4h 15m",
    difficulty: "Intermediate",
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400"
  },
  {
    id: 3,
    title: "DevOps with Docker & Kubernetes",
    instructor: "Mike Johnson",
    progress: 90,
    totalLessons: 20,
    completedLessons: 18,
    nextLesson: "Production Deployment",
    timeRemaining: "1h 45m",
    difficulty: "Advanced",
    rating: 4.7,
    thumbnail: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400"
  }
];

const recommendedCourses = [
  {
    id: 4,
    title: "TypeScript Mastery",
    instructor: "Alex Rodriguez",
    duration: "8h 30m",
    lessons: 28,
    difficulty: "Intermediate",
    rating: 4.8,
    students: 1250,
    price: "Free",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400"
  },
  {
    id: 5,
    title: "System Design Interview Prep",
    instructor: "Emily Watson",
    duration: "12h 15m",
    lessons: 45,
    difficulty: "Advanced",
    rating: 4.9,
    students: 890,
    price: "Paid",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400"
  },
  {
    id: 6,
    title: "Web Performance Optimization",
    instructor: "David Kim",
    duration: "6h 20m",
    lessons: 22,
    difficulty: "Intermediate",
    rating: 4.6,
    students: 670,
    price: "Free",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400"
  }
];

const learningPaths = [
  {
    title: "Full Stack Web Developer",
    progress: 65,
    courses: 8,
    completedCourses: 5,
    estimatedTime: "6 months",
    level: "Beginner to Advanced"
  },
  {
    title: "Machine Learning Engineer",
    progress: 30,
    courses: 12,
    completedCourses: 3,
    estimatedTime: "8 months",
    level: "Intermediate to Advanced"
  },
  {
    title: "DevOps Specialist",
    progress: 80,
    courses: 6,
    completedCourses: 4,
    estimatedTime: "4 months",
    level: "Intermediate"
  }
];

export function LearningDashboard({ user }: LearningDashboardProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Learning Dashboard</h1>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-40">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="web">Web Development</SelectItem>
              <SelectItem value="mobile">Mobile Development</SelectItem>
              <SelectItem value="data">Data Science</SelectItem>
              <SelectItem value="devops">DevOps</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {learningStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-muted/50 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="continue" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="continue">Continue Learning</TabsTrigger>
          <TabsTrigger value="browse">Browse Courses</TabsTrigger>
          <TabsTrigger value="paths">Learning Paths</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
        </TabsList>

        {/* Continue Learning Tab */}
        <TabsContent value="continue" className="space-y-6">
          <div className="grid gap-6">
            {coursesInProgress.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="relative">
                        <ImageWithFallback
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-full lg:w-48 h-32 object-cover rounded-lg"
                        />
                        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                          {course.progress}%
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-semibold text-foreground">{course.title}</h3>
                              <Badge variant="outline">{course.difficulty}</Badge>
                            </div>
                            <p className="text-muted-foreground">by {course.instructor}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                {course.rating}
                              </div>
                              <div className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4" />
                                {course.completedLessons}/{course.totalLessons} lessons
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {course.timeRemaining} left
                              </div>
                            </div>
                          </div>
                          
                          <Button className="bg-primary hover:bg-primary/90">
                            <Play className="w-4 h-4 mr-2" />
                            Continue
                          </Button>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                          <p className="text-sm text-muted-foreground">
                            Next: {course.nextLesson}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Browse Courses Tab */}
        <TabsContent value="browse" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <ImageWithFallback
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge 
                      variant={course.price === "Free" ? "secondary" : "default"}
                      className="absolute top-2 right-2"
                    >
                      {course.price}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {course.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {course.students}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {course.lessons} lessons
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{course.difficulty}</Badge>
                      </div>
                      
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Start Course
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Learning Paths Tab */}
        <TabsContent value="paths" className="space-y-6">
          <div className="grid gap-6">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="space-y-4 flex-1">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{path.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{path.completedCourses}/{path.courses} courses completed</span>
                            <span>Estimated time: {path.estimatedTime}</span>
                            <span>Level: {path.level}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Overall Progress</span>
                            <span className="font-medium">{path.progress}%</span>
                          </div>
                          <Progress value={path.progress} className="h-2" />
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Button variant="outline">View Details</Button>
                        <Button className="bg-primary hover:bg-primary/90">
                          <Target className="w-4 h-4 mr-2" />
                          Continue Path
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Certificates Tab */}
        <TabsContent value="certificates" className="space-y-6">
          <div className="text-center py-12">
            <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Your Certificates</h3>
            <p className="text-muted-foreground mb-6">
              Complete courses to earn certificates and showcase your skills
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              <BookOpen className="w-4 h-4 mr-2" />
              Browse Courses
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
