import { useEffect } from "react";

const QuoteRedirect = () => {
  useEffect(() => {
    window.location.href = "https://app.usecanopy.com/c/localagent";
  }, []);

  return null;
};

export default QuoteRedirect;
