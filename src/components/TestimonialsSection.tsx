
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Electrician, 2020 Batch',
      company: 'Tata Motors Ltd.',
      image: 'https://www.dpmcedu.com/images/stud1.jpg',
      testimonial: 'The training I received at DPMC ITI has been instrumental in my career growth. The faculty was supportive and the practical exposure was excellent.'
    },
    {
      id: 2,
      name: 'Anjali Patel',
      role: 'Fitter, 2019 Batch',
      company: 'Maruti Suzuki India Ltd.',
      image: 'https://www.dpmcedu.com/images/stud2.jpg',
      testimonial: 'DPMC ITI provided me with the right skills and knowledge to excel in my field. The placement assistance helped me secure a good job right after completing my course.'
    },
    {
      id: 3,
      name: 'Suresh Kumar',
      role: 'Welder, 2021 Batch',
      company: 'L&T Construction',
      image: 'https://www.dpmcedu.com/images/stud3.jpg',
      testimonial: 'I am grateful to DPMC ITI for providing quality education and hands-on training. The workshops are well-equipped and the teaching methodology is very effective.'
    },
    {
      id: 4,
      name: 'Preeti Gupta',
      role: 'Computer Operator, 2020 Batch',
      company: 'Infosys Ltd.',
      image: 'https://www.dpmcedu.com/images/stud4.jpg',
      testimonial: 'The computer training at DPMC ITI is comprehensive and up-to-date. The faculty ensures that we learn the latest software and technologies used in the industry.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">What Our Alumni Say</h2>
        
        <div className="mt-12">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Card className="border-none shadow-md h-full">
                      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                      </CardContent>
                      <CardFooter className="text-sm text-gray-500">
                        Working at {testimonial.company}
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative inset-auto" />
              <CarouselNext className="relative inset-auto" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
