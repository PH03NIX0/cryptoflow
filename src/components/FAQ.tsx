import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How secure is CryptoFlow?",
    answer:
      "CryptoFlow employs bank-level security measures including 256-bit encryption, two-factor authentication, and cold storage for the majority of digital assets. We conduct regular security audits and maintain insurance coverage for digital assets stored on our platform.",
  },
  {
    question: "What cryptocurrencies can I trade on CryptoFlow?",
    answer:
      "We support over 50 major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), Litecoin (LTC), and many more. Our Pro and Enterprise plans offer access to an even wider selection of digital assets.",
  },
  {
    question: "What are the fees for using CryptoFlow?",
    answer:
      "Our fee structure is transparent and competitive. Basic accounts have standard trading fees, Pro accounts enjoy reduced fees of 0.1%, and Enterprise accounts benefit from zero trading fees. There are no hidden charges or deposit fees.",
  },
  {
    question: "How do I deposit funds into my CryptoFlow account?",
    answer:
      "You can deposit funds via bank transfer, credit/debit card, or cryptocurrency transfer. Simply navigate to your wallet, select 'Deposit', choose your preferred method, and follow the instructions. Most deposits are processed within minutes.",
  },
  {
    question: "Is CryptoFlow available in my country?",
    answer:
      "CryptoFlow is available in over 100 countries worldwide. However, due to regulatory requirements, we may have restrictions in certain jurisdictions. Please check our supported countries list or contact our support team to confirm availability in your region.",
  },
  {
    question: "How do I get started with CryptoFlow?",
    answer:
      "Getting started is simple! Click the 'Get Started' button, create your account with an email and password, complete the identity verification process, and you'll be ready to start trading. The entire process typically takes less than 10 minutes.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: '#0E0B1F' }}>
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#A78BFA' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto px-4" style={{ color: '#9CA3AF' }}>
            Got questions about CryptoFlow? We've got answers. If you don't see what you're looking for, reach out to our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg px-4 sm:px-6"
              style={{
                backgroundColor: '#1E1B2E',
                borderColor: '#393d4b',
                borderWidth: '1px',
              }}
            >
              <AccordionTrigger
                className="text-left text-base sm:text-lg font-semibold text-white hover:no-underline py-4 sm:py-6"
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className="text-sm sm:text-base pb-4 sm:pb-6"
                style={{ color: '#9CA3AF' }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
