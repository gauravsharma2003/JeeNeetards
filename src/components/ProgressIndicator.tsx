import React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressIndicatorProps {
  progress?: number;
  total?: number;
  label?: string;
}

const ProgressIndicator = ({
  progress = 65,
  total = 100,
  label = "Overall Progress",
}: ProgressIndicatorProps) => {
  const percentage = Math.round((progress / total) * 100);

  return (
    <div className="w-full p-4 space-y-2 bg-card rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-card-foreground">{label}</h3>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{progress} completed</span>
        <span>{total} total</span>
      </div>
    </div>
  );
};

export default ProgressIndicator;
