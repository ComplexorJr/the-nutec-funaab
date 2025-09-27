import { useState } from "react";
import { motion } from "framer-motion";
import { AnimationWrapper } from "./AnimationWrapper";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Mail, 
  Lock, 
  User, 
  GraduationCap,
  Shield,
  CheckCircle,
  ArrowRight,
  Chrome,
  Loader2
} from "lucide-react";


const benefits = [
  "Access to courses and content",
  "Join exclusive live events and webinars",
  "Connect with industry professionals",
  "Showcase your projects to the community",
  "Earn certificates and recognition",
  "Career guidance and job opportunities"
];

interface AuthSectionProps {
  onLogin: (email: string, password: string) => void;
  onSignup: (name: string, email: string, password: string) => void;
  onGoogleSignIn: () => void;
  isLoading: boolean;
}

export function AuthSection({ onLogin, onSignup, onGoogleSignIn, isLoading }: AuthSectionProps) {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });
  
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.email && loginForm.password) {
      onLogin(loginForm.email, loginForm.password);
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupForm.name && signupForm.email && signupForm.password) {
      onSignup(signupForm.name, signupForm.email, signupForm.password);
    }
  };

  return (
    <section id="auth" className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                <Shield className="w-4 h-4 mr-2" />
                Secure Access
              </Badge>
              <h2 className="mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Join the Nutec Community
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Create your account to unlock access to our comprehensive tech learning platform
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Benefits Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    What You'll Get
                  </CardTitle>
                  <CardDescription>
                    Unlock these amazing benefits when you join our platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong className="text-primary">Special Offer:</strong> Early members get lifetime access to all features
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Auth Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Get Started Today</CardTitle>
                  <CardDescription>
                    Choose your preferred method to access the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="signup" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                      <TabsTrigger value="login">Login</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="signup" className="space-y-4 mt-6">
                      <form onSubmit={handleSignupSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="signup-name">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input 
                              id="signup-name" 
                              placeholder="Enter your full name" 
                              className="pl-10"
                              value={signupForm.name}
                              onChange={(e) => setSignupForm({...signupForm, name: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="signup-email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input 
                              id="signup-email" 
                              type="email" 
                              placeholder="Enter your email" 
                              className="pl-10"
                              value={signupForm.email}
                              onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="signup-password">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input 
                              id="signup-password" 
                              type="password" 
                              placeholder="Create a password" 
                              className="pl-10"
                              value={signupForm.password}
                              onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <Button 
                          type="submit"
                          className="w-full bg-primary hover:bg-primary/90"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Creating Account...
                            </>
                          ) : (
                            <>
                              Create Account
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </form>
                    </TabsContent>
                    
                    <TabsContent value="login" className="space-y-4 mt-6">
                      <form onSubmit={handleLoginSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="login-email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input 
                              id="login-email" 
                              type="email" 
                              placeholder="Enter your email" 
                              className="pl-10"
                              value={loginForm.email}
                              onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="login-password">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input 
                              id="login-password" 
                              type="password" 
                              placeholder="Enter your password" 
                              className="pl-10"
                              value={loginForm.password}
                              onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <Button 
                          type="submit"
                          className="w-full bg-primary hover:bg-primary/90"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Signing In...
                            </>
                          ) : (
                            <>
                              Sign In
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-6 space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={onGoogleSignIn}
                        disabled={isLoading}
                      >
                        <Chrome className="w-4 h-4 mr-2" />
                        Continue with Google
                      </Button>
                      <Button variant="outline" className="w-full">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        University Email
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-xs text-muted-foreground">
                      By signing up, you agree to our{" "}
                      <a href="#" className="text-primary hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
