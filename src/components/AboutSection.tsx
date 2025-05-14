
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, BookOpen, Briefcase } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-dpmc-blue mb-4">About DPMC Private ITI</h2>
            <div className="h-1 w-20 bg-dpmc-red mb-6"></div>
            <p className="text-gray-700 mb-6">
              DPMC Private Industrial Training Institute was established in the year 2003 with a vision to provide quality technical education to the youth. Over the years, we have grown to become a leading institute in the region offering various NCVT certified courses.
            </p>
            <p className="text-gray-700 mb-6">
              Our institute is equipped with modern facilities and experienced faculty to ensure that students receive the best training that prepares them for industrial requirements and helps them build a successful career.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="bg-dpmc-blue/10 p-2 rounded-full mr-3">
                  <Award className="text-dpmc-blue w-5 h-5" />
                </div>
                <span>NCVT Certified</span>
              </div>
              <div className="flex items-center">
                <div className="bg-dpmc-blue/10 p-2 rounded-full mr-3">
                  <Users className="text-dpmc-blue w-5 h-5" />
                </div>
                <span>Expert Faculty</span>
              </div>
              <div className="flex items-center">
                <div className="bg-dpmc-blue/10 p-2 rounded-full mr-3">
                  <BookOpen className="text-dpmc-blue w-5 h-5" />
                </div>
                <span>Modern Curriculum</span>
              </div>
              <div className="flex items-center">
                <div className="bg-dpmc-blue/10 p-2 rounded-full mr-3">
                  <Briefcase className="text-dpmc-blue w-5 h-5" />
                </div>
                <span>Placement Support</span>
              </div>
            </div>
            
            <Button className="bg-dpmc-blue hover:bg-dpmc-darkBlue text-white">
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-dpmc-blue/20 rounded-lg z-0"></div>
              <img 
                src="https://www.dpmcedu.com/images/about_us.jpg" 
                alt="DPMC Campus" 
                className="rounded-lg shadow-lg relative z-10 w-full object-cover h-[400px]"
              />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-dpmc-red/20 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
