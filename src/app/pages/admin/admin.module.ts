import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CreateVacanciesComponent } from "./employer/components/create-vacancies/create-vacancies.component";
import { MyVacanciesComponent } from "./employer/components/my-vacancy.component.ts/my-vacancies.component";
import { EditVacancyComponent } from "./employer/components/edit-vacancy/edit-vacancy.component";
import { ResumeComponent } from "./jobseeker/components/profile/resume.component";
import { CreateProfile } from "./jobseeker/components/create-profile/create-profile.component";
import { EditProfileComponent } from "./jobseeker/components/edit-profile/edit-profile.component";

@NgModule({
    declarations: [AdminComponent, MyVacanciesComponent, CreateVacanciesComponent, EditVacancyComponent, CreateProfile, ResumeComponent, EditProfileComponent],
    imports: [RouterModule.forChild([]), CommonModule, FormsModule],
    exports: [AdminComponent, MyVacanciesComponent, CreateVacanciesComponent, EditVacancyComponent, CreateProfile, ResumeComponent, EditProfileComponent]
}) 

export class AdminModule {}