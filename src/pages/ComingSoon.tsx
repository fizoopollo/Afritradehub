import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, ArrowLeft } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

export default function ComingSoon() {
  return (
    <PageLayout>
      <div className="flex-1 flex items-center justify-center py-24">
        <div className="container max-w-md text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Clock className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
          <p className="text-muted-foreground mb-8">
            We're working hard to bring you this feature. Stay tuned for updates!
          </p>
          <Link to="/">
            <Button className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
