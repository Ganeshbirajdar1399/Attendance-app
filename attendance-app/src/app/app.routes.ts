import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',component: HomeComponent,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'student', component: StudentComponent},
      {path: 'teacher',component: TeacherComponent },
      {path: 'admin',component: AdminComponent},
    ]
  },
];
