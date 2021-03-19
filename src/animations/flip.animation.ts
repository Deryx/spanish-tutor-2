import { AnimationTriggerMetadata, animate, state, style, transition, trigger } from "@angular/animations";

export class FlipAnimation {
    static animations = FlipAnimation.getAnimations();

    static getAnimations(): Array<AnimationTriggerMetadata> {
        return [
            trigger('flipState', [
                state(
                    'active',
                    style({
                        transform: 'rotateX(180deg)',
                    })
                ),
                state(
                    'inactive',
                    style({
                        transform: 'none',
                    })
                ),
                transition('active => inactive', animate('600ms ease-out')),
                transition('inactive => active', animate('1000ms ease-in')),
            ]),
        ];
    }
}