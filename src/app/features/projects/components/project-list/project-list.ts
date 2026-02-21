import { Component } from '@angular/core';
import { Task, TaskList } from '../task-list/task-list';
import { CommonModule } from '@angular/common';
import { ProjectDetail } from '../project-detail/project-detail';
import { FormsModule } from '@angular/forms';
export type ProjectStatus = 'Planning' | 'En cours' | 'En revue' | 'Terminé';
export type Priority = 'Basse' | 'Moyenne' | 'Haute' | 'Critique';

export interface Project {
  id: string;
  name: string;
  client: string;
  description: string;
  manager: string;
  startDate: string; // ou Date
  endDate: string;   // ou Date
  budget: number;
  progress: number;  // en %
  priority: Priority;
  status: ProjectStatus;
  tasks: Task[];
}
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule,TaskList,ProjectDetail,FormsModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
 project: Project[] = [
    {
      id: 'PRJ-001',
      name: 'Plateforme E-commerce',
      client: 'TechStore Tunisia',
      description: 'Développement d’une plateforme e-commerce complète avec paiement en ligne.',
      manager: 'Amira Ben Salah',
      startDate: '2024-09-01',
      endDate: '2025-02-28',
      budget: 45000,
      progress: 65,
      priority: 'Haute',
      status: 'En cours',
      tasks: [
        {
          id: 'TASK-101',
          title: 'Conception UI/UX',
          description: 'Créer les maquettes Figma pour toutes les pages principales.',
          assignee: 'Sahar Trabelsi',
          dueDate: '2024-10-10',
          priority: 'Haute',
          status: 'Terminé',
          estimatedHours: 40,
          loggedHours: 42
        },
        {
          id: 'TASK-102',
          title: 'Implémentation Angular Frontend',
          description: 'Développer les composants Angular et intégrer Tailwind.',
          assignee: 'Mohamed Ali',
          dueDate: '2024-12-01',
          priority: 'Critique',
          status: 'En cours',
          estimatedHours: 120,
          loggedHours: 75
        }
      ]
    },
    {
      id: 'PRJ-002',
      name: 'Application Mobile Santé',
      client: 'Clinique El Amen',
      description: 'Application mobile pour gestion des rendez-vous et dossiers patients.',
      manager: 'Bassem Kamel',
      startDate: '2024-08-15',
      endDate: '2025-01-15',
      budget: 60000,
      progress: 90,
      priority: 'Critique',
      status: 'En revue',
      tasks: [
        {
          id: 'TASK-201',
          title: 'API Backend Node.js',
          description: 'Développement des endpoints REST sécurisés.',
          assignee: 'Sihem Hamza',
          dueDate: '2024-11-15',
          priority: 'Haute',
          status: 'Terminé',
          estimatedHours: 80,
          loggedHours: 85
        }
      ]
    }
  ];
   selectedProject: Project | null = null;
   isModalOpen: boolean = false;
   searchTerm: string = '';

  selectProject(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;

}
// Getter pour les projets filtrés
  get filteredProjects(): Project[] {
    if (!this.searchTerm) return this.project;
    return this.project.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
closeModal() {
  this.isModalOpen = false;
  this.selectedProject = null;
}}
