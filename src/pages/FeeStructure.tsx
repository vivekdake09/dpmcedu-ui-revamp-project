
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Download, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeeStructure: React.FC = () => {
  const engineeringFees = [
    { trade: "Fitter", duration: "2 Years", admissionFee: 5000, tuitionFee: 25000, examFee: 2500, totalFee: 32500 },
    { trade: "Electrician", duration: "2 Years", admissionFee: 5000, tuitionFee: 25000, examFee: 2500, totalFee: 32500 },
    { trade: "Mechanic Motor Vehicle", duration: "2 Years", admissionFee: 5000, tuitionFee: 27000, examFee: 2500, totalFee: 34500 },
    { trade: "Welder", duration: "1 Year", admissionFee: 5000, tuitionFee: 20000, examFee: 2500, totalFee: 27500 },
    { trade: "Turner", duration: "2 Years", admissionFee: 5000, tuitionFee: 25000, examFee: 2500, totalFee: 32500 }
  ];

  const nonEngineeringFees = [
    { trade: "Computer Operator and Programming Assistant (COPA)", duration: "1 Year", admissionFee: 5000, tuitionFee: 20000, examFee: 2500, totalFee: 27500 },
    { trade: "Stenographer (English)", duration: "1 Year", admissionFee: 5000, tuitionFee: 18000, examFee: 2500, totalFee: 25500 },
    { trade: "Secretarial Practice (English)", duration: "1 Year", admissionFee: 5000, tuitionFee: 18000, examFee: 2500, totalFee: 25500 },
    { trade: "Dress Making", duration: "1 Year", admissionFee: 5000, tuitionFee: 15000, examFee: 2500, totalFee: 22500 }
  ];
  
  const additionalFees = [
    { item: "Caution Money (Refundable)", amount: 2000, remarks: "One-time payment, refundable after course completion" },
    { item: "Uniform Fee", amount: 1500, remarks: "One-time payment" },
    { item: "ID Card Fee", amount: 200, remarks: "One-time payment" },
    { item: "Library Fee", amount: 1000, remarks: "Annual" },
    { item: "Tool Kit/Lab Material", amount: 2500, remarks: "Varies as per trade" },
    { item: "Hostel Fee (Optional)", amount: 48000, remarks: "Annual, includes accommodation and meals" }
  ];
  
  const faqs = [
    { question: "When is the fee payment due?", 
      answer: "The admission fee and first semester fee must be paid at the time of admission. The second semester fee should be paid before the beginning of the second semester." },
    { question: "What are the accepted payment methods?", 
      answer: "We accept payments through cash, demand draft, online bank transfer, and major debit/credit cards." },
    { question: "Is there any provision for installment payment?", 
      answer: "Yes, we offer installment payment options for the tuition fee. Please contact the accounts department for details." },
    { question: "Are there any scholarships available?", 
      answer: "Yes, we offer merit-based scholarships and also facilitate government scholarships for eligible students. Contact our scholarship cell for more information." },
    { question: "Is there any fee concession for economically weaker sections?", 
      answer: "Yes, we offer fee concessions for deserving candidates from economically weaker sections. Eligibility criteria apply." },
    { question: "What is the refund policy if I withdraw my admission?", 
      answer: "Refund is provided as per NCVT norms. Generally, admission fee is non-refundable, and tuition fee is refunded on a pro-rata basis depending on when the withdrawal is made." }
  ];

  return (
    <PageLayout title="Fee Structure">
      <div className="space-y-8">
        <Card className="p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <Info className="h-5 w-5 text-dpmc-blue mr-2" />
            <p className="text-lg">
              The following fee structure is applicable for the academic year 2025-26. All fees are in Indian Rupees (INR).
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-dpmc-blue mb-4">Engineering Trades Fee Structure</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>Fee structure for Engineering Trades (2025-26)</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Trade</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Admission Fee</TableHead>
                      <TableHead>Tuition Fee (per year)</TableHead>
                      <TableHead>Exam Fee</TableHead>
                      <TableHead>Total Fee</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {engineeringFees.map((fee, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{fee.trade}</TableCell>
                        <TableCell>{fee.duration}</TableCell>
                        <TableCell>₹{fee.admissionFee}</TableCell>
                        <TableCell>₹{fee.tuitionFee}</TableCell>
                        <TableCell>₹{fee.examFee}</TableCell>
                        <TableCell className="font-bold">₹{fee.totalFee}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dpmc-blue mb-4">Non-Engineering Trades Fee Structure</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>Fee structure for Non-Engineering Trades (2025-26)</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Trade</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Admission Fee</TableHead>
                      <TableHead>Tuition Fee (per year)</TableHead>
                      <TableHead>Exam Fee</TableHead>
                      <TableHead>Total Fee</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {nonEngineeringFees.map((fee, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{fee.trade}</TableCell>
                        <TableCell>{fee.duration}</TableCell>
                        <TableCell>₹{fee.admissionFee}</TableCell>
                        <TableCell>₹{fee.tuitionFee}</TableCell>
                        <TableCell>₹{fee.examFee}</TableCell>
                        <TableCell className="font-bold">₹{fee.totalFee}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dpmc-blue mb-4">Additional Fees</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>Additional fees applicable to all students</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Remarks</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {additionalFees.map((fee, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{fee.item}</TableCell>
                        <TableCell>₹{fee.amount}</TableCell>
                        <TableCell>{fee.remarks}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Complete Fee Structure PDF
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
              <h2 className="text-xl font-bold text-dpmc-blue mb-4">Payment Schedule</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">At the time of Admission</h3>
                  <p>Admission Fee + 1st Semester Fee + Additional Fees</p>
                </div>
                <div>
                  <h3 className="font-semibold">Before Second Semester</h3>
                  <p>2nd Semester Fee</p>
                </div>
                <div>
                  <h3 className="font-semibold">Before Second Year (for 2 year courses)</h3>
                  <p>3rd Semester Fee</p>
                </div>
                <div>
                  <h3 className="font-semibold">Before Fourth Semester</h3>
                  <p>4th Semester Fee + Examination Fee</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-lg">
              <h2 className="text-xl font-bold text-dpmc-blue mb-4">Fee Payment Methods</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cash payment at the fee counter</li>
                <li>Demand Draft in favor of "DPMC Private ITI" payable at Jaipur</li>
                <li>Online Bank Transfer (details provided at the time of admission)</li>
                <li>Credit/Debit Card at the fee counter</li>
              </ul>
            </Card>
            
            <Card className="p-6 shadow-lg">
              <h2 className="text-xl font-bold text-dpmc-blue mb-4">Accounts Office</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>Room No. 105, Admin Block</p>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+91 98290 62662 (Ext. 105)</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>accounts@dpmcedu.com</p>
                </div>
                <div>
                  <h3 className="font-semibold">Timing</h3>
                  <p>Monday to Saturday, 9:00 AM to 3:00 PM</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <Card className="p-6 bg-dpmc-red/10 border border-dpmc-red/20 text-center">
          <h2 className="text-2xl font-bold text-dpmc-red mb-2">Ready to Enroll?</h2>
          <p className="mb-6">Begin your journey towards a successful career with DPMC Private ITI</p>
          <Button asChild size="lg" className="bg-dpmc-red hover:bg-red-700">
            <Link to="/apply-online">Apply Now</Link>
          </Button>
        </Card>
      </div>
    </PageLayout>
  );
};

export default FeeStructure;
