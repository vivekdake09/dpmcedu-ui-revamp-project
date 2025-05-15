
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';

const AboutDPMC: React.FC = () => {
  return (
    <PageLayout title="About DPMC">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-dpmc-blue mb-4">About DPMC Private ITI</h2>
            <p className="mb-4">
              DPMC Private ITI was established in 2010 with the vision to provide quality technical education to the 
              youth of Rajasthan. Located in Jaipur, the capital city of Rajasthan, our institute has emerged as one of 
              the leading technical training institutes in the region.
            </p>
            <p className="mb-4">
              We are affiliated with National Council for Vocational Training (NCVT) and recognized by Directorate General 
              of Employment & Training (DGET), Ministry of Labour & Employment, Government of India. Our institute offers 
              various engineering and non-engineering trades to cater to the diverse needs of the industry.
            </p>
            <p className="mb-4">
              At DPMC, we believe in holistic development of our students. Apart from technical skills, we focus on developing 
              soft skills, communication skills, and personality development to make our students industry-ready.
            </p>
            <p>
              Our state-of-the-art infrastructure, experienced faculty, and industry connections help us in providing the best 
              technical education and placement opportunities to our students.
            </p>
          </Card>

          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-dpmc-blue mb-4">Our Achievements</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Recognized as one of the top Private ITIs in Rajasthan</li>
              <li>Consistently achieving 85%+ placement record</li>
              <li>MoUs signed with leading industries for hands-on training</li>
              <li>State-of-the-art infrastructure with modern equipment</li>
              <li>Regular industrial visits and workshops for practical exposure</li>
              <li>Dedicated training and placement cell for career guidance</li>
            </ul>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-dpmc-blue mb-4">Quick Facts</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">Established</h3>
                <p>2010</p>
              </div>
              <div>
                <h3 className="font-semibold">Affiliation</h3>
                <p>NCVT, DGET, Govt. of India</p>
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>Jaipur, Rajasthan</p>
              </div>
              <div>
                <h3 className="font-semibold">Campus Area</h3>
                <p>5 Acres</p>
              </div>
              <div>
                <h3 className="font-semibold">Courses Offered</h3>
                <p>Engineering & Non-Engineering Trades</p>
              </div>
              <div>
                <h3 className="font-semibold">Placement Record</h3>
                <p>85%+</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 shadow-lg bg-dpmc-blue/5">
            <h2 className="text-2xl font-bold text-dpmc-blue mb-4">Our Approach</h2>
            <p className="mb-3">At DPMC, we follow a unique approach to technical education:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Practical-oriented training methodology</li>
              <li>Industry-aligned curriculum</li>
              <li>Regular workshops and seminars</li>
              <li>Focus on personality development</li>
              <li>Regular assessment and feedback</li>
              <li>Career counseling and mentorship</li>
            </ul>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutDPMC;
