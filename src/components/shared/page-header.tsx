
import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string | ReactNode;
  children?: ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-secondary/20 to-background border-b">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-muted-foreground">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
