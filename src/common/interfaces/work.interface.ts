import { Student } from "./student.interface";

export interface Work {
  name: string;
  student: Student[];
  introduction: string;
  explanation: string;
  youtube?: string;
  still?: string[];
  poster?: string[];
}
