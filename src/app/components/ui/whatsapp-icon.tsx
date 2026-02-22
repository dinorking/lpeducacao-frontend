import { SVGProps } from 'react';

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fundo verde do WhatsApp */}
      <circle cx="12" cy="12" r="10" fill="#25D366" />
      
      {/* Símbolo do WhatsApp - chat com telefone */}
      <g fill="white">
        {/* Bolha de chat */}
        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.22.72 4.25 1.89 5.89L2 22l4.11-1.11C7.75 22.05 9.78 23 12 23c5.52 0 10-4.48 10-10S17.52 3 12 3zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        
        {/* Ícone de telefone dentro da bolha */}
        <path d="M15.5 11.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5z" />
        <path d="M12 8.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
      </g>
    </svg>
  );
}