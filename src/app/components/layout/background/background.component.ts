import { Component, OnInit } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';
import { Container } from '@tsparticles/engine';
import { MoveDirection, OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { NgParticlesService } from '@tsparticles/angular';

@Component({
  selector: 'app-background',
  imports: [NgxParticlesModule],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css',
})
export class BackgroundComponent implements OnInit {
  id = 'tsparticles';
  particlesOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        // onClick: {
        //   enable: true,
        //   mode: 'push',
        // },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ff5e00',
      },
      links: {
        color: '#ff5e00',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 250,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      console.log(engine);
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: Container): void {
    // console.log(container);
  }
}
