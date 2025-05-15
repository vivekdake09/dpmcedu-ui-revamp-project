
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Calendar, Award, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const NonEngineeringTrades: React.FC = () => {
  const trades = [
    {
      id: 1,
      name: "Computer Operator and Programming Assistant (COPA)",
      duration: "1 Year",
      eligibility: "10th Pass",
      description: "Learn computer operations, office applications, programming fundamentals, and database management to work as a computer operator or programmer assistant.",
      icon: <BookOpen className="h-10 w-10 text-dpmc-blue" />,
      skills: [
        "MS Office applications",
        "Data entry & processing",
        "Basic programming",
        "Database management",
        "Networking fundamentals",
        "Hardware troubleshooting"
      ],
      career: [
        "Computer Operator",
        "Data Entry Operator",
        "Office Assistant",
        "Junior Programmer",
        "IT Support Executive"
      ]
    },
    {
      id: 2,
      name: "Stenographer (English)",
      duration: "1 Year",
      eligibility: "10th Pass",
      description: "Learn shorthand writing, typing, and office management skills to work as a stenographer or executive assistant in various organizations.",
      icon: <BookOpen className="h-10 w-10 text-dpmc-blue" />,
      skills: [
        "Shorthand writing",
        "Typing skills",
        "Office management",
        "Communication skills",
        "Document preparation",
        "Time management"
      ],
      career: [
        "Stenographer",
        "Executive Assistant",
        "Office Secretary",
        "Court Reporter",
        "Administrative Assistant"
      ]
    },
    {
      id: 3,
      name: "Secretarial Practice (English)",
      duration: "1 Year",
      eligibility: "12th Pass",
      description: "Learn secretarial skills, office management, communication, and administrative functions required for secretarial and administrative roles.",
      icon: <BookOpen className="h-10 w-10 text-dpmc-blue" />,
      skills: [
        "Office administration",
        "Document management",
        "Business communication",
        "Meeting organization",
        "Calendar management",
        "Filing systems"
      ],
      career: [
        "Office Secretary",
        "Administrative Assistant",
        "Executive Secretary",
        "Office Manager",
        "Front Desk Executive"
      ]
    },
    {
      id: 4,
      name: "Dress Making",
      duration: "1 Year",
      eligibility: "8th Pass",
      description: "Learn garment design, pattern making, cutting, and sewing techniques to start a career in fashion and garment industry.",
      icon: <BookOpen className="h-10 w-10 text-dpmc-blue" />,
      skills: [
        "Pattern making",
        "Cutting techniques",
        "Sewing methods",
        "Garment finishing",
        "Fabric knowledge",
        "Design fundamentals"
      ],
      career: [
        "Fashion Designer",
        "Tailor/Seamstress",
        "Boutique Manager",
        "Pattern Maker",
        "Quality Controller"
      ]
    }
  ];

  return (
    <PageLayout title="Non-Engineering Trades">
      <div className="mb-8 bg-dpmc-blue/5 p-6 rounded-lg border border-dpmc-blue/20">
        <h2 className="text-2xl font-bold text-dpmc-blue mb-4">Non-Engineering Trades at DPMC</h2>
        <p className="text-lg mb-4">
          DPMC Private ITI offers a diverse range of NCVT approved non-engineering trades designed to meet various industry requirements. 
          Our non-engineering programs focus on developing practical skills and knowledge required for service sectors and other non-technical 
          fields to prepare students for successful careers.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-dpmc-blue" />
            <span>Duration: 1 Year</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-dpmc-blue" />
            <span>Annual Intake: 80+ Students</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-dpmc-blue" />
            <span>NCVT Approved</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-dpmc-blue" />
            <span>High Placement Rate</span>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {trades.map((trade) => (
          <Card key={trade.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-dpmc-blue/5 border-b">
              <div className="flex items-center gap-4">
                {trade.icon}
                <div>
                  <CardTitle className="text-2xl text-dpmc-blue">{trade.name}</CardTitle>
                  <CardDescription className="text-base mt-1">
                    <div className="flex gap-4 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {trade.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" /> {trade.eligibility}
                      </span>
                    </div>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6">{trade.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-dpmc-blue">Key Skills</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {trade.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-3 text-dpmc-blue">Career Opportunities</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {trade.career.map((career, index) => (
                      <li key={index}>{career}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button asChild>
                  <Link to="/apply-online">Apply Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-10 bg-dpmc-red/10 p-6 rounded-lg border border-dpmc-red/20 text-center">
        <h2 className="text-xl font-bold text-dpmc-red mb-3">Ready to Start Your Career?</h2>
        <p className="mb-4">Join DPMC Private ITI and get trained by industry experts with modern facilities</p>
        <Button asChild size="lg" className="bg-dpmc-red hover:bg-red-700">
          <Link to="/apply-online">Apply Now</Link>
        </Button>
      </div>
    </PageLayout>
  );
};

export default NonEngineeringTrades;
