
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Lightbulb, Target, Award } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <PageLayout title="Vision & Mission">
      <div className="space-y-10">
        <Card className="p-8 shadow-lg border-t-4 border-t-dpmc-blue">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-dpmc-blue/10 p-6 rounded-full">
              <Lightbulb className="h-16 w-16 text-dpmc-blue" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dpmc-blue mb-4">Our Vision</h2>
              <p className="text-lg">
                To become a premier technical education institute that transforms students into skilled professionals 
                who contribute to the industrial and economic growth of our nation.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 shadow-lg border-t-4 border-t-dpmc-red">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-dpmc-red/10 p-6 rounded-full">
              <Target className="h-16 w-16 text-dpmc-red" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dpmc-red mb-4">Our Mission</h2>
              <div className="space-y-3">
                <p>
                  <strong>Excellence in Education:</strong> To impart quality technical education that meets industry standards and expectations.
                </p>
                <p>
                  <strong>Skill Development:</strong> To develop practical skills and competencies required for successful employment.
                </p>
                <p>
                  <strong>Innovation:</strong> To foster innovation and creativity in technical education through modern teaching methods and technologies.
                </p>
                <p>
                  <strong>Holistic Development:</strong> To focus on overall personality development of students including technical, soft skills, and ethical values.
                </p>
                <p>
                  <strong>Industry Connect:</strong> To establish strong industry linkages for enhancing employability of students.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 shadow-lg border-t-4 border-t-yellow-500">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-yellow-500/10 p-6 rounded-full">
              <Award className="h-16 w-16 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Core Values</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Excellence</h3>
                  <p>Striving for excellence in everything we do</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Integrity</h3>
                  <p>Maintaining highest standards of ethics and honesty</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Innovation</h3>
                  <p>Embracing new ideas and technologies</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Respect</h3>
                  <p>Respecting diversity and individual differences</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Teamwork</h3>
                  <p>Working together to achieve common goals</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Social Responsibility</h3>
                  <p>Contributing positively to society and environment</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="p-6 bg-gray-50 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-dpmc-blue mb-2">Join DPMC and Be Part of Our Journey</h2>
          <p className="text-lg">Transforming dreams into reality through quality technical education</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default VisionMission;
