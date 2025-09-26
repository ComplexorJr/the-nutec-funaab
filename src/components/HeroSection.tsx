import { Button } from "./ui/button";
import { ArrowRight, Play, Zap, Users, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { AnimationWrapper, floatingAnimation, buttonHover, buttonTap } from "./AnimationWrapper";

interface HeroSectionProps {
  onOpenAuthModal: () => void;
}

export function HeroSection({ onOpenAuthModal }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1753998941488-fc3064ab6094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNvZGluZyUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc1NjU5MTkxNXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Futuristic coding technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full"
          animate={floatingAnimation}
          transition={{ delay: 0 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-2 h-2 bg-accent rounded-full"
          animate={floatingAnimation}
          transition={{ delay: 1, duration: 3 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-4 h-4 bg-primary/50 rounded-full"
          animate={floatingAnimation}
          transition={{ delay: 0.5, duration: 5 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-2 h-2 bg-accent/70 rounded-full"
          animate={floatingAnimation}
          transition={{ delay: 1.5, duration: 3.5 }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <AnimationWrapper variant="scaleIn" delay={0.2}>
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <Zap className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm text-primary font-medium">Empowering Future Creators</span>
                </div>
              </AnimationWrapper>
              
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  Learn.
                </motion.span>{" "}
                <motion.span 
                  className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  Build.
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                >
                  Transform.
                </motion.span>
              </motion.h1>
              
              <AnimationWrapper variant="fadeInUp" delay={1.2}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Welcome to Nutec - the premier tech education platform where innovation meets learning. 
                  Create your account to access courses, connect with industry experts, and join 
                  a thriving community of tech professionals and creators.
                </p>
              </AnimationWrapper>
            </div>

            {/* CTAs */}
            <AnimationWrapper variant="fadeInUp" delay={1.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 group"
                    onClick={onOpenAuthModal}
                  >
                    Join Nutec Today
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary/20 hover:bg-primary/5 group"
                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Explore Features
                  </Button>
                </motion.div>
              </div>
            </AnimationWrapper>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: {},
                animate: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 1.6
                  }
                }
              }}
            >
              <motion.div 
                className="text-center space-y-2"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
              >
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Users className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div 
                  className="text-2xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  10K+
                </motion.div>
                <div className="text-sm text-muted-foreground">Active Learners</div>
              </motion.div>
              
              <motion.div 
                className="text-center space-y-2"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
              >
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BookOpen className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div 
                  className="text-2xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                >
                  500+
                </motion.div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </motion.div>
              
              <motion.div 
                className="text-center space-y-2"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
              >
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Zap className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div 
                  className="text-2xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.4, duration: 0.5 }}
                >
                  95%
                </motion.div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual element */}
          <AnimationWrapper variant="fadeInRight" delay={0.6}>
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 space-y-6"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-primary rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div 
                    className="w-3 h-3 bg-accent rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div 
                    className="w-3 h-3 bg-muted rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </motion.div>
                
                <motion.div 
                  className="space-y-4"
                  variants={{
                    initial: {},
                    animate: {
                      transition: {
                        staggerChildren: 0.2,
                        delayChildren: 1.4
                      }
                    }
                  }}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div 
                    className="h-4 bg-gradient-to-r from-primary/30 to-transparent rounded"
                    variants={{
                      initial: { width: 0 },
                      animate: { 
                        width: "100%",
                        transition: { duration: 1, ease: "easeOut" }
                      }
                    }}
                  />
                  <motion.div 
                    className="h-4 bg-gradient-to-r from-accent/30 to-transparent rounded w-3/4"
                    variants={{
                      initial: { width: 0 },
                      animate: { 
                        width: "75%",
                        transition: { duration: 1, ease: "easeOut" }
                      }
                    }}
                  />
                  <motion.div 
                    className="h-4 bg-gradient-to-r from-primary/20 to-transparent rounded w-1/2"
                    variants={{
                      initial: { width: 0 },
                      animate: { 
                        width: "50%",
                        transition: { duration: 1, ease: "easeOut" }
                      }
                    }}
                  />
                </motion.div>
                
                <motion.div 
                  className="border-t border-border pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Next cohort starts:</span>
                    <motion.span 
                      className="text-sm font-medium text-primary"
                      animate={{ 
                        color: ["#ff6b35", "#ff8f65", "#ff6b35"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      March 15, 2025
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}