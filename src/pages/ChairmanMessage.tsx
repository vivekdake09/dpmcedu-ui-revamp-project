
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';

const ChairmanMessage: React.FC = () => {
  return (
    <PageLayout title="Chairman's Message">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6 shadow-lg">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <img 
                  src="https://www.dpmcedu.com/images/chairman.jpg" 
                  alt="Chairman" 
                  className="rounded-lg shadow-md w-64 h-auto object-cover"
                  onError={(e) => { 
                    e.currentTarget.src = "https://via.placeholder.com/250x300?text=Chairman+Photo"; 
                  }}
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-dpmc-blue text-white py-1 px-4 rounded-full text-sm font-medium">
                  Mr. Ramesh Sharma
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <p className="italic text-lg text-dpmc-blue font-semibold text-center">
                "Education is the most powerful weapon which you can use to change the world."
              </p>
              
              <p>
                Dear Students and Parents,
              </p>
              
              <p>
                It gives me immense pleasure to welcome you to DPMC Private ITI. Since our inception in 2010, 
                we have been committed to providing quality technical education to shape the future of our youth 
                and contribute to the nation's skill development mission.
              </p>
              
              <p>
                In today's rapidly evolving industrial landscape, skilled technicians are in high demand across various sectors. 
                At DPMC, we have designed our training programs to align with industry requirements, ensuring that our 
                graduates are job-ready and can meet the expectations of employers.
              </p>
              
              <p>
                Our institute is equipped with state-of-the-art infrastructure, modern laboratories, experienced faculty, 
                and strong industry connections. We not only focus on technical skills but also emphasize personality development, 
                communication skills, and ethical values to shape our students into well-rounded professionals.
              </p>
              
              <p>
                I believe that every student has unique potential, and our role as educators is to provide the right environment 
                and guidance to help them discover and develop their abilities. Our dedicated team of faculty members is committed 
                to mentoring students and helping them achieve their career goals.
              </p>
              
              <p>
                As the Chairman of DPMC Private ITI, I assure you that we will continue to strive for excellence and 
                innovation in technical education. We welcome you to be a part of the DPMC family and embark on a journey 
                towards a successful and rewarding career.
              </p>
              
              <p className="font-semibold">
                Best wishes for your future endeavors.
              </p>
              
              <p className="font-bold">
                Mr. Ramesh Sharma <br />
                Chairman, DPMC Private ITI
              </p>
            </div>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="p-6 shadow-lg bg-dpmc-blue/5">
            <h2 className="text-xl font-bold text-dpmc-blue mb-4">Chairman's Profile</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">Name</h3>
                <p>Mr. Ramesh Sharma</p>
              </div>
              <div>
                <h3 className="font-semibold">Qualification</h3>
                <p>M.Tech in Mechanical Engineering</p>
              </div>
              <div>
                <h3 className="font-semibold">Experience</h3>
                <p>30+ years in Technical Education & Industry</p>
              </div>
              <div>
                <h3 className="font-semibold">Achievements</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Established multiple technical training centers</li>
                  <li>Member of Technical Education Advisory Board</li>
                  <li>Recipient of Excellence in Technical Education Award</li>
                  <li>Published research papers on Technical Education</li>
                </ul>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-bold text-dpmc-blue mb-4">Chairman's Vision</h2>
            <p className="italic">
              "To create an ecosystem where technical education transforms lives, empowers communities, and drives industrial growth."
            </p>
          </Card>
          
          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-bold text-dpmc-blue mb-4">Initiatives Led by Chairman</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Skill Development Programs for rural youth</li>
              <li>Industry-Academia Collaboration Projects</li>
              <li>Entrepreneurship Development Program</li>
              <li>Modernization of Training Facilities</li>
              <li>Faculty Development Programs</li>
            </ul>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default ChairmanMessage;
