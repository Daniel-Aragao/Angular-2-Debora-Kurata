import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html'
})
    
export class StarComponent{
    @Input() rating: number;
    starWitdh: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWitdh = this.rating * 86 / 5;
    }

    onClick() {
        this.ratingClicked.emit(`the raiting ${this.rating} was clicked!`)
    }
}