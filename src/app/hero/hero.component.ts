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
      src: '/verona_sunset_2.jpg',
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
  ngSrcset = '640w, 750w, 828w, 1080w, 1200w, 1920w, 2048w, 3840w';
}
