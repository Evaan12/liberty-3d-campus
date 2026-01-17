import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface CurriculumPhilosophy {
  title: string;
  description: string;
}

export interface CurriculumPillar {
  title: string;
  description: string;
  icon: string; // This will be the name of the icon, e.g., "BookOpen"
}

export interface Subject {
  name: string;
  description: string;
  icon: string; // This will be the name of the icon, e.g., "Calculator"
}

export interface GradeLevel {
  level: string;
  focus: string;
  description: string;
  subjects: string[];
}

export interface AcademicsData {
  philosophy: CurriculumPhilosophy;
  pillars: CurriculumPillar[];
  subjects: Subject[];
  grade_levels: GradeLevel[];
}

// Type for mapping string names to Lucide icon components
export type IconMap = {
  [key: string]: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};