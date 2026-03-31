import React from 'react';

export const InstagramIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const FacebookIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const WhatsAppIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-13.3 8.38 8.38 0 0 1 3.9.9L22 2l-1.5 5.5Z"/>
    <path d="M17 10c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.1-.1.3-.8 1.1-1 1.4-.1.3-.3.3-.6.1-1.3-.7-2.1-1.3-2.9-2.7-.2-.3-.1-.5.1-.6.2-.1.4-.4.5-.6.1-.2.1-.3 0-.5-.1-.2-.7-1.7-1-2.4-.3-.6-.6-.5-.8-.5H7c-.2 0-.5.1-.8.4-1.3 1.4-1.1 3.4.6 5.6 1.7 2.2 4 4.3 6.9 5.3 1 .4 1.8.6 2.5.8.9.3 1.7.2 2.4.1.7-.1 2.2-1 2.6-2 .4-1 .4-1.9.3-2.1-.1-.1-.3-.2-.6-.3z"/>
  </svg>
);

export const TelegramIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z"/>
    <path d="M22 2 11 13"/>
  </svg>
);
