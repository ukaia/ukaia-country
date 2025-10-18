import { CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import cfLogo from "@/assets/cf-logo-white.png";

const ThankYou = () => {
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
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Thank You!
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Thank you for your interest in a quote
          </p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 bg-card">
          <div className="space-y-6 text-center">
            <p className="text-lg text-foreground">
              Myself or a member of my team will get back to you promptly.
            </p>
            
            <p className="text-base text-muted-foreground">
              If you have a time that works best, please use the link below to schedule a meeting with us.
            </p>

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <a 
                  href="https://outlook.office.com/book/UkaiaRogersAgencyCOUNTRYFinancial@countryfinancial.com/?ismsaljsauthenabled" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Schedule online
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ThankYou;
