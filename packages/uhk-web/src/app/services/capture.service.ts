import { Injectable } from '@angular/core';
import { SymcodeLocale } from '../locales/scancodes/scancodes.common';
import { ScancodeLayoutLocalizationService } from './scancode-layout-localization.service';

@Injectable()
export class CaptureService {
    private mapping: Map<number, number>;
    private leftModifiers: Map<number, boolean>;
    private rightModifiers: Map<number, boolean>;

    constructor(private scancodeLayoutLocalizationService: ScancodeLayoutLocalizationService) {
        this.leftModifiers = new Map<number, boolean>();
        this.rightModifiers = new Map<number, boolean>();
        this.mapping = new Map<number, number>();
    }

    public getMap(code: number) {
        return this.mapping.get(code);
    }

    public hasMap(code: number) {
        return this.mapping.has(code);
    }

    public setModifier(left: boolean, code: number) {
        return left ? this.leftModifiers.set(code, true) : this.rightModifiers.set(code, true);
    }

    public getModifiers(left: boolean) {
        return left ? this.reMap(this.leftModifiers) : this.reMap(this.rightModifiers);
    }

    public initModifiers() {
        this.leftModifiers.set(16, false); // Shift
        this.leftModifiers.set(17, false); // Ctrl
        this.leftModifiers.set(18, false); // Alt
        this.leftModifiers.set(91, false); // Super

        this.rightModifiers.set(16, false); // Shift
        this.rightModifiers.set(17, false); // Ctrl
        this.rightModifiers.set(18, false); // Alt
        this.rightModifiers.set(91, false); // Super
    }

    populateKeycodes (effect: SymcodeLocale, destination: Map<number, number>) {
        effect.overrides.forEach(value => destination.set(value.from, value.to));
    }

    public populateMapping () {
        const symcodes = this.scancodeLayoutLocalizationService.getLocalizedLayout();
        this.populateKeycodes(symcodes, this.mapping);
    }

    private reMap(value: Map<number, boolean>): boolean[] {
        return [value.get(16), value.get(17), value.get(91), value.get(18)];
    }
}
