import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  CreditCard,
  MessageSquare,
  Phone,
  Mail,
  Globe,
  Building,
  ArrowRight,
  Check,
  Calculator,
  TrendingDown,
  Zap,
  Info,
  DollarSign,
  Sparkles,
  Users,
  Shield,
  FileText,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Pricing() {
  const [monthlyVolume, setMonthlyVolume] = useState([50000]);
  const [smsVolume, setSmsVolume] = useState([10000]);

  // Calculate CC processing rate based on volume
  const getCCRate = (volume: number) => {
    if (volume >= 1000000) return 2.3;
    if (volume >= 500000) return 2.5;
    if (volume >= 100000) return 2.7;
    return 2.9;
  };

  // Calculate SMS rate based on volume
  const getSMSRate = (volume: number) => {
    if (volume >= 100000) return 0.015;
    if (volume >= 50000) return 0.016;
    if (volume >= 10000) return 0.017;
    return 0.019;
  };

  const ccRate = getCCRate(monthlyVolume[0]);
  const smsRate = getSMSRate(smsVolume[0]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  const paymentPricing = [
    {
      title: "Credit/Debit Cards",
      icon: <CreditCard className="h-5 w-5" />,
      baseRate: "2.9%",
      volumeRate: "Lower based on volume",
      description: "Usage-based pricing. No platform fees.",
      details: [
        "All major cards accepted",
        "Supports donations and subscriptions",
        "Volume discounts available",
        "Next-day deposits available",
      ],
    },
    {
      title: "ACH Transfers",
      icon: <Building className="h-5 w-5" />,
      baseRate: "Low, usage-based",
      volumeRate: "Contact us for rates",
      description: "Bank-to-bank transfers",
      details: [
        "Recurring payments",
        "Batch processing",
        "Same-day ACH available",
        "Volume discounts available",
      ],
    },
    {
      title: "Cryptocurrency",
      icon: <DollarSign className="h-5 w-5" />,
      baseRate: "Low, usage-based",
      volumeRate: "Contact us for rates",
      description: "BTC, ETH, USDC and more",
      details: [
        "Instant conversion available",
        "Settlement to fiat",
        "Compliance-first",
        "Volume discounts available",
      ],
    },
  ];

  const communicationPricing = [
    {
      title: "MMS (Texting)",
      icon: <MessageSquare className="h-5 w-5" />,
      baseRate: "$0.019",
      volumeRate: "Lower based on volume",
      description: "Per MMS message",
      details: [
        "2-way messaging",
        "Media attachments supported",
        "Delivery receipts",
        "Short codes available",
      ],
    },
    {
      title: "Voice Calls",
      icon: <Phone className="h-5 w-5" />,
      baseRate: "Low, usage-based",
      volumeRate: "Contact us for rates",
      description: "Per minute",
      details: [
        "Inbound & outbound",
        "Call recording included",
        "IVR capabilities",
        "International calling available",
      ],
    },
    {
      title: "Email",
      icon: <Mail className="h-5 w-5" />,
      baseRate: "Low, usage-based",
      volumeRate: "Contact us for rates",
      description: "Per email",
      details: [
        "Transactional & marketing",
        "High deliverability",
        "Templates included",
        "Analytics & tracking",
      ],
    },
  ];

  const platformFeatures = [
    { icon: <Database className="h-4 w-4" />, text: "Free data storage & analytics" },
    { icon: <Shield className="h-4 w-4" />, text: "Enterprise security included" },
    { icon: <Globe className="h-4 w-4" />, text: "API access at no extra cost" },
    { icon: <Users className="h-4 w-4" />, text: "Unlimited team members" },
    { icon: <FileText className="h-4 w-4" />, text: "Real-time reporting" },
    { icon: <Zap className="h-4 w-4" />, text: "99.99% uptime SLA" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Helmet>
        <title>Usage-Based Pricing — Heimdall Strategy</title>
        <meta
          name="description"
          content="Transparent, usage-based pricing. No platform fees. Pay only for what you use with volume discounts available."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4" variant="secondary">
            <Sparkles className="h-3 w-3 mr-1" />
            No Platform Fees
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Simple, Usage-Based Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            <span className="font-semibold">
              $0 monthly fees. $0 setup costs. $0 hidden charges.
            </span>
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Pay only for what you use. Volume discounts automatically applied as you grow.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/features">View Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Free Platform Notice */}
      <section className="container mx-auto px-6 py-8">
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="py-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Info className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Platform Access is Completely Free</h3>
                <p className="text-muted-foreground">
                  Access our entire platform, including data storage, analytics dashboards, API
                  access, and all core features at no cost. You only pay transaction fees when you
                  process payments or send communications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pricing Calculator */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pricing Calculator</h2>
          <p className="text-lg text-muted-foreground">
            See how volume discounts automatically reduce your rates
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <p className="col-span-full text-xs text-muted-foreground text-center -mt-6 mb-2">
            Example rates for illustration; final rates depend on your volume and underwriting.
          </p>
          {/* Credit Card Processing Calculator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Credit Card Processing
              </CardTitle>
              <CardDescription>Estimate your monthly processing costs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Monthly Volume</label>
                  <span className="text-sm font-bold">{formatCurrency(monthlyVolume[0])}</span>
                </div>
                <Slider
                  value={monthlyVolume}
                  onValueChange={setMonthlyVolume}
                  min={10000}
                  max={2000000}
                  step={10000}
                  className="mb-4"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span>Your Rate</span>
                  <span className="text-xl font-bold text-primary">{ccRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Estimated Monthly Cost</span>
                  <span className="font-semibold">
                    {formatCurrency(monthlyVolume[0] * (ccRate / 100))}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <TrendingDown className="h-4 w-4" />
                  <span>Saving {(2.9 - ccRate).toFixed(1)}% compared to base rate</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SMS Calculator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                SMS/MMS Messaging
              </CardTitle>
              <CardDescription>Estimate your monthly messaging costs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Monthly Messages</label>
                  <span className="text-sm font-bold">{formatNumber(smsVolume[0])}</span>
                </div>
                <Slider
                  value={smsVolume}
                  onValueChange={setSmsVolume}
                  min={1000}
                  max={500000}
                  step={1000}
                  className="mb-4"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span>Your Rate</span>
                  <span className="text-xl font-bold text-primary">${smsRate.toFixed(3)}/msg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Estimated Monthly Cost</span>
                  <span className="font-semibold">{formatCurrency(smsVolume[0] * smsRate)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <TrendingDown className="h-4 w-4" />
                  <span>Saving ${((0.019 - smsRate) * 1000).toFixed(0)} per 1000 messages</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Pricing Tabs */}
      <section className="container mx-auto px-6 py-16 border-t">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Transparent Pricing for Every Service</h2>
          <p className="text-lg text-muted-foreground">
            No surprises. Volume discounts automatically applied.
          </p>
        </div>

        <Tabs defaultValue="payments" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="communications">Communications</TabsTrigger>
            <TabsTrigger value="banking">Banking</TabsTrigger>
          </TabsList>

          <TabsContent value="payments" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {paymentPricing.map((item, index) => (
                <Card key={index} className="relative">
                  {index === 0 && (
                    <Badge className="absolute -top-3 -right-2" variant="default">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">{item.icon}</div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">{item.baseRate}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="mb-4">
                      {item.volumeRate}
                    </Badge>
                    <ul className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="communications" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {communicationPricing.map((item, index) => (
                <Card key={index} className="relative">
                  {index === 0 && (
                    <Badge className="absolute -top-3 -right-2" variant="default">
                      Best Value
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">{item.icon}</div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">{item.baseRate}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="mb-4">
                      {item.volumeRate}
                    </Badge>
                    <ul className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="banking" className="space-y-6">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Banking Services</CardTitle>
                  <CardDescription>
                    Platform access is free. Usage-based pricing applies to financial rails.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" /> No platform fees — core banking UI
                      and APIs included
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" /> Card issuing available — contact us
                      for per-card costs
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" /> Bill pay and transfers —
                      usage-based transaction fees
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" /> Real-time reporting and analytics
                      included
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Volume Discounts */}
      <section className="container mx-auto px-6 py-16 border-t">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Volume Discount Tiers</h2>
            <p className="text-lg text-muted-foreground">
              Automatic discounts as your business grows — no negotiation needed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <p className="col-span-full text-xs text-muted-foreground text-center -mt-6 mb-2">
              Example discount tiers; actual rates are tailored to your usage.
            </p>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Processing Tiers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm font-medium">Monthly Volume</span>
                    <span className="text-sm font-medium">Rate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>$0 - $100K</span>
                    <Badge variant="outline">2.9%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>$100K - $500K</span>
                    <Badge variant="outline">2.7%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>$500K - $1M</span>
                    <Badge variant="outline">2.5%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>$1M+</span>
                    <Badge variant="default">2.3%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Messaging Tiers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm font-medium">Monthly Messages</span>
                    <span className="text-sm font-medium">Rate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>0 - 10K</span>
                    <Badge variant="outline">$0.019</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>10K - 50K</span>
                    <Badge variant="outline">$0.017</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>50K - 100K</span>
                    <Badge variant="outline">$0.016</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>100K+</span>
                    <Badge variant="default">$0.015</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Free */}
      <section className="container mx-auto px-6 py-16 border-t">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything Else is Free</h2>
          <p className="text-lg text-muted-foreground">Full platform access with no hidden fees</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {platformFeatures.map((feature, index) => (
            <Card key={index} className="border-muted">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{feature.icon}</div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-16 border-t">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are there really no monthly fees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! There are absolutely no monthly platform fees, setup fees, or hidden charges.
                  You only pay transaction fees when you actually process payments or send
                  communications. All platform features, data storage, and analytics are completely
                  free.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do volume discounts work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Volume discounts are automatically applied based on your monthly usage. As your
                  volume increases, your rates decrease automatically — no need to negotiate or
                  change plans. Your rate adjusts in real-time based on your rolling 30-day volume.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What about international transactions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  International payment processing and communications rates vary by country and
                  carrier. Contact our team for a detailed international rate card tailored to your
                  target markets.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Can I get custom pricing for enterprise volume?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely! For businesses processing over $5M monthly or sending 1M+ messages, we
                  offer custom enterprise pricing. Contact our sales team for a personalized quote
                  based on your specific needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Start Free. Pay As You Grow.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of businesses saving money with our transparent, usage-based pricing
                model.
              </p>
              <div className="flex gap-4 justify-center mb-6">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">
                    <Calculator className="mr-2 h-4 w-4" />
                    Get Custom Quote
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                No credit card required • Start processing immediately • Cancel anytime
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
