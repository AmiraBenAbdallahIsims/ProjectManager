import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HighlightStatus } from './highlight-status';
import { PriorityColorPipe } from './priority-color-pipe';

export interface Task {
  id: string;
  title: string;
  description: string;
  assignee: string;
  dueDate: string; // ou Date si tu préfères
  priority: 'Basse' | 'Moyenne' | 'Haute' | 'Critique';
  status: 'En attente' | 'En cours' | 'Terminé' | 'En revue';
  estimatedHours: number;
  loggedHours: number;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,HighlightStatus, PriorityColorPipe],
  templateUrl: './task-list.html'
})
export class TaskList {
  @Input() tasks: Task[] = [];
}
