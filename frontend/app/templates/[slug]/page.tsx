'use client';

import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { templateComponentMap } from '@/lib/templateComponentMap';

export default function TemplatePreview() {
  const params = useParams();
  const slug = params.slug as string;

  const TemplateComponent = useMemo(() => {
    return templateComponentMap[slug];
  }, [slug]);

  if (!TemplateComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Template Not Found</h1>
          <p className="text-gray-600 mb-8">Slug: {slug}</p>
          <Link href="/admin/online-store/themes" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
            <ArrowLeft size={20} />
            Back to Themes
          </Link>
        </div>
      </div>
    );
  }

  return <TemplateComponent />;
}
