import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() note: number;
    largeur: number;
    @Output() ratingClick: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.largeur = this.note * 75 / 5;
    }

    onClick():void {
        this.ratingClick.emit(`Click on star ${this.note}`);
    }
}