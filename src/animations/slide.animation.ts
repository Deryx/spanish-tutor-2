import { trigger, state, style, transition, animate, group } from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('bottom', style({ transform: 'translateY(0%)' })),
        state('top', style({ 
            transform: 'translateY(-100%)',
            visibility: 'hidden'
         })),
        transition('* => *', animate(500))
    ])
]