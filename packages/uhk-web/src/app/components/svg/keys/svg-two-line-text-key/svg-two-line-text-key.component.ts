import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'g[svg-two-line-text-key]',
    templateUrl: './svg-two-line-text-key.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgTwoLineTextKeyComponent implements OnInit {
    @Input() height: number;
    @Input() width: number;
    @Input() texts: string[];

    textY: number;
    spanXs: number[];
    spanYs: number[];

    constructor() {
        this.spanXs = [];
        this.spanYs = [];
    }

    ngOnInit() {
        this.textY = this.height / 2;

        if (this.texts.length != 3) {
            this.spanXs.push(this.width / 2);
            this.spanYs.push(0.75 * this.height);

            for (let i = 1; i < this.texts.length; ++i) {
                let lx = this.texts.length == 2 ? 0.5 : ((i - 1) / (this.texts.length - 2));
                this.spanYs.push((0.75 - 0.5) * this.height);
                this.spanXs.push(0.2 * this.width + lx * this.width * 0.6);
            }
            
        } else {
            this.spanXs.push(0.2 * this.width);
            this.spanYs.push(0.75 * this.height);

            this.spanXs.push(this.width / 2);
            this.spanYs.push((0.75 - 0.5) * this.height);

            this.spanXs.push(0.2 * this.width + this.width * 0.6);
            this.spanYs.push(0.75 * this.height);
        }
    }
}
