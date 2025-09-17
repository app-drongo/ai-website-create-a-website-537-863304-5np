'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, ChefHat } from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handleReservation = () => {
    router.push('/');
  };
  const handleMenuView = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation inquiry submitted:', formData);
    handleReservation();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Make a Reservation',
      description: 'Call us to book your table',
      contact: '(555) DINE-NOW',
      action: 'Call Restaurant',
    },
    {
      icon: Mail,
      title: 'Email Inquiries',
      description: 'Questions about events or catering',
      contact: 'reservations@myrestaurant.com',
      action: 'Send Email',
    },
    {
      icon: MessageSquare,
      title: 'Private Events',
      description: 'Book your special occasion',
      contact: 'Available for parties of 15+',
      action: 'Plan Event',
    },
  ];

  const locations = [
    {
      city: 'Downtown Location',
      address: '123 Culinary Street, Food District',
      hours: 'Mon-Thu: 11AM-10PM, Fri-Sat: 11AM-11PM',
    },
    {
      city: 'Waterfront Location',
      address: '456 Harbor View Drive, Marina Bay',
      hours: 'Daily: 10AM-11PM, Brunch Weekends',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary text-primary">
            Reserve Your Table
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Experience Culinary
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to indulge in our signature dishes? Contact us to make a reservation or inquire
            about our catering services for your special events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Reservation Form */}
          <Card className="border-primary/20 shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl flex items-center gap-2 text-primary">
                <ChefHat className="size-6" />
                Reserve Your Table
              </CardTitle>
              <CardDescription>
                Book your dining experience or ask about our daily specials and wine pairings.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Maria Rodriguez"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="maria@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Special Requests *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Party size, preferred date/time, dietary restrictions, special occasions..."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    type="submit"
                    className="w-full text-base py-6 group bg-primary hover:bg-primary/90"
                  >
                    Book Table Now
                    <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleMenuView}
                    className="w-full text-base py-6 border-primary text-primary hover:bg-primary/10"
                  >
                    View Our Menu
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Restaurant Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Phone className="size-5 text-primary" />
                Get in Touch
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer group hover:shadow-md"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1 text-foreground">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Restaurant Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Visit Our Locations
              </h3>
              <div className="space-y-3">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="p-4 border border-primary/20 rounded-lg bg-card hover:bg-primary/5 transition-colors"
                  >
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">{location.city}</h4>
                      <p className="text-sm text-muted-foreground">{location.address}</p>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-accent/20 text-accent-foreground"
                      >
                        {location.hours}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Kitchen Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Thursday</span>
                    <span className="font-medium">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Friday - Saturday</span>
                    <span className="font-medium">11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between border-t border-primary/20 pt-2 mt-3">
                    <span className="text-muted-foreground">Weekend Brunch</span>
                    <span className="font-medium text-primary">10:00 AM - 3:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    Happy Hour: Monday-Friday 4:00-6:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
