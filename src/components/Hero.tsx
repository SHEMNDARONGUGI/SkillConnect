import { Button } from "@/components/ui/button";
import { Search, Users, Award, MapPin } from "lucide-react";
import heroImage from "@/assets/skillconnect-hero.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-light via-background to-secondary-light">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Connect Kenya's 
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {" "}Skilled Youth
                </span>
                {" "}with Opportunities
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                Showcase your talents, build your professional network, and discover 
                meaningful opportunities that match your unique skills.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="min-w-[200px]">
                <Search className="w-5 h-5 mr-2" />
                Explore Talent
              </Button>
              <Button variant="outline" size="xl" className="min-w-[200px]">
                Join as Professional
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Skilled Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Skill Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Young professionals showcasing skills" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card p-4 rounded-lg shadow-lg border">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">Verified Skills</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg shadow-lg border">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Connect Instantly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;