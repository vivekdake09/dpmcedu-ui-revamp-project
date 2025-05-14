
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsSection: React.FC = () => {
  const news = [
    {
      id: 1,
      title: 'Admission Open for 2023-24 Session',
      date: 'June 15, 2023',
      excerpt: 'Applications are invited for various engineering and non-engineering trades for the academic year 2023-24.',
      link: '#'
    },
    {
      id: 2,
      title: 'Campus Placement Drive',
      date: 'May 20, 2023',
      excerpt: 'A major placement drive is scheduled with leading companies visiting our campus for recruitment.',
      link: '#'
    },
    {
      id: 3,
      title: 'Industrial Visit Organized',
      date: 'April 10, 2023',
      excerpt: 'Students visited ABC Manufacturing Ltd. to get practical exposure to industrial operations and processes.',
      link: '#'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Latest News & Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {news.map((item) => (
            <Card key={item.id} className="news-card border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <CardTitle className="text-lg font-semibold text-dpmc-blue">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <a href={item.link} className="text-dpmc-blue flex items-center hover:underline">
                  Read More <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="news.html">
            <Button variant="outline" className="border-dpmc-blue text-dpmc-blue hover:bg-dpmc-blue hover:text-white">
              View All News & Events
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
