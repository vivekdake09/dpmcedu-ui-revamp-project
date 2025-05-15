
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, ClipboardCheck, User, BarChart4, Book, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionProcess: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Application Submission",
      description: "Fill and submit the application form either online or at the institute with required documents.",
      icon: <FileText className="h-8 w-8 text-dpmc-blue" />,
      details: "You can apply online through our website or visit our admission office to obtain and submit a physical application form. Make sure to fill all the required fields accurately and attach the necessary documents."
    },
    {
      id: 2,
      title: "Document Verification",
      description: "Submit all required documents for verification by the admission committee.",
      icon: <ClipboardCheck className="h-8 w-8 text-dpmc-blue" />,
      details: "Original documents need to be presented for verification. Our admission committee will verify your educational qualifications, age proof, address proof, and other required documents as per the trade requirements."
    },
    {
      id: 3,
      title: "Entrance Test/Interview",
      description: "Appear for an entrance test and/or interview as per the trade requirements.",
      icon: <BarChart4 className="h-8 w-8 text-dpmc-blue" />,
      details: "Depending on the trade you're applying for, you may need to appear for an entrance test to assess your basic knowledge and aptitude. Some trades also require a personal interview to evaluate your interest and suitability for the course."
    },
    {
      id: 4,
      title: "Merit List & Selection",
      description: "Selection is based on merit list prepared according to the entrance test/interview results.",
      icon: <User className="h-8 w-8 text-dpmc-blue" />,
      details: "Based on your performance in the entrance test and/or interview, a merit list will be prepared. Selection is done strictly as per the merit list and availability of seats in the respective trades."
    },
    {
      id: 5,
      title: "Fee Payment",
      description: "Pay the required fees to confirm your admission to the selected trade.",
      icon: <Calendar className="h-8 w-8 text-dpmc-blue" />,
      details: "Once selected, you need to pay the admission fee and first semester/year fee as applicable within the stipulated time to confirm your seat. Payment can be made online or at our fee counter through cash/DD/cheque."
    },
    {
      id: 6,
      title: "Orientation & Classes",
      description: "Attend the orientation program and start your regular classes as per schedule.",
      icon: <Book className="h-8 w-8 text-dpmc-blue" />,
      details: "After completing the admission formalities, you will be invited for an orientation program where you'll be introduced to the institute, faculty, facilities, rules, and regulations. Regular classes will commence as per the academic calendar."
    }
  ];

  const faqs = [
    {
      question: "What is the admission cycle at DPMC Private ITI?",
      answer: "DPMC Private ITI follows an annual admission cycle. The main admission process starts in July-August every year. However, we also have a limited winter admission cycle in January for select trades based on seat availability."
    },
    {
      question: "What documents are required for admission?",
      answer: "Required documents include: 10th/8th mark sheet and certificate (as per trade eligibility), address proof, identity proof, caste certificate (if applicable), 4 recent passport-sized photographs, character certificate from previous institution, and Aadhaar card."
    },
    {
      question: "Is there any age limit for admission?",
      answer: "Yes, the minimum age requirement is 14 years as of 1st July of the admission year. There is no upper age limit for most trades."
    },
    {
      question: "Can I apply for more than one trade?",
      answer: "Yes, you can apply for multiple trades by indicating your preferences in the application form. However, you will be admitted to only one trade based on your merit and preference."
    },
    {
      question: "Is hostel facility available for students?",
      answer: "Yes, limited hostel facility is available for outstation students on first-come-first-served basis. Separate hostels are available for boys and girls."
    },
    {
      question: "What is the mode of payment for fees?",
      answer: "We accept payments through various modes including cash, DD, cheque, online bank transfer, and major credit/debit cards."
    }
  ];

  return (
    <PageLayout title="Admission Process">
      <div className="space-y-8">
        <Card className="p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-dpmc-blue mb-6">Admission Process at DPMC Private ITI</h2>
          <p className="mb-6">
            At DPMC Private ITI, we have a straightforward and transparent admission process designed to select deserving 
            candidates for our various trades. Follow these steps to secure your admission:
          </p>
          
          <div className="relative">
            {/* Step line */}
            <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-dpmc-blue/30"></div>
            
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.id} className="flex gap-6">
                  <div className="relative z-10">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-dpmc-blue text-white font-bold text-sm">
                      {step.id}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                      <div className="bg-dpmc-blue/10 p-2 rounded-full">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-dpmc-blue">{step.title}</h3>
                    </div>
                    <p className="mb-2">{step.description}</p>
                    <p className="text-gray-600 text-sm">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/apply-online" className="px-8">Start Application</Link>
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 shadow-lg col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-dpmc-blue mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 shadow-lg bg-dpmc-blue/5">
              <h2 className="text-xl font-bold text-dpmc-blue mb-4">Important Dates</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Application Start Date</h3>
                  <p>15th June 2025</p>
                </div>
                <div>
                  <h3 className="font-semibold">Last Date for Application</h3>
                  <p>15th July 2025</p>
                </div>
                <div>
                  <h3 className="font-semibold">Entrance Test</h3>
                  <p>22nd July 2025</p>
                </div>
                <div>
                  <h3 className="font-semibold">Merit List Declaration</h3>
                  <p>30th July 2025</p>
                </div>
                <div>
                  <h3 className="font-semibold">Fee Payment Deadline</h3>
                  <p>10th August 2025</p>
                </div>
                <div>
                  <h3 className="font-semibold">Orientation Program</h3>
                  <p>12th August 2025</p>
                </div>
                <div>
                  <h3 className="font-semibold">Classes Begin</h3>
                  <p>16th August 2025</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-lg">
              <h2 className="text-xl font-bold text-dpmc-blue mb-4">Contact for Admission</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">Admission Office</h3>
                  <p>Room No. 101, Admin Block</p>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+91 98290 62662</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>admissions@dpmcedu.com</p>
                </div>
                <div>
                  <h3 className="font-semibold">Timing</h3>
                  <p>Monday to Saturday, 9:00 AM to 5:00 PM</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-6 shadow-lg bg-dpmc-red/10 border border-dpmc-red/20">
          <CardContent className="p-0 text-center">
            <BadgeCheck className="h-14 w-14 mx-auto text-dpmc-red mb-4" />
            <h2 className="text-2xl font-bold text-dpmc-red mb-2">Ready to Begin Your Journey?</h2>
            <p className="mb-6">Apply for admission today and take the first step towards a successful career</p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-dpmc-red hover:bg-red-700">
                <Link to="/apply-online">Apply Now</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/fee-structure">View Fee Structure</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default AdmissionProcess;
