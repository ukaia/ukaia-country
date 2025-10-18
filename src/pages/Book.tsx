import { Card } from "@/components/ui/card";
import cfLogo from "@/assets/cf-logo-white.png";

const Book = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center p-4">
      <Card className="w-full max-w-6xl overflow-hidden shadow-2xl border-0">
        {/* Header with Logo */}
        <div className="bg-primary p-6 md:p-8 text-center">
          <div className="flex justify-center">
            <img 
              src={cfLogo} 
              alt="Country Financial Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </div>
        </div>

        {/* Embedded Scheduling */}
        <div className="bg-card">
          <iframe
            src="https://outlook.office.com/book/UkaiaRogersAgencyCOUNTRYFinancial@countryfinancial.com/?ismsaljsauthenabled"
            className="w-full h-[800px] border-0"
            title="Schedule a Meeting"
          />
        </div>
      </Card>
    </div>
  );
};

export default Book;
