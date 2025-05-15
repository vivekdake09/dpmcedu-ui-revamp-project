
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';

const PrincipalMessage: React.FC = () => {
  return (
    <PageLayout title="Principal's Message">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6 shadow-lg">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <img 
                  src="https://www.dpmcedu.com/images/principal.jpg" 
                  alt="Principal" 
                  className="rounded-lg shadow-md w-64 h-auto object-cover"
                  onError={(e) => { 
                    e.currentTarget.src = "https://via.placeholder.com/250x300?text=Principal+Photo"; 
                  }}
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-dpmc-blue text-white py-1 px-4 rounded-full text-sm font-medium">
                  Dr. Anita Verma
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <p className="italic text-lg text-dpmc-blue font-semibold text-center">
                "The goal of education is not to increase the amount of knowledge but to create the possibilities for a child to invent and discover."
              </p>
              
              <p>
                Dear Students,
              </p>
              
              <p>
                It gives me great pleasure to welcome you to DPMC Private ITI. As the Principal, I am proud to lead an institution 
                that is dedicated to providing high-quality technical education and training to prepare students for successful careers in various industries.
              </p>
              
              <p>
                At DPMC, we believe that technical education is not just about learning theoretical concepts but also about developing practical skills, 
                critical thinking, problem-solving abilities, and a professional attitude. Our curriculum is designed to provide a perfect balance between 
                theory and practical training, ensuring that our students are well-prepared for the challenges of the industrial world.
              </p>
              
              <p>
                Our institute boasts of modern infrastructure, well-equipped workshops and laboratories, and a team of qualified and experienced faculty 
                members who are committed to providing excellent education and guidance to our students. We also have strong connections with industries, 
                which helps us in keeping our training programs updated with the latest technological advancements and industry requirements.
              </p>
              
              <p>
                At DPMC, we not only focus on technical education but also emphasize on the overall development of our students. We organize various 
                co-curricular and extracurricular activities, industrial visits, workshops, and seminars to enhance students' knowledge and skills.
              </p>
              
              <p>
                I encourage all students to take full advantage of the opportunities and facilities available at DPMC and strive for excellence in their 
                chosen field. Remember, your success is our success, and we are here to support you in every possible way in your journey towards a 
                successful career.
              </p>
              
              <p className="font-semibold">
                Wishing you all the best for your future.
              </p>
              
              <p className="font-bold">
                Dr. Anita Verma <br />
                Principal, DPMC Private ITI
              </p>
            </div>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="p-6 shadow-lg bg-dpmc-blue/5">
            <h2 className="text-xl font-bold text-dpmc-blue mb-4">Principal's Profile</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">Name</h3>
                <p>Dr. Anita Verma</p>
              </div>
              <div>
                <h3 className="font-semibold">Qualification</h3>
                <p>Ph.D. in Technical Education, M.Tech</p>
              </div>
              <div>
                <h3 className="font-semibold">Experience</h3>
                <p>20+ years in Technical Education & Administration</p>
              </div>
              <div>
                <h3 className="font-semibold">Specialization</h3>
                <p>Curriculum Development, Quality Assurance in Technical Education</p>
              </div>
              <div>
                <h3 className="font-semibold">Achievements</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Best Principal Award by Technical Education Department</li>
                  <li>Member of Curriculum Development Committee</li>
                  <li>Published 15+ research papers</li>
                  <li>Speaker at National & International Conferences</li>
                </ul>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-bold text-dpmc-blue mb-4">Principal's Philosophy</h2>
            <p className="italic">
              "Education is not preparation for life; education is life itself. The key to success is to focus on practical learning that prepares students for real-world challenges."
            </p>
          </Card>
          
          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-bold text-dpmc-blue mb-4">Initiatives Under Principal's Leadership</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Industry-Integrated Training Programs</li>
              <li>Student Mentorship Program</li>
              <li>Digital Learning Initiatives</li>
              <li>Quality Enhancement in Technical Training</li>
              <li>Industry Visits & Expert Lectures</li>
            </ul>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrincipalMessage;
