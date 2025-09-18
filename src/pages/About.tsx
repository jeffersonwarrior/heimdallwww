import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Shield, Sparkles, ExternalLink, ArrowRight, Linkedin } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Helmet>
        <title>About Us — Heimdall Strategy</title>
        <meta
          name="description"
          content="Meet the Heimdall leadership team and learn about our mission. Backed by 5IR Funds and built to power omni-channel financial communications."
        />
      </Helmet>

      {/* Hero */}
      <section className="container mx-auto px-6 pt-24 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 inline-flex items-center gap-1">
            <Shield className="h-3 w-3" />
            Backed by 5IR Funds
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Building the Financial Communications Backbone
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We unite banking, payments, and omni-channel communications so organizations can serve
            customers with speed, compliance, and clarity.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/careers">Careers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Power bold ideas with real strategy. We deliver a unified, usage-based platform that
                makes financial transactions and customer communications simple, secure, and
                scalable.
              </p>
            </CardContent>
          </Card>
          <Card className="border-muted">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                What We Deliver
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Banking services and card issuing with enterprise controls</li>
                <li>Payments including donations, cards, ACH, and crypto</li>
                <li>Omni-channel outreach across web, mobile, social, voice, and SMS</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-muted">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                How We Work
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Outcome-driven roadmaps and measurable delivery</li>
                <li>API-first integrations and security by design</li>
                <li>Transparent, usage-based pricing — the platform itself is free</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leadership */}
      <section className="container mx-auto px-6 py-16 border-t">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Leadership</h2>
          <p className="text-lg text-muted-foreground">
            Experienced operators combining technology innovation, operational excellence, and
            field-tested organizing to scale impactful programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Kevin Numerick */}
          <Card className="border-muted">
            <CardHeader className="flex flex-col items-center text-center">
              <Avatar className="h-16 w-16 mb-3">
                <AvatarImage src="/team/kevin-numerick.jpg" alt="Kevin Numerick" />
                <AvatarFallback>KN</AvatarFallback>
              </Avatar>
              <CardTitle>Kevin Numerick</CardTitle>
              <CardDescription>Chief Executive Officer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Kevin is a seasoned operator in political and grassroots organizing, combining a
                strong marketing foundation with a strategist’s discipline. He integrates proven
                community organizing methods with data-informed outreach to deliver measurable
                outcomes.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Organizing, messaging, targeting, and voter dynamics</li>
                <li>High-clarity communication and team leadership</li>
                <li>Operational planning, field execution, and continuous improvement</li>
              </ul>
              <p>
                Focus areas: nonprofits, community organizing, field operations, and creative media
                (photography).
              </p>
              <div className="pt-2 flex justify-center">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Kevin Numerick on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Sam Nevarez */}
          <Card className="border-muted">
            <CardHeader className="flex flex-col items-center text-center">
              <Avatar className="h-16 w-16 mb-3">
                <AvatarImage src="/team/sam-nevarez.jpg" alt="Sam Nevarez" />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <CardTitle>Sam Nevarez</CardTitle>
              <CardDescription>Chief Operating Officer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                As COO, Sam translates strategy into consistent delivery — building systems, teams,
                and processes that scale. Sam oversees operations, internal platforms, and
                cross-functional performance to ensure programs execute predictably at pace.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Operational excellence and scalable systems</li>
                <li>Cross-functional leadership and program delivery</li>
                <li>Finance, compliance, people operations, and core infrastructure</li>
              </ul>
              <p>
                Sam builds durable partnerships, protects the client experience, and supports
                mission-aligned growth in regulated, high-stakes environments.
              </p>
              <div className="pt-2 flex justify-center">
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noreferrer" aria-label="Sam Nevarez on LinkedIn">
                    <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Jefferson Nunn */}
          <Card className="border-muted">
            <CardHeader className="flex flex-col items-center text-center">
              <Avatar className="h-16 w-16 mb-3">
                <AvatarImage src="/team/jefferson-nunn.jpg" alt="Jefferson Nunn" />
                <AvatarFallback>JN</AvatarFallback>
              </Avatar>
              <CardTitle>Jefferson Nunn</CardTitle>
              <CardDescription>Chief Technology Officer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Jefferson is a technology leader and public service advocate with 25+ years in
                software and infrastructure. A cryptocurrency expert, Forbes contributor, and
                podcast host, he enables organizations to scale through practical, secure
                innovation.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Advised 150+ blockchain companies across product, security, and go-to-market
                </li>
                <li>Led initiatives contributing to an $800M GoWireless exit value</li>
                <li>Hosts “Around the Block,” interviewing leaders in crypto and technology</li>
              </ul>
              <p>
                At Heimdall, Jefferson owns platform architecture, data integrity, and API-first
                integrations that keep banking, payments, and communications reliable at scale.
              </p>
              <div className="flex items-center justify-center gap-2 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Jefferson Nunn on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investors & Board */}
      <section className="container mx-auto px-6 py-16 border-t">
        <div className="max-w-4xl mx-auto">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle>Investors & Board</CardTitle>
              <CardDescription>
                We’re proud to be backed by 5IR Funds — a venture firm focused on AI, blockchain,
                quantum, and other frontier technologies.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-4">
              <div>
                <p className="mb-2">
                  Investor:{" "}
                  <a
                    href="https://www.5irfunds.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    5IR Funds
                  </a>
                </p>
                <p>Board of Directors: John (5IR Funds), Jefferson Nunn, and Sam Nevarez.</p>
              </div>
              <p>
                5IR Funds backs visionary founders with deep technical diligence and collaborative
                mentorship — helping teams scale with clarity and speed.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Partner with Heimdall</h3>
          <p className="text-muted-foreground mb-6">
            Whether you’re modernizing financial operations or scaling omni-channel outreach, we’ll
            help you deliver with confidence.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Let’s Talk</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
