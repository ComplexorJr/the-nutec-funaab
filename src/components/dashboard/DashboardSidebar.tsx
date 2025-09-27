import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { DashboardPage } from "../Dashboard";
import {
  Home,
  BookOpen,
  FolderOpen,
  Calendar,
  Users,
  PenTool,
  Zap,
  HelpCircle,
  Lightbulb,
  User,
  Settings,
  X
} from "lucide-react";

interface DashboardSidebarProps {
  currentPage: DashboardPage;
  onPageChange: (page: DashboardPage) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const navigationItems = [
  {
    section: "Main",
    items: [
      { id: "home" as DashboardPage, label: "Dashboard", icon: Home },
      { id: "learning" as DashboardPage, label: "Learning", icon: BookOpen, badge: "12 New" },
      { id: "projects" as DashboardPage, label: "Projects", icon: FolderOpen },
      { id: "events" as DashboardPage, label: "Events", icon: Calendar, badge: "3 Today" },
    ]
  },
  {
    section: "Community",
    items: [
      { id: "community" as DashboardPage, label: "Community", icon: Users },
      { id: "blog" as DashboardPage, label: "Blog", icon: PenTool },
    ]
  },
  {
    section: "Resources",
    items: [
      { id: "features" as DashboardPage, label: "Features", icon: Zap },
      { id: "how-it-works" as DashboardPage, label: "How It Works", icon: Lightbulb },
      { id: "faq" as DashboardPage, label: "FAQ", icon: HelpCircle },
    ]
  },
  {
    section: "Account",
    items: [
      { id: "profile" as DashboardPage, label: "Profile", icon: User },
      { id: "settings" as DashboardPage, label: "Settings", icon: Settings },
    ]
  }
];

export function DashboardSidebar({ currentPage, onPageChange, isOpen, onToggle }: DashboardSidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <motion.div
        className={`
          fixed lg:relative lg:translate-x-0 top-0 left-0 z-50 h-full
          w-72 bg-sidebar border-r border-sidebar-border
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        initial={false}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
            <div className="flex items-center space-x-2">
              <motion.div 
                className="w-8 h-8 bg-gradient-to-br from-sidebar-primary to-accent rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-sidebar-primary-foreground font-bold">N</span>
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-sidebar-primary to-accent bg-clip-text text-transparent">
                Nutec
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="lg:hidden text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {navigationItems.map((section) => (
              <div key={section.section} className="space-y-2">
                <h3 className="px-3 text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider">
                  {section.section}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Button
                      key={item.id}
                      variant={currentPage === item.id ? "default" : "ghost"}
                      className={`
                        w-full justify-start h-10 px-3 
                        ${currentPage === item.id 
                          ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm" 
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        }
                      `}
                      onClick={() => {
                        onPageChange(item.id);
                        if (window.innerWidth < 1024) onToggle();
                      }}
                    >
                      <item.icon className="w-4 h-4 mr-3" />
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <Badge 
                          variant="secondary" 
                          className="ml-2 text-xs bg-sidebar-primary/10 text-sidebar-primary hover:bg-sidebar-primary/20"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Button>
                  ))}
                </div>
                {section.section !== "Account" && (
                  <Separator className="bg-sidebar-border" />
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="p-3 bg-gradient-to-r from-sidebar-primary/10 to-accent/10 rounded-lg border border-sidebar-primary/20">
              <p className="text-xs text-sidebar-foreground/80 mb-2">
                🚀 <strong>Tip:</strong> Complete courses to earn badges and climb the leaderboard!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
