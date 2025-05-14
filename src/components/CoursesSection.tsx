
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Calendar } from 'lucide-react';

const CoursesSection: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Electrician',
      duration: '2 Years',
      eligibility: '10th Pass',
      intake: '48 Seats',
      image: 'https://www.dpmcedu.com/images/electrician.jpg',
      link: 'engineering_trades.html'
    },
    {
      id: 2,
      title: 'Fitter',
      duration: '2 Years',
      eligibility: '10th Pass',
      intake: '48 Seats',
      image: 'https://www.dpmcedu.com/images/fitter.jpg',
      link: 'engineering_trades.html'
    },
    {
      id: 3,
      title: 'Welder',
      duration: '1 Year',
      eligibility: '8th Pass',
      intake: '24 Seats',
      image: 'https://www.dpmcedu.com/images/welder.jpg',
      link: 'engineering_trades.html'
    },
    {
      id: 4,
      title: 'Computer Operator',
      duration: '1 Year',
      eligibility: '10th Pass',
      intake: '24 Seats',
      image: 'https://www.dpmcedu.com/images/computer.jpg',
      link: 'non_engineering_trades.html'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Popular Trades & Courses</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {courses.map((course) => (
            <Card key={course.id} className="course-card overflow-hidden border-none shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-dpmc-red text-white px-3 py-1 text-sm">
                  NCVT
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-dpmc-blue">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{course.eligibility}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm">{course.intake}</span>
                </div>
              </CardContent>
              <CardFooter>
                <a href={course.link} className="w-full">
                  <Button className="w-full bg-dpmc-blue hover:bg-dpmc-darkBlue text-white">
                    Course Details
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="engineering_trades.html">
            <Button variant="outline" className="border-dpmc-blue text-dpmc-blue hover:bg-dpmc-blue hover:text-white">
              View All Courses
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
