
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Clock, Calendar, Award, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const EngineeringTrades: React.FC = () => {
  const trades = [
    {
      id: 1,
      name: "Fitter",
      duration: "2 Years",
      eligibility: "10th Pass",
      description: "Learn to fit and assemble structural parts of machinery and other equipment using hand and power tools.",
      icon: <Wrench className="h-10 w-10 text-dpmc-blue" />,
      skills: [
        "Blueprint reading",
        "Precision measurement",
        "Material handling",
        "Machinery assembly",
        "Tool operation",
        "Quality control"
      ],
      career: [
        "Industrial Fitter",
        "Maintenance Technician",
        "Assembly Line Worker",
        "Machine Operator",
        "Workshop Supervisor"
      ]
    },
    {
      id: 2,
      name: "Electrician",
      duration: "2 Years",
      eligibility: "10th Pass",
      description: "Learn to install, maintain, and repair electrical wiring, equipment, and fixtures in residential, commercial, and industrial settings.",
      icon: <Wrench className="h-10 w-10 text-dpmc-blue" />,
      skills: [
        "Circuit reading",
        "Wiring installation",
        "Troubleshooting",
        "Electrical safety",
        "Equipment maintenance",
        "Power distribution"
      ],
      career: [
        "Residential Electrician",
        "Industrial Electrician",
        "Electrical Contractor",
        "Maintenance Electrician",
        "Solar Panel Installer"
      ]
    },
    {
      id: 3,
      name: "Mechanic Motor Vehicle",
      duration: "2 Years",
      eligibility: "10th Pass",
      description: "Learn to repair, maintain, and overhaul automobiles and light trucks that run on gasoline, diesel, or alternative fuels.",
      icon: <Wrench className="h-10 w-10 text-dpmc-blue" />,
      skills: [
        "Engine diagnostics",
        "Brake systems",
        "Transmission repair",
        "Electrical systems",
        "Fuel systems",
        "Preventive maintenance"
      ],
      career: [
        "Automotive Technician",
        "Service Advisor",
        "Auto Workshop Manager",
        "Vehicle Inspector",
        "Fleet Maintenance Supervisor"
      ]
    },
    {
      id: 4,
      name: "Welder",
      duration: "1 Year",
      eligibility: "8th Pass",
      description: "Learn various welding techniques to join metal parts and repair, maintain, and fabricate metal products and structures.",
      icon: <Wrench className="h-10 w-10 text-dpmc-blue" />,
      skills: [
        "Arc welding",
        "Gas welding",
        "Blueprint reading",
        "Material preparation",
        "Quality control",
        "Safety procedures"
      ],
      career: [
        "Production Welder",
        "Pipeline Welder",
        "Structural Welder",
        "Welding Supervisor",
        "Welding Inspector"
      ]
    },
    {
      id: 5,
      name: "Turner",
      duration: "2 Years",
      eligibility: "10th Pass",
      description: "Learn to operate lathes and other machine tools to produce precision metal parts and components.",
      icon: <Wrench className="h-10 w-10 text-dpmc-blue" />,
      skills: [
        "Lathe operation",
        "Blueprint reading",
        "Precision measurement",
        "CNC programming",
        "Cutting tool selection",
        "Quality inspection"
      ],
      career: [
        "Machine Operator",
        "CNC Programmer",
        "Production Turner",
        "Quality Control Inspector",
        "Tool Room Technician"
      ]
    }
  ];

  return (
    <PageLayout title="Engineering Trades">
      <div className="mb-8 bg-dpmc-blue/5 p-6 rounded-lg border border-dpmc-blue/20">
        <h2 className="text-2xl font-bold text-dpmc-blue mb-4">Engineering Trades at DPMC</h2>
        <p className="text-lg mb-4">
          DPMC Private ITI offers a wide range of NCVT approved engineering trades designed to meet the industry requirements. 
          Our engineering programs combine theoretical knowledge with hands-on practical training to prepare students for successful 
          careers in various industrial sectors.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-dpmc-blue" />
            <span>Duration: 1-2 Years</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-dpmc-blue" />
            <span>Annual Intake: 100+ Students</span>
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
        <h2 className="text-xl font-bold text-dpmc-red mb-3">Ready to Start Your Career in Engineering?</h2>
        <p className="mb-4">Join DPMC Private ITI and get trained by industry experts with state-of-the-art facilities</p>
        <Button asChild size="lg" className="bg-dpmc-red hover:bg-red-700">
          <Link to="/apply-online">Apply Now</Link>
        </Button>
      </div>
    </PageLayout>
  );
};

export default EngineeringTrades;
