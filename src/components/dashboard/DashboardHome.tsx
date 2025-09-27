import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import {
  BookOpen,
  Trophy,
  Users,
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Target
} from "lucide-react";

interface DashboardHomeProps {
  user: any;
}

const statsCards = [
  {
    title: "Courses Completed",
    value: "12",
    change: "+2 this month",
    trend: "up",
    icon: BookOpen,
    color: "text-green-600"
  },
  {
    title: "Current Streak",
    value: "7 days",
    change: "Keep it up!",
    trend: "up",
    icon: Zap,
    color: "text-primary"
  },
  {
    title: "Community Rank",
    value: "#247",
    change: "+15 positions",
    trend: "up",
    icon: Trophy,
    color: "text-yellow-600"
  },
  {
    title: "Total Points",
    value: "2,450",
    change: "+180 this week",
    trend: "up",
    icon: Target,
    color: "text-blue-600"
  }
];

const recentCourses = [
  {
    title: "Advanced React Patterns",
    progress: 75,
    nextLesson: "Higher-Order Components",
    timeLeft: "2h 30m",
    instructor: "Sarah Chen"
  },
  {
    title: "Machine Learning Fundamentals",
    progress: 45,
    nextLesson: "Neural Networks Intro",
    timeLeft: "4h 15m",
    instructor: "Dr. Kumar"
  },
  {
    title: "DevOps with Docker",
    progress: 90,
    nextLesson: "Kubernetes Deployment",
    timeLeft: "1h 45m",
    instructor: "Mike Johnson"
  }
];

const upcomingEvents = [
  {
    title: "AI/ML Bootcamp Workshop",
    date: "Today, 2:00 PM",
    attendees: 45,
    type: "Workshop"
  },
  {
    title: "Tech Career Panel",
    date: "Tomorrow, 6:00 PM",
    attendees: 120,
    type: "Panel"
  },
  {
    title: "Open Source Contribution",
    date: "March 5, 10:00 AM",
    attendees: 30,
    type: "Hackathon"
  }
];

const achievements = [
  { title: "First Course Completed", icon: BookOpen, earned: true },
  { title: "7-Day Streak", icon: Zap, earned: true },
  { title: "Community Helper", icon: Users, earned: true },
  { title: "Project Showcase", icon: Trophy, earned: false },
  { title: "Course Creator", icon: Star, earned: false }
];

export function DashboardHome({ user: _user }: DashboardHomeProps) {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Welcome back, Alex! 🚀
                </h2>
                <p className="text-muted-foreground">
                  You're on a 7-day learning streak. Keep up the great work!
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Level 12 • 2,450 points</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-muted/50 ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Courses */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Continue Learning
                  </CardTitle>
                  <CardDescription>Pick up where you left off</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.title} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">{course.title}</h4>
                      <Badge variant="secondary">{course.progress}%</Badge>
                    </div>
                    <Progress value={course.progress} className="mb-2" />
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Next: {course.nextLesson}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.timeLeft}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Events & Achievements */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.title} className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-medium text-sm text-foreground">{event.title}</h5>
                      <Badge variant="outline" className="text-xs">{event.type}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{event.date}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Users className="w-3 h-3 mr-1" />
                      {event.attendees} attending
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {achievements.map((achievement) => (
                  <div key={achievement.title} className={`flex items-center space-x-3 p-2 rounded-lg ${achievement.earned ? 'bg-green-50 dark:bg-green-950/20' : 'bg-muted/30'}`}>
                    <div className={`p-1 rounded ${achievement.earned ? 'text-green-600' : 'text-muted-foreground'}`}>
                      {achievement.earned ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <achievement.icon className="w-4 h-4" />
                      )}
                    </div>
                    <span className={`text-sm ${achievement.earned ? 'text-green-700 dark:text-green-400' : 'text-muted-foreground'}`}>
                      {achievement.title}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
