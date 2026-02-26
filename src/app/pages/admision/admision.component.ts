import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionSectionComponent } from '../../components/prekinder/admission-section/admission-section.component';

@Component({
  selector: 'app-admision',
  standalone: true,
  imports: [CommonModule, AdmissionSectionComponent],
  template: `
    <app-admission-section></app-admission-section>
  `,
  styles: []
})
export class AdmisionComponent {}
