const QuoteRedirect = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <iframe 
        src="https://app.usecanopy.com/c/localagent" 
        className="w-full h-full"
        style={{ border: 0 }}
        title="Get a Quote"
      />
    </div>
  );
};

export default QuoteRedirect;
