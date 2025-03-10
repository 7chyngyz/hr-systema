export interface Vacancy {
  id: number;
  company: string;
  companyInfo: string;
  position: string;
  industry: string;
  description: string;
  location: string;
  skills: string;
  employmentType: 'full-time' | 'part-time' | 'freelance';
  experience: number;
  salary: number;
  employerId?: number;
  datePosted?: Date;
}