import React from "react";
import SubjectCategory from "./SubjectCategory";
import ProgressIndicator from "./ProgressIndicator";

interface Subject {
  id: string;
  title: string;
  topics: Array<{
    id: string;
    name: string;
    completed: boolean;
  }>;
}

interface SyllabusProgressProps {
  subjects?: Subject[];
  examType?: "JEE" | "NEET";
  onTopicToggle?: (subjectId: string, topicId: string) => void;
}

const SyllabusProgress = ({
  subjects = [
    // Mathematics topics with weightage
    {
      id: "math",
      title: "Mathematics",
      topics: [
        { id: "m1", name: "Sets", completed: false },
        { id: "m2", name: "Permutations & Combinations", completed: false },
        { id: "m3", name: "Probability", completed: false },
        { id: "m4", name: "Complex Numbers", completed: false },
        { id: "m5", name: "Binominal Theorem", completed: false },
        { id: "m6", name: "Limits", completed: false },
        { id: "m7", name: "Differentiability", completed: false },
        { id: "m8", name: "Indefinite Integration", completed: false },
        { id: "m9", name: "Definite Integration", completed: false },
        { id: "m10", name: "Differential Equations", completed: false },
        { id: "m11", name: "Height & Distance", completed: false },
        { id: "m12", name: "Trigonometric Equations", completed: false },
        { id: "m13", name: "The Area under the Curve", completed: false },
        { id: "m14", name: "Quadratic Equations", completed: false },
        { id: "m15", name: "Vectors", completed: false },
        { id: "m16", name: "Tangents and Normals", completed: false },
        { id: "m17", name: "Maxima and Minima", completed: false },
        { id: "m18", name: "Statistics", completed: false },
        { id: "m19", name: "Parabola", completed: false },
        { id: "m20", name: "Ellipse", completed: false },
        { id: "m21", name: "Hyperbola", completed: false },
        { id: "m22", name: "Sequences & Series", completed: false },
        { id: "m23", name: "Straight Lines", completed: false },
        { id: "m24", name: "3-D Geometry", completed: false },
        { id: "m25", name: "Determinants", completed: false },
      ],
    },
    // Physics topics with weightage
    {
      id: "physics",
      title: "Physics",
      topics: [
        { id: "p1", name: "Electrostatics", completed: false },
        { id: "p2", name: "Capacitors", completed: false },
        { id: "p3", name: "Simple Harmonic Motion", completed: false },
        { id: "p4", name: "Sound Waves", completed: false },
        { id: "p5", name: "Elasticity", completed: false },
        { id: "p6", name: "Error in Measurement", completed: false },
        { id: "p7", name: "Circular Motion", completed: false },
        { id: "p8", name: "Electromagnetic Waves", completed: false },
        { id: "p9", name: "Semiconductors", completed: false },
        {
          id: "p10",
          name: "Magnetic Effect of Current and Magnetism",
          completed: false,
        },
        { id: "p11", name: "Alternating Current", completed: false },
        {
          id: "p12",
          name: "Kinetic Theory of Gases & Thermodynamics",
          completed: false,
        },
        { id: "p13", name: "Kinematics", completed: false },
        { id: "p14", name: "Work, Energy, and Power", completed: false },
        { id: "p15", name: "Laws of Motion", completed: false },
        { id: "p16", name: "Centre Of Mass", completed: false },
        { id: "p17", name: "Rotational Dynamics", completed: false },
        { id: "p18", name: "Modern Physics", completed: false },
        { id: "p19", name: "Wave Optics", completed: false },
        { id: "p20", name: "Current Electricity", completed: false },
      ],
    },
    // Chemistry topics with weightage
    {
      id: "chemistry",
      title: "Chemistry",
      topics: [
        { id: "c1", name: "Mole Concept", completed: false },
        { id: "c2", name: "Redox Reactions", completed: false },
        { id: "c3", name: "Electrochemistry", completed: false },
        { id: "c4", name: "Chemical Kinetics", completed: false },
        {
          id: "c5",
          name: "Solution & Colligative Properties",
          completed: false,
        },
        { id: "c6", name: "General Organic Chemistry", completed: false },
        { id: "c7", name: "Stereochemistry", completed: false },
        { id: "c8", name: "Hydrocarbon", completed: false },
        { id: "c9", name: "Alkyl Halides", completed: false },
        {
          id: "c10",
          name: "Carboxylic Acids & their Derivatives",
          completed: false,
        },
        {
          id: "c11",
          name: "Carbohydrates, Amino-Acids, and Polymers",
          completed: false,
        },
        { id: "c12", name: "Aromatic Compounds", completed: false },
        { id: "c13", name: "Atomic Structure", completed: false },
        { id: "c14", name: "Chemical Bonding", completed: false },
        { id: "c15", name: "Chemical And Ionic Equilibrium", completed: false },
        {
          id: "c16",
          name: "Solid-State And Surface Chemistry",
          completed: false,
        },
        {
          id: "c17",
          name: "Nuclear & Environmental Chemistry",
          completed: false,
        },
        {
          id: "c18",
          name: "Thermodynamics & the Gaseous State",
          completed: false,
        },
        {
          id: "c19",
          name: "Transition Elements & Coordination Compounds",
          completed: false,
        },
        {
          id: "c20",
          name: "Periodic table, p-Block Elements",
          completed: false,
        },
      ],
    },
  ],
  examType = "JEE",
  onTopicToggle = () => {},
}: SyllabusProgressProps) => {
  // Calculate total progress
  const totalTopics = subjects.reduce(
    (acc, subject) => acc + subject.topics.length,
    0,
  );
  const completedTopics = subjects.reduce(
    (acc, subject) => acc + subject.topics.filter((t) => t.completed).length,
    0,
  );

  return (
    <div className="w-full min-h-[600px] bg-background p-6 rounded-xl">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-6 text-card-foreground">
          <h2
            className={`text-2xl font-bold ${
              examType === "JEE" ? "text-orange-600" : "text-blue-600"
            }`}
          >
            {examType} Syllabus Progress
          </h2>
          <p className="text-muted-foreground mt-2">
            Track your progress through the complete {examType} syllabus
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <ProgressIndicator
            progress={completedTopics}
            total={totalTopics}
            label="Overall Syllabus Progress"
          />
        </div>

        {/* Subject Categories */}
        <div className="space-y-4">
          {subjects.map((subject) => (
            <SubjectCategory
              key={subject.id}
              title={subject.title}
              topics={subject.topics}
              onTopicToggle={(topicId) => onTopicToggle(subject.id, topicId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyllabusProgress;
