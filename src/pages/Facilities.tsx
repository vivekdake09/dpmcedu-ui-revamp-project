
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Wrench, Computer, BookOpen, Briefcase, HeartPulse, Utensils, Home, Users, Trophy, Clock, LayoutGrid } from 'lucide-react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      id: 1,
      title: 'Smart Classrooms',
      description: 'Digitally equipped classrooms with audiovisual aids, projectors, and interactive teaching tools.',
      icon: <Lightbulb className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 2,
      title: 'Workshop Facilities',
      description: 'Modern workshops with latest equipment and tools for hands-on training across all engineering trades.',
      icon: <Wrench className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 3,
      title: 'Computer Lab',
      description: 'State-of-the-art computer lab with latest software and high-speed internet connection.',
      icon: <Computer className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 4,
      title: 'Library',
      description: 'Well-stocked library with books, journals, magazines, and digital resources for reference and research.',
      icon: <BookOpen className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 5,
      title: 'Placement Cell',
      description: 'Dedicated placement cell for career guidance, training, and job placement assistance.',
      icon: <Briefcase className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 6,
      title: 'Medical Facility',
      description: 'On-campus medical facility with first aid and basic healthcare services for students and staff.',
      icon: <HeartPulse className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 7,
      title: 'Cafeteria',
      description: 'Spacious cafeteria serving nutritious meals and refreshments at reasonable prices.',
      icon: <Utensils className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 8,
      title: 'Hostel Accommodation',
      description: 'Separate hostel facilities for boys and girls with modern amenities and security.',
      icon: <Home className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 9,
      title: 'Seminar Hall',
      description: 'Well-equipped seminar hall for guest lectures, workshops, seminars, and cultural events.',
      icon: <Users className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 10,
      title: 'Sports Facilities',
      description: 'Indoor and outdoor sports facilities including cricket, volleyball, basketball, and table tennis.',
      icon: <Trophy className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 11,
      title: 'Transportation',
      description: 'Bus service covering major routes in and around the city for commuting students and staff.',
      icon: <Clock className="h-10 w-10 text-dpmc-blue" />
    },
    {
      id: 12,
      title: 'Digital Infrastructure',
      description: 'Campus-wide Wi-Fi, digital notice boards, and online learning management system.',
      icon: <LayoutGrid className="h-10 w-10 text-dpmc-blue" />
    }
  ];

  return (
    <PageLayout title="Our Facilities">
      <div className="mb-8">
        <Card className="bg-dpmc-blue/5 border-none shadow-sm">
          <CardContent className="p-6">
            <p className="text-lg">
              At DPMC Private ITI, we provide state-of-the-art facilities to ensure a conducive learning environment for our students. 
              Our infrastructure is designed to meet industry standards and provide practical training that prepares students for their future careers.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility) => (
          <Card key={facility.id} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <div className="bg-dpmc-blue/10 p-3 rounded-full">
                  {facility.icon}
                </div>
                <CardTitle className="text-xl text-dpmc-blue">{facility.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>{facility.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold text-dpmc-blue">Campus Tour</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden shadow-lg">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Workshop Facilities Video</p>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-1">Workshop Facilities</h3>
              <p className="text-sm text-gray-600">Take a virtual tour of our modern workshop facilities.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden shadow-lg">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Computer Labs Video</p>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-1">Computer Labs</h3>
              <p className="text-sm text-gray-600">Explore our state-of-the-art computer laboratories.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold text-dpmc-blue">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-lg bg-gray-50">
            <CardContent className="p-6">
              <p className="italic mb-4">
                "The facilities at DPMC Private ITI are excellent. The workshops are well-equipped with modern tools and equipment, which helped me get hands-on training that was crucial for my job placement."
              </p>
              <div>
                <p className="font-bold">Rajesh Kumar</p>
                <p className="text-sm text-gray-600">Fitter Trade, Batch of 2024</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg bg-gray-50">
            <CardContent className="p-6">
              <p className="italic mb-4">
                "I was impressed by the computer labs and digital infrastructure at DPMC. The exposure to latest software and technology gave me an edge over others during my job interviews."
              </p>
              <div>
                <p className="font-bold">Priya Sharma</p>
                <p className="text-sm text-gray-600">COPA Trade, Batch of 2023</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Facilities;
