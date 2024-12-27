import React from "react";
import { Checkbox } from "./ui/checkbox";
import { ChevronDown, ChevronRight } from "lucide-react";

interface Topic {
  id: string;
  name: string;
  completed: boolean;
}

interface SubjectCategoryProps {
  title?: string;
  topics?: Topic[];
  onTopicToggle?: (topicId: string) => void;
}

const SubjectCategory = ({
  title = "Physics",
  topics = [
    { id: "1", name: "Mechanics", completed: false },
    { id: "2", name: "Thermodynamics", completed: true },
    { id: "3", name: "Optics", completed: false },
    { id: "4", name: "Electromagnetism", completed: false },
  ],
  onTopicToggle = () => {},
}: SubjectCategoryProps) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <div className="w-full bg-card rounded-lg shadow-sm p-4 mb-4">
      {/* Category Header */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          {isExpanded ? (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          )}
          <h3 className="text-lg font-semibold text-card-foreground">
            {title}
          </h3>
        </div>
        <span className="text-sm text-muted-foreground">
          {topics.filter((t) => t.completed).length}/{topics.length} completed
        </span>
      </div>

      {/* Topics List */}
      {isExpanded && (
        <div className="mt-4 ml-7 space-y-3">
          {topics.map((topic) => (
            <div key={topic.id} className="flex items-center space-x-3">
              <Checkbox
                id={topic.id}
                checked={topic.completed}
                onCheckedChange={() => onTopicToggle(topic.id)}
              />
              <label
                htmlFor={topic.id}
                className="text-sm font-medium text-card-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {topic.name}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubjectCategory;
