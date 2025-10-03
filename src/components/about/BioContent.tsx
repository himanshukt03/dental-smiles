'use client';

import { useMemo, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const MOBILE_CHAR_LIMIT = 220;

type BioContentProps = {
  id: string;
  bio: string;
  className?: string;
};

export function BioContent({ id, bio, className }: BioContentProps) {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(false);

  const paragraphs = useMemo(() => bio.split('\n\n'), [bio]);
  const shouldTruncate = isMobile && bio.length > MOBILE_CHAR_LIMIT;

  if (!shouldTruncate) {
    return (
      <div className={className}>
        {paragraphs.map((paragraph, index) => (
          <p key={`${id}-paragraph-${index}`} className="text-muted-foreground leading-relaxed text-base">
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  if (expanded) {
    return (
      <div className={className}>
        {paragraphs.map((paragraph, index) => (
          <p key={`${id}-paragraph-expanded-${index}`} className="text-muted-foreground leading-relaxed text-base">
            {paragraph}
          </p>
        ))}
        <button
          type="button"
          className="text-primary font-semibold text-sm mt-2 hover:underline focus:outline-none"
          onClick={() => setExpanded(false)}
        >
          Read less
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="text-muted-foreground leading-relaxed text-base">
        {`${bio.slice(0, MOBILE_CHAR_LIMIT).trimEnd()}…`}
      </p>
      <button
        type="button"
        className="text-primary font-semibold text-sm mt-2 hover:underline focus:outline-none"
        onClick={() => setExpanded(true)}
      >
        Read more
      </button>
    </div>
  );
}
