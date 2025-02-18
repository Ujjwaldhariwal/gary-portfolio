import React from "react";

interface BadgeProps {
  text: string;
  color?: "blue" | "green" | "red" | "cyan" | "slate" | "purple";
  variant?: "solid" | "subtle" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Badge: React.FC<BadgeProps> = ({ 
  text, 
  color = "blue",
  variant = "subtle",
  size = "md" 
}) => {
  const colorClasses = {
    solid: {
      blue: "bg-blue-500 text-white",
      green: "bg-green-500 text-white",
      red: "bg-red-500 text-white",
      cyan: "bg-cyan-500 text-white",
      slate: "bg-slate-500 text-white",
      purple: "bg-purple-500 text-white"
    },
    subtle: {
      blue: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      green: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
      red: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
      cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400",
      slate: "bg-slate-100 text-slate-700 dark:bg-slate-500/10 dark:text-slate-400",
      purple: "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400"
    },
    outline: {
      blue: "border border-blue-500 text-blue-700 dark:text-blue-400",
      green: "border border-green-500 text-green-700 dark:text-green-400",
      red: "border border-red-500 text-red-700 dark:text-red-400",
      cyan: "border border-cyan-500 text-cyan-700 dark:text-cyan-400",
      slate: "border border-slate-500 text-slate-700 dark:text-slate-400",
      purple: "border border-purple-500 text-purple-700 dark:text-purple-400"
    }
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5 text-base"
  };

  return (
    <span 
      className={`
        inline-flex items-center justify-center
        font-medium rounded-md
        transition-colors duration-200
        ${colorClasses[variant][color]}
        ${sizeClasses[size]}
      `}
    >
      {text}
    </span>
  );
};