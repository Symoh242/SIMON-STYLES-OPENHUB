
'use client';

import { Award, Zap, Users, Code } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const features = [
  {
    name: 'Open-Source Commitment',
    description: 'We believe in the power of community and transparency, contributing to and leveraging open-source technologies.',
    icon: Code,
  },
  {
    name: 'Expert Team',
    description: 'Our developers are highly skilled and passionate about creating impactful digital solutions.',
    icon: Users,
  },
  {
    name: 'Innovative Solutions',
    description: 'We stay ahead of the curve, incorporating the latest technologies to deliver future-proof results.',
    icon: Zap,
  },
  {
    name: 'Client-Centric Approach',
    description: 'Your success is our priority. We work closely with you to understand your needs and deliver tailored solutions.',
    icon: Award,
  },
];

export function WhyChooseUs() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Why Partner with OpenSource Hub?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are dedicated to providing exceptional development services that drive growth and innovation. Our commitment to open-source principles, combined with our technical expertise, makes us the ideal partner for your next project.
            </p>
            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-lg font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className={`relative transition-all duration-1000 ease-out delay-200 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <Image
              src="https://picsum.photos/seed/team_meeting/500/450"
              alt="Team working on a project"
              width={500}
              height={450}
              className="rounded-xl shadow-xl object-cover mx-auto"
              data-ai-hint="team meeting"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
