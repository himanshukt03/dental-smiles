'use client';

import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

interface ObfuscatedEmailProps {
  user?: string;
  domain?: string;
  className?: string;
  showIcon?: boolean;
  iconClassName?: string;
}

/**
 * ObfuscatedEmail prevents spam bots and scrapers from harvesting email addresses.
 * The static HTML output does NOT contain plain text mailto links or @ symbols.
 * When mounted on client browser, it dynamically constructs the interactive email link.
 */
export default function ObfuscatedEmail({
  user = 'info',
  domain = 'mydentalsmiles.com',
  className = '',
  showIcon = false,
  iconClassName = 'w-4 h-4 mr-2 shrink-0',
}: ObfuscatedEmailProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const emailAddress = `${user}@${domain}`;
    window.location.href = `mailto:${emailAddress}`;
  };

  if (!mounted) {
    // Render bot-safe placeholder during SSR / bot crawling
    return (
      <span className={`inline-flex items-center text-current cursor-pointer ${className}`}>
        {showIcon && <Mail className={iconClassName} />}
        <span>Email Us</span>
      </span>
    );
  }

  const fullEmail = `${user}@${domain}`;

  return (
    <a
      href={`mailto:${fullEmail}`}
      onClick={handleClick}
      className={`inline-flex items-center text-current hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${className}`}
      title="Send an email to Dental Smiles"
      aria-label="Send an email to Dental Smiles"
    >
      {showIcon && <Mail className={iconClassName} />}
      <span>{fullEmail}</span>
    </a>
  );
}
