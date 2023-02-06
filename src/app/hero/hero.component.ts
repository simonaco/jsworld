import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'],
})
export class HeroComponent {
  images = [
    {
      src: '/castelsanpietro.jpeg',
      alt: 'Verona skyline',
    },
    {
      src: '/amsterdam.jpeg',
      alt: 'View over bridge in Amsterdam',
    },
    {
      src: '/teatro_romano.jpeg',
      alt: 'Teatro romano ruins',
    },
    {
      src: '/arena_0.jpeg',
      alt: 'Arena di Verona with Italian flag projection',
    },
    {
      src: '/dolomites.jpg',
      alt: 'Dolomiti mountains covered in snow',
    },
  ];
}
