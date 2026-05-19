import { Helmet } from "react-helmet-async";

const QuoteRedirect = () => {
  return (
    <>
      <Helmet>
        <title>Get an Insurance Quote - Ukaia Rogers - COUNTRY Financial®</title>
        <meta
          name="description"
          content="Start your free insurance quote online with Ukaia Rogers, COUNTRY Financial® representative."
        />
        <link rel="canonical" href="https://ukaia.agency/quote" />
        <meta property="og:title" content="Get an Insurance Quote - Ukaia Rogers" />
        <meta
          property="og:description"
          content="Start your free insurance quote online with Ukaia Rogers."
        />
        <meta property="og:url" content="https://ukaia.agency/quote" />
      </Helmet>
      <div className="fixed inset-0 w-full h-full">
        <iframe
          src="https://app.usecanopy.com/c/localagent"
          className="w-full h-full"
          style={{ border: 0 }}
          title="Get a Quote"
        />
      </div>
    </>
  );
};

export default QuoteRedirect;
