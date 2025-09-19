import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CreditCard,
  Building,
  MessageSquare,
  Shield,
  Globe,
  Smartphone,
  Mail,
  Users,
  TrendingUp,
  Lock,
  Zap,
  BarChart3,
  Wallet,
  ArrowRight,
  CheckCircle2,
  Coins,
  Receipt,
  FileText,
  Phone,
  MonitorSmartphone,
  Headphones,
  Bot,
  MessagesSquare,
  UserCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Features() {
  const bankingFeatures = [
    {
      icon: <Receipt className="h-5 w-5" />,
      title: "Business Bill Payments",
      description:
        "Streamline accounts payable with automated bill processing, scheduled payments, and vendor management.",
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Debit Card Issuing",
      description:
        "Issue virtual and physical debit cards with real-time spend controls, customizable limits, and instant card provisioning.",
    },
    {
      icon: <Wallet className="h-5 w-5" />,
      title: "Digital Wallets",
      description:
        "Enable Apple Pay, Google Pay, and Samsung Pay integration for seamless mobile transactions.",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Financial Reporting",
      description:
        "Comprehensive financial software suite with real-time reporting, analytics, and reconciliation tools.",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Cash Flow Management",
      description:
        "Advanced forecasting and cash flow optimization with automated sweep accounts and liquidity management.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Fraud Protection",
      description:
        "Enterprise-grade security with AI-powered fraud detection, transaction monitoring, and instant alerts.",
    },
  ];

  const paymentFeatures = [
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Universal Payment Processing",
      description:
        "Accept all major credit cards, debit cards, and digital wallets with competitive interchange rates.",
    },
    {
      icon: <Coins className="h-5 w-5" />,
      title: "Cryptocurrency Payments",
      description:
        "Accept Bitcoin, Ethereum, and other major cryptocurrencies with automatic conversion to fiat.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Donation Management",
      description:
        "Purpose-built tools for nonprofits including recurring donations, donor management, and tax receipts.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Instant Settlement",
      description:
        "Same-day and instant funding options to improve cash flow and business operations.",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Global Payments",
      description:
        "Process payments in 135+ currencies with automatic FX conversion and competitive rates.",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Payment Analytics",
      description:
        "Real-time dashboards with transaction insights, chargeback management, and revenue optimization.",
    },
  ];

  const communicationChannels = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Web Portal",
      description:
        "Responsive web application with self-service capabilities and real-time updates.",
      capabilities: [
        "Live chat integration",
        "Document uploads",
        "Transaction history",
        "Account management",
      ],
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Mobile Apps",
      description:
        "Native iOS and Android applications with biometric authentication and push notifications.",
      capabilities: ["Mobile check deposit", "Card controls", "P2P payments", "In-app messaging"],
    },
    {
      icon: <MessagesSquare className="h-5 w-5" />,
      title: "Social Media Integration",
      description: "Engage customers on their preferred social platforms with unified messaging.",
      capabilities: [
        "Facebook Messenger",
        "WhatsApp Business",
        "Instagram DM",
        "Twitter/X integration",
      ],
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email & SMS",
      description: "Automated email and SMS communications with personalization and scheduling.",
      capabilities: ["Transactional emails", "Marketing campaigns", "2-way SMS", "MMS support"],
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Voice & IVR",
      description: "Intelligent voice response system with natural language processing.",
      capabilities: [
        "Smart call routing",
        "Voice authentication",
        "Call recording",
        "Voicemail transcription",
      ],
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: "AI Chatbots",
      description: "24/7 AI-powered support with seamless handoff to human agents when needed.",
      capabilities: [
        "Natural language understanding",
        "Multi-language support",
        "Sentiment analysis",
        "Predictive responses",
      ],
    },
  ];

  const platformBenefits = [
    {
      title: "Unified Dashboard",
      description: "Single pane of glass for all financial and communication activities",
    },
    {
      title: "API-First Architecture",
      description: "RESTful APIs and webhooks for seamless integration with existing systems",
    },
    {
      title: "Compliance Ready",
      description: "PCI DSS Level 1, SOC 2 Type II, and bank-grade security standards",
    },
    {
      title: "White-Label Options",
      description: "Fully customizable branding and user experience for your business",
    },
    {
      title: "Real-Time Sync",
      description: "Instant data synchronization across all channels and platforms",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and dedicated account management",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SEOHead
        title="Platform Features — Heimdall Strategy"
        description="Explore Heimdall's comprehensive fintech platform featuring banking services, payment processing, and omni-channel communications with AI-powered automation."
        keywords="platform features, banking services, payment processing, omnichannel communications, fintech platform, AI automation, political campaign technology"
        canonical="/features"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4" variant="secondary">
            <Zap className="h-3 w-3 mr-1" />
            Enterprise Fintech Platform
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Complete Financial & Communication Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            One unified platform combining banking services, payment processing, and omni-channel
            communications to transform how businesses engage with their customers.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features Tabs */}
      <section className="container mx-auto px-6 py-16">
        <Tabs defaultValue="banking" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="banking" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span className="hidden sm:inline">Banking</span>
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Payments</span>
            </TabsTrigger>
            <TabsTrigger value="communications" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Communications</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="banking" className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Banking Services</h2>
              <p className="text-lg text-muted-foreground">
                Full-stack banking infrastructure designed for modern businesses. Issue cards,
                manage payments, and access comprehensive financial tools—all through a single
                platform.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bankingFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="border-muted hover:border-primary/50 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Payment Processing</h2>
              <p className="text-lg text-muted-foreground">
                Accept payments anywhere, from anyone. Traditional cards, digital wallets, or
                cryptocurrency— we process it all with industry-leading security and instant
                settlement options.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paymentFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="border-muted hover:border-primary/50 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="communications" className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Omni-Channel Communications</h2>
              <p className="text-lg text-muted-foreground">
                Meet your customers wherever they are. Our platform seamlessly integrates with every
                communication channel, ensuring consistent experiences across web, mobile, social,
                and beyond.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communicationChannels.map((channel, index) => (
                <Card
                  key={index}
                  className="border-muted hover:border-primary/50 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {channel.icon}
                      </div>
                      <CardTitle className="text-lg">{channel.title}</CardTitle>
                    </div>
                    <CardDescription>{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {channel.capabilities.map((capability, capIndex) => (
                        <li
                          key={capIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Platform Benefits */}
      <section className="container mx-auto px-6 py-16 border-t">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Heimdall</h2>
          <p className="text-lg text-muted-foreground">
            Built for scale, designed for simplicity. Our platform brings together everything you
            need to manage financial operations and customer communications in one place.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platformBenefits.map((benefit, index) => (
            <div key={index} className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="container mx-auto px-6 py-16 border-t">
        <div className="bg-muted/50 rounded-2xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">
                <Lock className="h-3 w-3 mr-1" />
                Enterprise Ready
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                Seamless Integration with Your Existing Stack
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our API-first approach means Heimdall works with the tools you already use. Connect
                your CRM, ERP, accounting software, and more through our robust integration
                ecosystem.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>RESTful APIs with comprehensive documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Real-time webhooks for instant notifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Pre-built integrations with popular platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Custom integration support from our team</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link to="/contact">
                  Talk to Integration Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-muted">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">CRM Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Salesforce, HubSpot, Pipedrive, and more
                  </p>
                </CardContent>
              </Card>
              <Card className="border-muted">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Accounting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">QuickBooks, Xero, NetSuite, SAP</p>
                </CardContent>
              </Card>
              <Card className="border-muted">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">E-Commerce</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Shopify, WooCommerce, Magento, BigCommerce
                  </p>
                </CardContent>
              </Card>
              <Card className="border-muted">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Mailchimp, Klaviyo, Marketo, ActiveCampaign
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Operations?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of businesses already using Heimdall to streamline their financial
            services and customer communications.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">Compare Plans</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </main>
  );
}
