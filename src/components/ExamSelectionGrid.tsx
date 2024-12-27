import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { BookOpen, Beaker } from 'lucide-react';

interface ExamCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  theme: string;
}

interface ExamSelectionGridProps {
  cards?: ExamCard[];
  onExamSelect?: (examId: string) => void;
  selectedExam?: string | null;
}

const ExamSelectionGrid = ({
  cards = [
    {
      id: 'jee',
      title: 'JEE',
      description: 'Joint Entrance Examination for Engineering',
      icon: <Beaker className="h-6 w-6" />,
      theme: 'text-orange-600',
    },
    {
      id: 'neet',
      title: 'NEET',
      description: 'National Eligibility cum Entrance Test for Medical',
      icon: <BookOpen className="h-6 w-6" />,
      theme: 'text-blue-600',
    },
  ],
  onExamSelect = () => {},
  selectedExam = null,
}: ExamSelectionGridProps) => {
  return (
    <div className="w-full bg-card p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-card-foreground mb-6">
        Select Your Exam
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {cards.map((card) => {
          const isSelected = selectedExam === card.id.toUpperCase();
          return (
            <Card 
              key={card.id} 
              className={`p-6 transition-all ${
                isSelected 
                  ? 'ring-2 ring-primary shadow-lg' 
                  : 'hover:shadow-lg'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`${card.theme} p-3 rounded-full bg-muted`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {card.description}
                </p>
                <Button
                  variant={isSelected ? "default" : "outline"}
                  className={`${isSelected ? 'bg-primary text-primary-foreground' : card.theme + ' hover:bg-muted'}`}
                  onClick={() => onExamSelect(card.id)}
                >
                  {isSelected ? 'Selected' : `Select ${card.title}`}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ExamSelectionGrid;