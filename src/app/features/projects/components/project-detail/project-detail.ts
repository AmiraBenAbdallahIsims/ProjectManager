import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project-list/project-list'; // adapte le chemin

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css'],
})
export class ProjectDetail {
  // Cette propriété recevra le projet sélectionné depuis ProjectList
  @Input() project!: Project;
}
