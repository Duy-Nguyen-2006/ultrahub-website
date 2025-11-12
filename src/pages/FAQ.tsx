import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Are the accounts authentic?",
      answer: "All accounts are 100% authentic, purchased directly from the providers. We guarantee a full refund if the account is not as described."
    },
    {
      question: "How long does delivery take?",
      answer: "After successful payment, you will receive your account immediately via Messenger. Maximum delivery time is 5-10 minutes during business hours."
    },
    {
      question: "Is there a warranty?",
      answer: "All accounts come with a 30-day warranty. If you experience any issues during the warranty period, we will replace the account or provide a 100% refund."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support bank transfers, Momo, ZaloPay, and popular e-wallets in Vietnam."
    },
    {
      question: "Can I return or exchange?",
      answer: "Yes, you can return or exchange within the first 7 days if the account is not as described or has technical issues. Please contact us via Messenger for support."
    },
    {
      question: "Are there usage limitations on the accounts?",
      answer: "No, all accounts have full features just like the original. You can use them freely for the entire purchased period."
    },
    {
      question: "How do I get support when using the account?",
      answer: "We provide 24/7 support via Messenger. You can message us anytime and our team will respond as soon as possible."
    },
    {
      question: "Do prices change?",
      answer: "Product prices may change depending on promotional campaigns. Follow our fanpage to stay updated on the latest deals."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-subtle py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12 animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 shadow-card animate-fade-up">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-12 text-center animate-fade-up">
              <p className="text-muted-foreground mb-4">
                Can&apos;t find the answer you need?
              </p>
              <a
                href="https://www.facebook.com/tra.giang.771296"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-glow transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
