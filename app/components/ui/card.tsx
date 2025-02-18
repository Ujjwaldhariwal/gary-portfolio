// Card.tsx
import React from "react";

interface CardProps {
  title?: React.ReactNode | string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, className = "" }) => {
  return (
    <div className={`border border-cyan-500/30 rounded-lg shadow-lg backdrop-blur-sm 
      transition-colors duration-300 
      dark:bg-slate-800/50 bg-white/90 
      ${className}`}
    >
      {title && (
        <div className="p-4 border-b border-cyan-500/30">
          {typeof title === 'string' ? (
            <h3 className="text-lg font-semibold dark:text-slate-100 text-slate-900">
              {title}
            </h3>
          ) : (
            title
          )}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};