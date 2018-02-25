
import { Injectable } from '@angular/core';
import { scancodes } from '../locales/scancodes/scancodes.fr';
import { SymcodeLocale, usingSymcodes } from '../locales/scancodes/scancodes.common';

@Injectable()
export class ScancodeLayoutLocalizationService {
    public getLocalizedLayout(): SymcodeLocale {
        return usingSymcodes(this.currentLocale());
    }

    private currentLocale() {
        return scancodes;
    }
}
