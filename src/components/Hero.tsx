
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: 'https://www.dpmcedu.com/images/banner1.jpg',
      title: 'Welcome to DPMC Private ITI',
      subtitle: 'Building Skills for a Better Future',
      buttonText: 'Explore Courses'
    },
    {
      id: 2,
      image: 'https://www.dpmcedu.com/images/banner2.jpg',
      title: 'State-of-the-Art Training Facilities',
      subtitle: 'Learn with Modern Equipment & Expert Faculty',
      buttonText: 'Our Facilities'
    },
    {
      id: 3,
      image: 'https://www.dpmcedu.com/images/banner3.jpg',
      title: 'Join DPMC for Promising Career',
      subtitle: 'NCVT Certified Courses with Placement Assistance',
      buttonText: 'Apply Now'
    }
  ];

  return (
    <div className="relative pt-20">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[60vh] md:h-[80vh] w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(0,0,0,0.4)'
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4 md:px-0 max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">{slide.title}</h1>
                    <p className="text-lg md:text-xl mb-8 animate-fade-in">{slide.subtitle}</p>
                    <Button 
                      size="lg"
                      className="bg-dpmc-blue hover:bg-dpmc-darkBlue text-white animate-fade-in"
                    >
                      {slide.buttonText}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-0 left-0 right-0 bg-dpmc-blue/90 text-white py-4 transform translate-y-1/2 hidden lg:block">
        <div className="container mx-auto">
          <div className="flex justify-around items-center text-center">
            <div className="px-4">
              <h3 className="font-bold text-2xl">20+</h3>
              <p className="text-sm">Years of Excellence</p>
            </div>
            <div className="px-4 border-l border-white/30">
              <h3 className="font-bold text-2xl">15+</h3>
              <p className="text-sm">Trade Courses</p>
            </div>
            <div className="px-4 border-l border-white/30">
              <h3 className="font-bold text-2xl">5000+</h3>
              <p className="text-sm">Successful Alumni</p>
            </div>
            <div className="px-4 border-l border-white/30">
              <h3 className="font-bold text-2xl">95%</h3>
              <p className="text-sm">Placement Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
