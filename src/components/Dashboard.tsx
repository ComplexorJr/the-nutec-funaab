import { useState } from "react";
import { DashboardSidebar } from "./dashboard/DashboardSidebar";
import { DashboardHeader } from "./dashboard/DashboardHeader";
import { DashboardHome } from "./dashboard/DashboardHome";
import { LearningDashboard } from "./dashboard/LearningDashboard";
import { ProjectsPage } from "./dashboard/ProjectsPage";
import { EventsPage } from "./dashboard/EventsPage";
import { CommunityPage } from "./dashboard/CommunityPage";
import { BlogPage } from "./dashboard/BlogPage";
import { FeaturesPage } from "./dashboard/FeaturesPage";
import { HowItWorksPage } from "./dashboard/HowItWorksPage";
import { FAQPage } from "./dashboard/FAQPage";
import { ProfilePage } from "./dashboard/ProfilePage";
import { SettingsPage } from "./dashboard/SettingsPage";
import { AdminPage } from "./dashboard/AdminPage";

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

export type DashboardPage = 
  | "home" 
  | "learning" 
  | "projects" 
  | "events" 
  | "community" 
  | "blog" 
  | "features"
  | "how-it-works"
  | "faq"
  | "profile" 
  | "settings"
  | "admin";

export function Dashboard({ user, onLogout }: DashboardProps) {
  const [currentPage, setCurrentPage] = useState<DashboardPage>("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <DashboardHome user={user} />;
      case "learning":
        return <LearningDashboard user={user} />;
      case "projects":
        return <ProjectsPage user={user} />;
      case "events":
        return <EventsPage user={user} />;
      case "community":
        return <CommunityPage user={user} />;
      case "blog":
        return <BlogPage user={user} />;
      case "features":
        return <FeaturesPage user={user} />;
      case "how-it-works":
        return <HowItWorksPage user={user} />;
      case "faq":
        return <FAQPage user={user} />;
      case "profile":
        return <ProfilePage user={user} />;
      case "settings":
        return <SettingsPage user={user} onLogout={onLogout} />;
      case "admin":
        return <AdminPage currentUserEmail={user?.email} />;
      default:
        return <DashboardHome user={user} />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar 
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader 
          user={user}
          currentPage={currentPage}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          onLogout={onLogout}
        />
        
        <main className="flex-1 overflow-y-auto bg-muted/30">
          <div className="p-6">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}
