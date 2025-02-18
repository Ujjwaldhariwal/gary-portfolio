// Tooltip.tsx
import React, { useState } from "react";

interface TooltipProps {
  text: React.ReactNode | string;
  children: React.ReactNode;
  className?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({ 
  text, 
  children, 
  className = "",
  position = 'top'
}) => {
  const [visible, setVisible] = useState(false);

  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 -translate-y-2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 translate-y-2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 -translate-x-2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 translate-x-2 ml-2",
  };

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        {children}
      </div>
      {visible && (
        <div 
          className={`
            absolute z-50 
            px-3 py-2 
            text-sm rounded-md
            bg-slate-800 text-slate-100
            shadow-lg
            min-w-max
            backdrop-blur-sm
            border border-cyan-500/30
            transition-opacity duration-300
            ${positionStyles[position]}
            ${className}
          `}
          role="tooltip"
        >
          {typeof text === 'string' ? (
            <p>{text}</p>
          ) : (
            text
          )}
          {/* Arrow */}
          <div 
            className={`
              absolute w-2 h-2 
              bg-slate-800
              border-cyan-500/30
              ${position === 'top' ? 'border-b border-r bottom-[-5px] left-1/2 -translate-x-1/2 rotate-45' : ''}
              ${position === 'bottom' ? 'border-t border-l top-[-5px] left-1/2 -translate-x-1/2 rotate-45' : ''}
              ${position === 'left' ? 'border-t border-r right-[-5px] top-1/2 -translate-y-1/2 rotate-45' : ''}
              ${position === 'right' ? 'border-b border-l left-[-5px] top-1/2 -translate-y-1/2 rotate-45' : ''}
            `}
          />
        </div>
      )}
    </div>
  );
};