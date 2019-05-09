import { AnimationTriggerMetadata, animate, state, style, transition, trigger } from "@angular/animations";

export class FadeAnimation {
    static animations = FadeAnimation.getAnimations();

    static getAnimations(): Array<AnimationTriggerMetadata> {
        return [
            trigger('fadeState', [
                state('in' , style({ opacity: 1 })),
                state('out', style({ opacity: 0 })),
                transition('* => *', animate('1s'))
            ]),
        ];
    }
}