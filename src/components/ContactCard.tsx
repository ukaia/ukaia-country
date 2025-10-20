import { Phone, Mail, Calendar, FileText, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import cfLogo from "@/assets/cf-logo-white.png";

const ContactCard = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl overflow-hidden shadow-2xl border-0">
        {/* Header with Logo */}
        <div className="bg-primary p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src={cfLogo} 
              alt="Country Financial Logo" 
              className="h-20 md:h-24 w-auto"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            Ukaia Rogers
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 font-semibold mb-4">
            COUNTRY Financial® Representative
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
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <a href="tel:9712430235">
                  <Phone className="mr-2 h-5 w-5" />
                  Call/Text Me
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <a href="mailto:ukaia.rogers@countryfinancial.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
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
                    href="tel:9712430235" 
                    className="text-base hover:text-primary transition-colors"
                  >
                    (971) 243-0235
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
        </div>
      </Card>
    </div>
  );
};

export default ContactCard;
