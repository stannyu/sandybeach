import { Skeleton } from '@/components/ui/skeleton';

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>

      <div className="flex items-center justify-center gap-4 py-20">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}

export default About;
