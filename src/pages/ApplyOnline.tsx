
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Check, Info } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  fullName: z.string().min(3, {
    message: "Full name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  dob: z.date({
    required_error: "Date of birth is required.",
  }),
  gender: z.string({
    required_error: "Please select your gender.",
  }),
  parentName: z.string().min(3, {
    message: "Parent/Guardian name must be at least 3 characters.",
  }),
  address: z.string().min(10, {
    message: "Address must be at least 10 characters.",
  }),
  city: z.string().min(2, {
    message: "City name is required.",
  }),
  state: z.string().min(2, {
    message: "State name is required.",
  }),
  pincode: z.string().min(6, {
    message: "Please enter a valid pincode.",
  }),
  qualification: z.string({
    required_error: "Please select your qualification.",
  }),
  lastSchool: z.string().min(3, {
    message: "Last school/institute name is required.",
  }),
  tradePrefFirst: z.string({
    required_error: "Please select your first trade preference.",
  }),
  tradePrefSecond: z.string().optional(),
  message: z.string().optional(),
});

const ApplyOnline: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      parentName: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      lastSchool: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real application, you would send this data to a server
    toast({
      title: "Application Submitted Successfully!",
      description: "We will contact you shortly with further instructions.",
    });
    form.reset();
  }

  const engineeringTrades = [
    "Fitter",
    "Electrician",
    "Mechanic Motor Vehicle",
    "Welder",
    "Turner"
  ];

  const nonEngineeringTrades = [
    "Computer Operator and Programming Assistant (COPA)",
    "Stenographer (English)",
    "Secretarial Practice (English)",
    "Dress Making"
  ];

  return (
    <PageLayout title="Apply Online">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-dpmc-blue">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Date of Birth*</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date > new Date() || date < new Date("1950-01-01")
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gender*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your gender" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="parentName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Parent/Guardian Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter parent/guardian name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-dpmc-blue pt-2">Contact Information</h2>
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address*</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Enter your full address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter state" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="pincode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pincode*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter pincode" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-dpmc-blue pt-2">Educational Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="qualification"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Highest Qualification*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select qualification" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="8th">8th Pass</SelectItem>
                                <SelectItem value="10th">10th Pass</SelectItem>
                                <SelectItem value="12th">12th Pass</SelectItem>
                                <SelectItem value="graduate">Graduate</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastSchool"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last School/Institute*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter school/institute name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-dpmc-blue pt-2">Trade Preferences</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="tradePrefFirst"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Preference*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select first trade preference" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="" disabled>Engineering Trades</SelectItem>
                                {engineeringTrades.map((trade) => (
                                  <SelectItem key={trade} value={trade}>{trade}</SelectItem>
                                ))}
                                <SelectItem value="" disabled>Non-Engineering Trades</SelectItem>
                                {nonEngineeringTrades.map((trade) => (
                                  <SelectItem key={trade} value={trade}>{trade}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="tradePrefSecond"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Second Preference (Optional)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select second trade preference" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="" disabled>Engineering Trades</SelectItem>
                                {engineeringTrades.map((trade) => (
                                  <SelectItem key={trade} value={trade}>{trade}</SelectItem>
                                ))}
                                <SelectItem value="" disabled>Non-Engineering Trades</SelectItem>
                                {nonEngineeringTrades.map((trade) => (
                                  <SelectItem key={trade} value={trade}>{trade}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter any additional information or queries" {...field} />
                        </FormControl>
                        <FormDescription>
                          Any specific requirements or questions related to your application
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-center pt-4">
                    <Button type="submit" size="lg" className="px-8">Submit Application</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="p-6 shadow-lg bg-dpmc-blue/5">
            <h2 className="text-xl font-bold text-dpmc-blue mb-4">Important Instructions</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fields marked with * are mandatory</li>
              <li>Ensure your contact details are correct as we will use them for communication</li>
              <li>You will receive an application number after submission</li>
              <li>Keep a copy of your application for future reference</li>
              <li>You will need to submit original documents for verification if shortlisted</li>
            </ul>
          </Card>
          
          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-bold text-dpmc-blue mb-4">Required Documents</h2>
            <p className="mb-4">The following documents will be required at the time of admission:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>10th/8th Mark Sheet and Certificate (as per trade eligibility)</li>
              <li>Address Proof</li>
              <li>Identity Proof</li>
              <li>Caste Certificate (if applicable)</li>
              <li>4 Recent Passport Size Photographs</li>
              <li>Character Certificate from Previous Institution</li>
              <li>Aadhaar Card</li>
            </ul>
          </Card>
          
          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-bold text-dpmc-blue mb-4">Admission Help Desk</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91 98290 62662</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>admissions@dpmcedu.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Timing</h3>
                <p>Monday to Saturday, 9:00 AM to 5:00 PM</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 shadow-lg bg-dpmc-red/10 border border-dpmc-red/20">
            <div className="flex items-center gap-3 mb-4">
              <Info className="h-5 w-5 text-dpmc-red" />
              <h3 className="font-bold text-dpmc-red">Application Deadline</h3>
            </div>
            <p>Last date for submission of online applications for the academic year 2025-26 is:</p>
            <p className="text-xl font-bold text-center my-3">15th July 2025</p>
            <p>Early applications are encouraged as seats are limited.</p>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default ApplyOnline;
