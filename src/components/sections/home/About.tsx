'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  ChefHat,
  Users,
  Award,
  MapPin,
  ArrowRight,
  Quote,
  Star,
  Clock,
  Heart,
  Utensils,
} from 'lucide-react';

export default function About() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const values = [
    {
      icon: ChefHat,
      title: 'Authentic Recipes',
      description:
        'We use traditional family recipes passed down through generations, ensuring every dish captures the true essence of our culinary heritage.',
    },
    {
      icon: Utensils,
      title: 'Fresh Ingredients',
      description:
        'We source the finest local ingredients daily, working with trusted farmers and suppliers to guarantee freshness in every bite.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description:
        'Every dish is prepared with passion and care by our experienced chefs who take pride in creating memorable dining experiences.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description:
        "We're more than a restaurant - we're a gathering place where families and friends create lasting memories over exceptional food.",
    },
  ];

  const stats = [
    { value: '1985', label: 'Established', icon: Award },
    { value: '15K+', label: 'Happy Diners', icon: Users },
    { value: '4.8★', label: 'Average Rating', icon: Star },
    { value: '3', label: 'Locations', icon: MapPin },
  ];

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Head Chef & Owner',
      image: 'MR',
      bio: 'Third-generation chef specializing in authentic Mediterranean cuisine with 25+ years experience.',
    },
    {
      name: 'Antonio Silva',
      role: 'Executive Chef',
      image: 'AS',
      bio: 'Culinary Institute graduate with expertise in modern cooking techniques and flavor innovation.',
    },
    {
      name: 'Isabella Martinez',
      role: 'Pastry Chef',
      image: 'IM',
      bio: 'Award-winning pastry chef creating handcrafted desserts using traditional European methods.',
    },
    {
      name: 'Carlos Mendoza',
      role: 'Restaurant Manager',
      image: 'CM',
      bio: 'Hospitality expert ensuring every guest receives exceptional service and memorable experiences.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary text-primary">
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Serving Authentic Flavors
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Since 1985
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My Restaurant has been a cornerstone of our community for nearly four decades, bringing
            families together through exceptional cuisine and warm hospitality.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">From Family Kitchen to Community Favorite</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                What started as Maria's grandmother's small family kitchen in 1985 has grown into
                the beloved dining destination you know today. Our journey began with simple,
                authentic recipes and an unwavering commitment to quality.
              </p>
              <p>
                Three generations later, we continue to honor our culinary traditions while
                embracing innovation. Every dish tells a story of heritage, passion, and the
                countless memories shared around our tables.
              </p>
              <p>
                Today, we're proud to serve over 15,000 satisfied diners annually across our three
                locations, each maintaining the same family atmosphere and exceptional standards
                that built our reputation.
              </p>
            </div>
            <Button onClick={handlePrimaryAction} className="group bg-primary hover:bg-primary/90">
              View Our Menu
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Food is love made visible. Every dish we serve carries our family's heart and
                      soul."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Maria Rodriguez, Head Chef
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-primary/20 hover:border-primary/40 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">What Makes Us Special</h3>
            <p className="text-muted-foreground">
              The core principles that guide our kitchen and define every dining experience we
              create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Culinary Team</h3>
            <p className="text-muted-foreground">
              The passionate chefs and hospitality experts who bring our vision to life every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleSecondaryAction}
              variant="outline"
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Reserve Your Table
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "My Restaurant has been our family's go-to place for celebrations for over 15 years.
                The food is consistently exceptional and the atmosphere makes every meal feel
                special."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  LT
                </div>
                <div className="text-left">
                  <div className="font-semibold">Linda Thompson</div>
                  <div className="text-sm text-muted-foreground">Regular Customer Since 2008</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
