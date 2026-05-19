import { Helmet } from "react-helmet-async";
import ContactCard from "@/components/ContactCard";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ukaia Rogers - COUNTRY Financial® Insurance Agent</title>
        <meta
          name="description"
          content="Ukaia Rogers, COUNTRY Financial® rep licensed in OR, WA, ID, and AK. Call 971-241-6140 for a free insurance quote."
        />
        <link rel="canonical" href="https://ukaia.agency/" />
        <meta property="og:title" content="Ukaia Rogers - COUNTRY Financial® Insurance Agent" />
        <meta
          property="og:description"
          content="Personalized auto, home, life, and business insurance from Ukaia Rogers. Licensed in OR, WA, ID, and AK."
        />
        <meta property="og:url" content="https://ukaia.agency/" />
        <meta name="twitter:title" content="Ukaia Rogers - COUNTRY Financial® Insurance Agent" />
        <meta
          name="twitter:description"
          content="Personalized auto, home, life, and business insurance from Ukaia Rogers. Licensed in OR, WA, ID, and AK."
        />
      </Helmet>
      <ContactCard />
    </>
  );
};

export default Index;
