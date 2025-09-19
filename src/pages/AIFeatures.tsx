import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Brain,
  Zap,
  MessageSquare,
  BarChart3,
  Shield,
  Users,
  Target,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Cpu,
  Network,
  Eye,
  TrendingUp,
  Globe,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { RequestDemoDialog } from "@/components/RequestDemoDialog";

export default function AIFeatures() {
  const aiCapabilities = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Intelligent Chatbots & Virtual Assistants",
      description:
        "Deploy AI-powered conversational agents that understand political context and can engage voters 24/7 with personalized responses.",
      features: [
        "Natural language processing for political conversations",
        "Multi-language support for diverse constituencies",
        "Integration with Claude, OpenAI GPT, and Gemini models",
        "Contextual awareness of campaign messaging",
        "Seamless handoff to human campaign staff",
      ],
      technologies: ["Claude AI", "OpenAI GPT-4", "Google Gemini", "Custom NLP Models"],
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning Voter Insights",
      description:
        "Harness advanced AI algorithms to analyze voter behavior patterns and predict engagement outcomes.",
      features: [
        "Predictive voter turnout modeling",
        "Sentiment analysis across social platforms",
        "Issue priority scoring and tracking",
        "Demographic trend analysis",
        "Real-time campaign performance optimization",
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Apache Spark"],
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "AI-Powered Content Generation",
      description:
        "Generate compelling, personalized campaign content at scale using state-of-the-art language models.",
      features: [
        "Personalized email and SMS campaigns",
        "Social media content optimization",
        "Policy position explanations",
        "Multilingual content translation",
        "A/B testing for message effectiveness",
      ],
      technologies: ["GPT-4 Turbo", "Claude 3", "Gemini Pro", "Custom Fine-tuned Models"],
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Predictive Analytics & Forecasting",
      description:
        "Leverage AI to forecast campaign outcomes and optimize resource allocation across channels.",
      features: [
        "Election outcome probability modeling",
        "Donation forecasting and optimization",
        "Volunteer engagement predictions",
        "Media spend ROI optimization",
        "Real-time strategy adjustment recommendations",
      ],
      technologies: [
        "Advanced ML Algorithms",
        "Time Series Analysis",
        "Ensemble Methods",
        "Deep Learning",
      ],
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Intelligent Voter Targeting",
      description:
        "Use AI to identify and segment voters with precision, maximizing campaign outreach effectiveness.",
      features: [
        "Lookalike voter modeling",
        "Persuadability scoring algorithms",
        "Geographic clustering analysis",
        "Cross-platform voter journey mapping",
        "Dynamic audience segmentation",
      ],
      technologies: [
        "Clustering Algorithms",
        "Propensity Modeling",
        "Graph Neural Networks",
        "Feature Engineering",
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "AI-Driven Compliance Automation",
      description:
        "Ensure regulatory compliance with intelligent monitoring and automated reporting systems.",
      features: [
        "Real-time FEC filing validation",
        "Automated disclosure requirements",
        "Contribution limit monitoring",
        "Expenditure categorization",
        "Audit trail generation",
      ],
      technologies: [
        "Rule-based AI",
        "Document Processing",
        "Anomaly Detection",
        "Automated Workflows",
      ],
    },
  ];

  const aiIntegrations = [
    {
      name: "Claude AI",
      description: "Advanced reasoning and analysis capabilities",
      logo: "/integrations/claude-logo.svg",
      capabilities: [
        "Long-form content analysis",
        "Complex reasoning",
        "Code generation",
        "Research assistance",
      ],
    },
    {
      name: "OpenAI GPT-4",
      description: "Leading language model for content generation",
      logo: "/integrations/openai-logo.svg",
      capabilities: [
        "Creative writing",
        "Multi-modal processing",
        "Function calling",
        "Fine-tuning support",
      ],
    },
    {
      name: "Google Gemini",
      description: "Multimodal AI for comprehensive analysis",
      logo: "/integrations/gemini-logo.svg",
      capabilities: [
        "Image analysis",
        "Video processing",
        "Multi-language support",
        "Real-time reasoning",
      ],
    },
    {
      name: "Custom Models",
      description: "Purpose-built models for political campaigns",
      logo: "/integrations/custom-ai-logo.svg",
      capabilities: [
        "Political sentiment analysis",
        "Voter behavior prediction",
        "Campaign optimization",
        "Compliance monitoring",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "50% Faster Campaign Operations",
      description:
        "Automate routine tasks and accelerate decision-making with AI-powered workflows",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "40% Higher Voter Engagement",
      description:
        "Personalized messaging and optimal timing increase response rates significantly",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Real-Time Insights",
      description:
        "Monitor campaign performance and voter sentiment with instant AI-powered analytics",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "100% Compliance Accuracy",
      description:
        "Eliminate filing errors and ensure regulatory compliance with automated AI systems",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SEOHead
        title="AI Features — Heimdall Strategy | Political Campaign AI Platform"
        description="Discover Heimdall's AI-powered features including Claude integration, OpenAI GPT-4, Google Gemini, machine learning analytics, and intelligent campaign automation for political campaigns."
        keywords="AI campaign features, Claude AI integration, OpenAI political campaigns, Google Gemini campaigns, machine learning voter analytics, AI chatbots politics, artificial intelligence campaign management, political AI automation, smart voter targeting, AI compliance monitoring"
        canonical="/ai-features"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 inline-flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            AI-Powered Campaign Technology
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Advanced AI Features for Modern Political Campaigns
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Leverage cutting-edge artificial intelligence including Claude, OpenAI GPT-4, and Google
            Gemini to transform your campaign operations, voter engagement, and compliance
            automation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <RequestDemoDialog>
              <Button size="lg" className="px-8">
                Request AI Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </RequestDemoDialog>
            <Button size="lg" variant="outline" asChild>
              <Link to="/features">View All Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Capabilities Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI Capabilities That Set Us Apart</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform integrates the latest AI technologies to give your campaign unprecedented
            intelligence and automation capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {aiCapabilities.map((capability, index) => (
            <Card key={index} className="border-muted hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">{capability.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{capability.title}</CardTitle>
                    <CardDescription className="text-base">
                      {capability.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground mb-2 font-medium">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {capability.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* AI Integrations */}
      <section className="container mx-auto px-6 py-16 bg-muted/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Leading AI Platform Integrations</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We integrate with the most advanced AI platforms to deliver unmatched campaign
            intelligence and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiIntegrations.map((integration, index) => (
            <Card
              key={index}
              className="border-muted text-center hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{integration.name}</CardTitle>
                <CardDescription className="text-sm">{integration.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  {integration.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center gap-2 justify-start">
                      <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />
                      <span className="text-left">{capability}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Measurable AI-Driven Results</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI features deliver quantifiable improvements to your campaign performance and
            efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-muted text-center hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="text-primary">{benefit.icon}</div>
                </div>
                <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 bg-primary text-primary-foreground">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Supercharge Your Campaign with AI?</h2>
          <p className="text-lg mb-8 opacity-90">
            See how Heimdall's AI features can transform your campaign operations, boost voter
            engagement, and ensure compliance automation. Join the future of political campaigning.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <RequestDemoDialog>
              <Button size="lg" variant="secondary" className="px-8">
                Schedule AI Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </RequestDemoDialog>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/contact">Talk to AI Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
