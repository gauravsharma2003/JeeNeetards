import React, { useState } from 'react';
import ExamSelectionGrid from './ExamSelectionGrid';
import SyllabusProgress from './SyllabusProgress';

const Home = () => {
  const [selectedExam, setSelectedExam] = useState(null);
  const [syllabusData, setSyllabusData] = useState([]);

  const handleExamSelect = async (examId) => {
    setSelectedExam(examId.toUpperCase());
    try {
      // Load the JSON file dynamically based on exam selection
      const response = await fetch(`/assets/${examId}.json`);
      const jsonData = await response.json();

      const transformedData = Object.entries(jsonData).map(([subject, topics]) => ({
        id: subject.toLowerCase(),
        title: subject,
        topics: topics.map((item, index) => ({
          id: `${subject.charAt(0).toLowerCase()}${index + 1}`,
          name: item.topic,
          completed: false,
          weightage: item.weightage,
        })),
      }));

      setSyllabusData(transformedData);
    } catch (error) {
      console.error('Error loading syllabus data:', error);
    }
  };

  const handleTopicToggle = (subjectId, topicId) => {
    setSyllabusData((prevData) =>
      prevData.map((subject) => {
        if (subject.id === subjectId) {
          return {
            ...subject,
            topics: subject.topics.map((topic) =>
              topic.id === topicId ? { ...topic, completed: !topic.completed } : topic
            ),
          };
        }
        return subject;
      })
    );
  };

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
          <ExamSelectionGrid onExamSelect={handleExamSelect} selectedExam={selectedExam} />
        </section>

        {/* Syllabus Progress Section */}
        {selectedExam && syllabusData.length > 0 ? (
          <section>
            <SyllabusProgress
              examType={selectedExam}
              subjects={syllabusData}
              onTopicToggle={handleTopicToggle}
            />
          </section>
        ) : (
          <div className="text-center py-12 bg-card rounded-lg shadow-sm">
            <p className="text-muted-foreground">
              {selectedExam
                ? 'Loading syllabus data...'
                : 'Please select an exam above to view your syllabus progress'}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
