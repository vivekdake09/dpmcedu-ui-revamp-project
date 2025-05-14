
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, FileText } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-dpmc-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Start Your Career Journey with DPMC</h2>
          <p className="text-lg mb-8 opacity-90">
            Applications are now open for the upcoming academic session. 
            Secure your seat in one of our NCVT certified trade courses.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="apply_online.html">
              <Button size="lg" className="bg-dpmc-red hover:bg-red-700 text-white w-full md:w-auto">
                <FileText className="mr-2 h-5 w-5" />
                Apply Online
              </Button>
            </a>
            <a href="tel:9829062662">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20 w-full md:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: +91 98290 62662
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
