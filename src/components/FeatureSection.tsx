import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Search, 
  Shield, 
  FileText, 
  MessageSquare, 
  Award,
  MapPin,
  Briefcase 
} from "lucide-react";

const features = [
  {
    icon: User,
    title: "Professional Profiles",
    description: "Create comprehensive profiles showcasing your skills, experience, education, and portfolio items.",
    color: "text-primary"
  },
  {
    icon: Search,
    title: "Smart Discovery",
    description: "Advanced search and filtering to find talent by skills, location, experience level, and qualifications.",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "Admin verification system ensures credible profiles and authentic skill assessments.",
    color: "text-success"
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Upload certificates, qualifications, and downloadable CVs to showcase your credentials.",
    color: "text-accent"
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Built-in messaging system for seamless communication between talents and employers.",
    color: "text-primary"
  },
  {
    icon: Award,
    title: "Skill Assessment",
    description: "Tag and categorize skills with verification to build trust and credibility.",
    color: "text-secondary"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary">
            Platform Features
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Everything You Need to 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Succeed
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SkillConnect provides a comprehensive platform for showcasing talents 
            and connecting with the right opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Row */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-sm bg-gradient-to-br from-primary-light to-background">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl">Location-Based Matching</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Find opportunities and talent in your area with our location-based search and filtering system.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-gradient-to-br from-secondary-light to-background">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Briefcase className="w-6 h-6 text-secondary" />
                <CardTitle className="text-xl">Mobile-First Design</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access SkillConnect on any device with our responsive, mobile-friendly design built for modern users.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;