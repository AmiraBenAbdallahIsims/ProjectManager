import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project-list/project-list'; // adapte le chemin
import { PriorityColorPipe } from '../task-list/priority-color-pipe';
import { HighlightStatus } from '../task-list/highlight-status';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule ,HighlightStatus, PriorityColorPipe],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css'],
})
export class ProjectDetail {
  // Cette propriété recevra le projet sélectionné depuis ProjectList
  @Input() project!: Project;
   // Méthode pour calculer le pourcentage de tâches terminées
  getProgress(): number {
    if (!this.project.tasks || this.project.tasks.length === 0) return 0;

    const doneTasks = this.project.tasks.filter(t => t.status === 'Terminé').length;
    return (doneTasks / this.project.tasks.length) * 100;
  }
}

