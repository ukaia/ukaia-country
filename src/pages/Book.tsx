import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import cfLogo from "@/assets/cf-logo-white.png";

const Book = () => {
  return (
    <>
      <Helmet>
        <title>Book a Meeting with Ukaia Rogers - COUNTRY Financial®</title>
        <meta
          name="description"
          content="Schedule a meeting with Ukaia Rogers, COUNTRY Financial® representative. Pick a time that works for you."
        />
        <link rel="canonical" href="https://ukaia.agency/book" />
        <meta property="og:title" content="Book a Meeting with Ukaia Rogers" />
        <meta
          property="og:description"
          content="Schedule a meeting with Ukaia Rogers, COUNTRY Financial® representative."
        />
        <meta property="og:url" content="https://ukaia.agency/book" />
        <meta name="twitter:title" content="Book a Meeting with Ukaia Rogers" />
        <meta
          name="twitter:description"
          content="Schedule a meeting with Ukaia Rogers, COUNTRY Financial® representative."
        />
      </Helmet>
      <main className="min-h-screen bg-background flex flex-col items-center p-4">
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
      </main>
    </>
  );
};

export default Book;
