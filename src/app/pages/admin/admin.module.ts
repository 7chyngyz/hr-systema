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
import { MyResponsesComponent } from "./jobseeker/components/my-responses/my-responses.component";
import { CandidatesComponent } from "./employer/components/candidates/candidates.component";

@NgModule({
    declarations: [
        AdminComponent,
        MyVacanciesComponent, 
        CreateVacanciesComponent, 
        EditVacancyComponent, 
        CreateProfile,
        ResumeComponent,
        EditProfileComponent, 
        MyResponsesComponent, 
        CandidatesComponent,
    ],
    imports: [RouterModule.forChild([]), CommonModule, FormsModule],
    exports: [
        AdminComponent, 
        MyVacanciesComponent,
        CreateVacanciesComponent, 
        EditVacancyComponent, 
        CreateProfile, 
        ResumeComponent, 
        EditProfileComponent, 
        MyResponsesComponent
    ]
}) 

export class AdminModule {}