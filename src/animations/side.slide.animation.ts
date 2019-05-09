import { trigger, state, style, transition, animate, group } from '@angular/animations';

export const SideSlideAnimation = [
    trigger('sideSlide', [
        state('left', style({ transform: 'translateX(120%)' })),
        state('right', style({ transform: 'translateX(0%)' })),
        transition('* => *', animate(500))
    ])
  ];