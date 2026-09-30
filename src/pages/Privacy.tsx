import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import cfLogo from "@/assets/cf-logo-white.png";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Ukaia Rogers - COUNTRY Financial®</title>
        <meta
          name="description"
          content="Privacy policy for ukaia.agency. How Ukaia Rogers Agency handles Google Ads lead form details, site analytics, and requests to access or delete contact information."
        />
        <link rel="canonical" href="https://ukaia.agency/privacy" />
        <meta property="og:title" content="Privacy Policy - Ukaia Rogers" />
        <meta
          property="og:description"
          content="How Ukaia Rogers Agency handles information submitted through Google Ads lead forms and this website."
        />
        <meta property="og:url" content="https://ukaia.agency/privacy" />
        <meta name="twitter:title" content="Privacy Policy - Ukaia Rogers" />
        <meta
          name="twitter:description"
          content="How Ukaia Rogers Agency handles information submitted through Google Ads lead forms and this website."
        />
      </Helmet>
      <main className="bg-background flex flex-col items-center p-4 py-8 md:py-12">
        <Card className="w-full max-w-2xl overflow-hidden shadow-2xl border-0">
          <div className="bg-primary p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <img
                src={cfLogo}
                alt="Country Financial Logo"
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              Privacy Policy
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/90">
              Ukaia Rogers · Ukaia Rogers Agency
            </p>
          </div>

          <div className="p-8 md:p-12 bg-card space-y-8 text-foreground">
            <p className="text-sm text-muted-foreground">
              Effective September 30, 2026. This notice applies to{" "}
              <span className="whitespace-nowrap">ukaia.agency</span>.
            </p>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">Who operates this site</h2>
              <p className="text-base leading-relaxed">
                This website is operated by Ukaia Rogers of Ukaia Rogers
                Insurance Agency LLC, an independent insurance agency, doing
                business as Ukaia Rogers Agency. Ukaia Rogers is a COUNTRY
                Financial® Financial Advisor and insurance agent, licensed in
                Oregon, Washington, Idaho, and Alaska.
              </p>
              <p className="text-base leading-relaxed">
                Individuals with the title Financial Advisor are Financial
                Advisors of COUNTRY Trust Bank®. They are also Registered
                Representatives of COUNTRY® Capital Management Company and
                Insurance Agents of COUNTRY Mutual Insurance Company® and
                COUNTRY Life Insurance Company® and their subsidiaries.
                Insurance products and services are offered by COUNTRY
                companies. Securities and investment advisory services are
                offered through COUNTRY Capital Management Company®, a
                registered investment adviser.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">
                Information from Google Ads lead forms
              </h2>
              <p className="text-base leading-relaxed">
                If you submit a lead form on a Google advertisement for this
                agency, the form typically asks for:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-base leading-relaxed">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>ZIP code or city</li>
                <li>
                  The insurance or financial product you are interested in
                </li>
              </ul>
              <p className="text-base leading-relaxed">
                The fields on a given form may vary. We use what you submit to
                respond to your inquiry and follow up about insurance and
                financial services — for example, to call, text, or email you,
                prepare information you asked for, or schedule a conversation.
                We may share those details with COUNTRY Financial affiliates
                only as needed to quote or service the request you made.
              </p>
              <p className="text-base leading-relaxed">
                We keep this information so we can respond to your lead and
                keep a record of that conversation. We do not sell it to data
                brokers or as a marketing list.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">Cookies and analytics</h2>
              <p className="text-base leading-relaxed">
                This site uses Google Tag Manager (GTM-P8DW2SWF) and Google
                Analytics 4 (G-RG8HVP2VTH). Those tools may store cookies or
                similar identifiers to measure visits, pages viewed, and how
                the site is used. You can limit or block cookies in your
                browser settings. Analytics cookies are separate from the
                contact details you choose to send on a lead form.
              </p>
              <p className="text-base leading-relaxed">
                Scheduling and quote tools linked or embedded on this site are
                run by other companies. Information you enter there is also
                handled under their privacy practices.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">
                Access or deletion of contact data
              </h2>
              <p className="text-base leading-relaxed">
                To ask what contact information we have from a form you
                submitted, or to request that we delete it, email{" "}
                <a
                  href="mailto:ukaia.rogers@countryfinancial.com"
                  className="text-primary hover:underline break-all"
                >
                  ukaia.rogers@countryfinancial.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:9712416140"
                  className="text-primary hover:underline"
                >
                  (971) 241-6140
                </a>
                . Include the name and the email or phone number you used on
                the form so we can locate the right record.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">Privacy questions</h2>
              <p className="text-base leading-relaxed">
                Ukaia Rogers Insurance Agency LLC
                <br />
                Email:{" "}
                <a
                  href="mailto:ukaia.rogers@countryfinancial.com"
                  className="text-primary hover:underline break-all"
                >
                  ukaia.rogers@countryfinancial.com
                </a>
                <br />
                Cell/Text:{" "}
                <a
                  href="tel:9712416140"
                  className="text-primary hover:underline"
                >
                  (971) 241-6140
                </a>
              </p>
            </section>

            <p className="text-center pt-2">
              <a href="/" className="text-primary hover:underline">
                Return to home
              </a>
            </p>
          </div>
        </Card>
      </main>
    </>
  );
};

export default Privacy;
