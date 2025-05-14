
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Wrench, Computer, BookOpen, Briefcase, HeartPulse } from 'lucide-react';

const FacilitiesSection: React.FC = () => {
  const facilities = [
    {
      id: 1,
      title: 'Modern Workshops',
      description: 'Well-equipped workshops with modern tools and machinery for hands-on training.',
      icon: <Wrench className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 2,
      title: 'Computer Lab',
      description: 'State-of-the-art computer lab with latest software and high-speed internet connection.',
      icon: <Computer className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 3,
      title: 'Library',
      description: 'Well-stocked library with technical books, journals, and digital resources.',
      icon: <BookOpen className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 4,
      title: 'Smart Classrooms',
      description: 'Technology-enabled classrooms for interactive and effective learning experience.',
      icon: <Lightbulb className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 5,
      title: 'Placement Cell',
      description: 'Dedicated placement cell to assist students in finding suitable job opportunities.',
      icon: <Briefcase className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 6,
      title: 'Health Center',
      description: 'Basic health facility for emergency medical assistance and health check-ups.',
      icon: <HeartPulse className="h-10 w-10 text-dpmc-blue" />
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our Facilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {facilities.map((facility) => (
            <Card key={facility.id} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                {facility.icon}
                <CardTitle className="text-lg">{facility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-dpmc-blue/10 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-dpmc-blue mb-2">Visit Our Campus</h3>
              <p className="text-gray-600">Experience our facilities firsthand by visiting our campus.</p>
            </div>
            <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 text-center md:text-left mb-4 md:mb-0">
                <p>We are located at:</p>
                <p className="font-semibold">Bikaner Road, Sardarshahar, Churu, Rajasthan - 331403</p>
              </div>
              <a 
                href="contact_us.html" 
                className="btn-primary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
