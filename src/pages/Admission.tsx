import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, UserCheck, CreditCard, CheckCircle, Download } from "lucide-react";

const Admission = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete and submit the online application form with required documents"
    },
    {
      icon: UserCheck,
      title: "Entrance Assessment",
      description: "Attend the scheduled entrance test and interview"
    },
    {
      icon: CreditCard,
      title: "Fee Payment",
      description: "Pay admission and registration fees upon acceptance"
    },
    {
      icon: CheckCircle,
      title: "Enrollment Complete",
      description: "Receive confirmation and welcome kit"
    }
  ];

  const faqs = [
    {
      question: "What is the age requirement for admission?",
      answer: "For Grade 1, students must be at least 6 years old by September 1st of the admission year. For other grades, age requirements vary accordingly."
    },
    {
      question: "What documents are required?",
      answer: "Birth certificate, recent photographs, previous school records (if applicable), immunization records, and proof of residence."
    },
    {
      question: "When does the admission process start?",
      answer: "Admissions typically open in January for the following academic year starting in September. However, mid-year admissions may be available based on seat availability."
    },
    {
      question: "Is there an entrance test?",
      answer: "Yes, students applying for Grades 1 and above are required to take an age-appropriate entrance assessment to evaluate their academic readiness."
    },
    {
      question: "What is the fee structure?",
      answer: "Fee structure varies by grade level. Please download our prospectus or contact our admissions office for detailed information about tuition and other fees."
    },
    {
      question: "Do you offer scholarships?",
      answer: "Yes, we offer merit-based scholarships and financial aid to deserving students. Applications for scholarships are reviewed separately during the admission process."
    },
    {
      question: "Can I schedule a school tour?",
      answer: "Absolutely! We encourage prospective families to visit our campus. Please contact our admissions office to schedule a guided tour."
    },
    {
      question: "What is the student-teacher ratio?",
      answer: "We maintain a low student-teacher ratio of approximately 15:1 to ensure personalized attention for each student."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community of learners and begin an exciting educational journey
            </p>
            <Button size="lg" className="shadow-medium hover:shadow-strong">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Admission Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to secure your child's place at Anarmani Liberty School
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, idx) => (
              <Card key={idx} className="hover-lift relative">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Download Application Form</h3>
                    <p className="text-muted-foreground">
                      Get our detailed prospectus and application form
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default" className="gap-2">
                      <Download className="h-4 w-4" />
                      Prospectus
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Application Form
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about admissions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="border rounded-lg px-6 bg-card hover-lift"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our admissions team is here to help you through every step
          </p>
          <Button size="lg" variant="secondary" className="shadow-medium hover:shadow-strong">
            Contact Admissions Office
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Admission;
