export interface Vacancy {
  id: number;
  company: string;
  companyInfo: string;
  companyLogo?: string;
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
  applicationDate: string; // Дата размещения вакансии
}


export interface VacancyResponse {
  id: number;
  vacancyId: number; // Поле для связи с вакансией
  candidateName: string;  // Имя кандидата
  candidateEmail: string; // Электронная почта кандидата
  company: string; // Название компании
  companyLogo: string; // Логотип компании
  position: string; // Должность
  industry: string; // Отрасль
  applicationDate: string; // Дата подачи заявки
  status: string; // Статус отклика (например, "В ожидании", "Принят", "Отклонен")
}


