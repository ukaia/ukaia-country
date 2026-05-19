import { Phone, Mail, Calendar, FileText, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import cfLogo from "@/assets/cf-logo-white.png";
import ukaiaPhoto from "@/assets/ukaia-photo.png";

const ContactCard = () => {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl overflow-hidden shadow-2xl border-0">
        {/* Header with Logo */}
        <div className="bg-primary p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <img
              src={cfLogo}
              alt="Country Financial Logo"
              width="240"
              height="96"
              className="h-20 md:h-24 w-auto"
            />
          </div>
          <div className="flex justify-center mb-6">
            <img
              src={ukaiaPhoto}
              alt="Ukaia Rogers"
              width="160"
              height="160"
              fetchPriority="high"
              className="h-40 w-auto rounded-lg border-4 border-primary-foreground/20 shadow-lg"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            Ukaia Rogers
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 font-semibold mb-4">
            COUNTRY Financial® &nbsp;Financial Advisor
          </p>
          <p className="text-sm md:text-base text-primary-foreground/80">
            Licensed in Oregon, Washington, Idaho, and Alaska
          </p>
        </div>

        {/* Contact Information */}
        <div className="p-8 md:p-12 bg-card">
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                asChild
                size="lg"
                className="w-full md:col-span-2 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <a 
                  className="canopy-connect-embed"
                  href="https://app.usecanopy.com/c/localagent" 
                  target="_blank"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Get a Quote
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <a href="tel:9712416140">
                  <Phone className="mr-2 h-5 w-5" />
                  Call/Text Me
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <a href="mailto:ukaia.rogers@countryfinancial.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <a href="/book">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Meeting
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <a href="https://maps.app.goo.gl/YbK1b77b5NcD9DCh9?g_st=ipc" target="_blank" rel="noopener noreferrer">
                  <Star className="mr-2 h-5 w-5" />
                  Leave a Review
                </a>
              </Button>
            </div>

            {/* Contact Details */}
            <div className="pt-6 border-t border-border space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Cell/Text</p>
                  <a 
                    href="tel:9712416140" 
                    className="text-base hover:text-primary transition-colors"
                  >
                    (971) 241-6140
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Office</p>
                  <a 
                    href="tel:503-454-4495" 
                    className="text-base hover:text-primary transition-colors"
                  >
                    503-454-4495
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <a 
                    href="mailto:ukaia.rogers@countryfinancial.com" 
                    className="text-base hover:text-primary transition-colors break-all"
                  >
                    ukaia.rogers@countryfinancial.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="pt-6 mt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              Ukaia Rogers Insurance Agency LLC is an independent insurance agency. 
              COUNTRY Financial® is a family of affiliated companies (collectively, COUNTRY) located in Bloomington, IL. 
              Insurance products and services are offered by COUNTRY Mutual Insurance Company®, COUNTRY Preferred Insurance Company®, 
              COUNTRY Casualty Insurance Company® and COUNTRY Financial® Property & Casualty Insurance Company. 
              Not all products are available in all states. Life insurance and annuities are offered through COUNTRY Investors Life Assurance Company®, 
              Bloomington, IL. Securities and investment advisory services are offered through COUNTRY Capital Management Company®, 
              a registered investment adviser. COUNTRY Capital Management Company and its representatives do not provide tax or legal advice.
            </p>
            <p className="text-xs text-muted-foreground text-center leading-relaxed mt-4">
              Individuals with the title "Financial Advisor" are Financial Advisors of COUNTRY Trust Bank®.
              They are also Registered Representatives of COUNTRY® Capital Management Company and Insurance Agents
              of COUNTRY Mutual Insurance Company® and COUNTRY Life Insurance Company® and their subsidiaries.
            </p>
            <p className="text-xs text-muted-foreground text-center leading-relaxed mt-4">
              Investment management, retirement, trust and planning services provided by COUNTRY Trust Bank®
              <br />
              1701 Towanda Avenue | PO Box 2020 | Bloomington, IL 61702-2020
              <br />
              tel (866) 268-6879
            </p>
            <p className="text-xs text-muted-foreground text-center leading-relaxed mt-4">
              Registered Broker-Dealer offering securities products and services.
              <br />
              COUNTRY® Capital Management Company
              <br />
              1701 Towanda Avenue | PO Box 2222 Bloomington, IL 61702-2222
              <br />
              tel (866) 268-6879 | Member FINRA
            </p>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default ContactCard;
