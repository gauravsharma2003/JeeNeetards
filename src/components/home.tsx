import React from "react";
import ExamSelectionGrid from "./ExamSelectionGrid";
import SyllabusProgress from "./SyllabusProgress";

interface HomeProps {
  selectedExam?: "JEE" | "NEET" | null;
  onExamSelect?: (examId: string) => void;
  onTopicToggle?: (subjectId: string, topicId: string) => void;
}

const Home = ({
  selectedExam = null,
  onExamSelect = () => {},
  onTopicToggle = () => {},
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-8">
      <header className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground">JeeNeetards</h1>
        <p className="mt-2 text-muted-foreground">
          Select your exam and track your preparation progress
        </p>
      </header>

      <main className="max-w-7xl mx-auto space-y-8">
        {/* Exam Selection Section */}
        <section>
          <ExamSelectionGrid onExamSelect={onExamSelect} />
        </section>

        {/* Syllabus Progress Section */}
        {selectedExam && (
          <section>
            <SyllabusProgress
              examType={selectedExam}
              onTopicToggle={onTopicToggle}
            />
          </section>
        )}

        {/* Show placeholder when no exam is selected */}
        {!selectedExam && (
          <div className="text-center py-12 bg-card rounded-lg shadow-sm">
            <p className="text-muted-foreground">
              Please select an exam above to view your syllabus progress
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
