import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityColor',
  standalone: true
})
export class PriorityColorPipe implements PipeTransform {
  transform(priority: string): string {
  switch (priority) {
    case 'Critique':
      return 'bg-red-200 text-red-800';
    case 'Haute':
      return 'bg-orange-200 text-orange-800';
    case 'Moyenne':
      return 'bg-blue-200 text-blue-800';
    case 'Basse':
      return 'bg-slate-200 text-slate-700';
    default:
      return 'bg-gray-200 text-gray-500';
  }
}
}
