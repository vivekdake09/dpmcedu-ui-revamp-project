
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageCategories = [
    {
      id: 'campus',
      name: 'Campus',
      images: [
        { src: 'https://www.dpmcedu.com/images/gallery/campus1.jpg', alt: 'Campus Main Building', caption: 'Main Building' },
        { src: 'https://www.dpmcedu.com/images/gallery/campus2.jpg', alt: 'Campus Garden', caption: 'Campus Garden' },
        { src: 'https://www.dpmcedu.com/images/gallery/campus3.jpg', alt: 'Administrative Block', caption: 'Administrative Block' },
        { src: 'https://www.dpmcedu.com/images/gallery/campus4.jpg', alt: 'Campus Library', caption: 'Central Library' },
        { src: 'https://www.dpmcedu.com/images/gallery/campus5.jpg', alt: 'Outdoor Sports Area', caption: 'Sports Ground' },
        { src: 'https://www.dpmcedu.com/images/gallery/campus6.jpg', alt: 'Cafeteria', caption: 'Student Cafeteria' }
      ]
    },
    {
      id: 'workshops',
      name: 'Workshops',
      images: [
        { src: 'https://www.dpmcedu.com/images/gallery/workshop1.jpg', alt: 'Fitter Workshop', caption: 'Fitter Workshop' },
        { src: 'https://www.dpmcedu.com/images/gallery/workshop2.jpg', alt: 'Electrical Workshop', caption: 'Electrical Workshop' },
        { src: 'https://www.dpmcedu.com/images/gallery/workshop3.jpg', alt: 'Motor Vehicle Workshop', caption: 'Motor Vehicle Workshop' },
        { src: 'https://www.dpmcedu.com/images/gallery/workshop4.jpg', alt: 'Welding Workshop', caption: 'Welding Workshop' },
        { src: 'https://www.dpmcedu.com/images/gallery/workshop5.jpg', alt: 'Turner Workshop', caption: 'Turner Workshop' },
        { src: 'https://www.dpmcedu.com/images/gallery/workshop6.jpg', alt: 'Computer Lab', caption: 'Computer Laboratory' }
      ]
    },
    {
      id: 'events',
      name: 'Events',
      images: [
        { src: 'https://www.dpmcedu.com/images/gallery/event1.jpg', alt: 'Annual Day Celebration', caption: 'Annual Day Celebration' },
        { src: 'https://www.dpmcedu.com/images/gallery/event2.jpg', alt: 'Technical Symposium', caption: 'Technical Symposium' },
        { src: 'https://www.dpmcedu.com/images/gallery/event3.jpg', alt: 'Industrial Visit', caption: 'Industrial Visit' },
        { src: 'https://www.dpmcedu.com/images/gallery/event4.jpg', alt: 'Sports Day', caption: 'Annual Sports Day' },
        { src: 'https://www.dpmcedu.com/images/gallery/event5.jpg', alt: 'Cultural Program', caption: 'Cultural Program' },
        { src: 'https://www.dpmcedu.com/images/gallery/event6.jpg', alt: 'Guest Lecture', caption: 'Guest Lecture Series' }
      ]
    },
    {
      id: 'placements',
      name: 'Placements',
      images: [
        { src: 'https://www.dpmcedu.com/images/gallery/placement1.jpg', alt: 'Placement Drive', caption: 'Campus Placement Drive' },
        { src: 'https://www.dpmcedu.com/images/gallery/placement2.jpg', alt: 'Industry MoU Signing', caption: 'Industry MoU Signing' },
        { src: 'https://www.dpmcedu.com/images/gallery/placement3.jpg', alt: 'Placed Students', caption: 'Successfully Placed Students' },
        { src: 'https://www.dpmcedu.com/images/gallery/placement4.jpg', alt: 'Interview Session', caption: 'Interview Session' },
        { src: 'https://www.dpmcedu.com/images/gallery/placement5.jpg', alt: 'Job Fair', caption: 'Annual Job Fair' },
        { src: 'https://www.dpmcedu.com/images/gallery/placement6.jpg', alt: 'Orientation Session', caption: 'Pre-Placement Orientation' }
      ]
    }
  ];

  // Fallback image in case of loading error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/400x300?text=DPMC+Image";
  };

  return (
    <PageLayout title="Gallery">
      <Tabs defaultValue="campus" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          {imageCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {imageCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.images.map((image, index) => (
                <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                  <Dialog>
                    <DialogTrigger className="w-full">
                      <div className="relative">
                        <AspectRatio ratio={4/3}>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full"
                            onError={handleImageError}
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors"></div>
                      </div>
                      <div className="p-3 text-left">
                        <p className="font-medium">{image.caption}</p>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl w-full p-1">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto max-h-[80vh] object-contain"
                        onError={handleImageError}
                      />
                      <p className="text-center p-2">{image.caption}</p>
                    </DialogContent>
                  </Dialog>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-12 bg-dpmc-blue/5 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-dpmc-blue mb-4 text-center">Campus Video Tour</h2>
        <div className="max-w-3xl mx-auto">
          <AspectRatio ratio={16/9}>
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Campus Tour Video</p>
            </div>
          </AspectRatio>
        </div>
        <p className="text-center mt-4 max-w-2xl mx-auto">
          Take a virtual tour of our campus facilities including workshops, classrooms, library, and recreational areas. 
          Experience the learning environment that DPMC Private ITI offers to its students.
        </p>
      </div>
    </PageLayout>
  );
};

export default Gallery;
