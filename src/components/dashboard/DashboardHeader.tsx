import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { useTheme } from "../ThemeProvider";
import { DashboardPage } from "../Dashboard";
import {
  Search,
  Bell,
  Menu,
  Moon,
  Sun,
  User,
  Settings,
  LogOut,
  Crown,
  Zap
} from "lucide-react";

interface DashboardHeaderProps {
  user: any;
  currentPage: DashboardPage;
  onToggleSidebar: () => void;
  onLogout: () => void;
}

const pageLabels: Record<DashboardPage, string> = {
  home: "Dashboard",
  learning: "Learning Center",
  projects: "My Projects",
  events: "Events",
  community: "Community",
  blog: "Blog",
  features: "Platform Features",
  "how-it-works": "How It Works",
  faq: "Frequently Asked Questions",
  profile: "My Profile",
  settings: "Settings"
};

export function DashboardHeader({ user, currentPage, onToggleSidebar, onLogout }: DashboardHeaderProps) {
  const { theme, toggleTheme } = useTheme();

  // Mock user data
  const userData = user || {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "",
    level: "Member",
    points: 2450,
    notifications: 3
  };

  return (
    <header className="bg-background border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {pageLabels[currentPage]}
            </h1>
            <p className="text-sm text-muted-foreground">
              Welcome back, {userData.name.split(' ')[0]}! 👋
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search courses, projects, or users..."
              className="pl-10 bg-muted/50 border-0 focus:bg-background"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* User Level & Points */}
          <div className="hidden sm:flex items-center space-x-2">
            <Badge variant="outline" className="border-primary/20 text-primary">
              <Crown className="w-3 h-3 mr-1" />
              {userData.level}
            </Badge>
            <Badge variant="secondary">
              <Zap className="w-3 h-3 mr-1" />
              {userData.points} pts
            </Badge>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="sm"
            className="relative text-muted-foreground hover:text-foreground"
          >
            <Bell className="w-4 h-4" />
            {userData.notifications > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center"
              >
                {userData.notifications}
              </Badge>
            )}
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {userData.name.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{userData.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {userData.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="cursor-pointer text-destructive focus:text-destructive"
                onClick={onLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
