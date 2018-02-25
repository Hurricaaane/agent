import { Injectable } from '@angular/core';
import { KeystrokeType } from 'uhk-common';
import { scancodesCommon, SymcodeLocale } from '../locales/scancodes/scancodes.common';
import { scancodes } from '../locales/scancodes/scancodes.fr';

@Injectable()
export class MapperService {

    private basicScanCodeTextMap: Map<number, string[]>;
    private mediaScanCodeTextMap: Map<number, string[]>;
    private sytemScanCodeTextMap: Map<number, string[]>;

    private basicScancodeIcons: Map<number, string>;
    private mediaScancodeIcons: Map<number, string>;
    private systemScancodeIcons: Map<number, string>;
    private nameToFileName: Map<string, string>;

    constructor() {
        this.initScanCodeTextMap();
        this.initScancodeIcons();
        this.initNameToFileNames();
    }

    public scanCodeToText(scanCode: number, type: KeystrokeType = KeystrokeType.basic): string[] {
        let map: Map<number, string[]>;
        switch (type) {
            case KeystrokeType.shortMedia:
            case KeystrokeType.longMedia:
                map = this.mediaScanCodeTextMap;
                break;
            case KeystrokeType.system:
                map = this.sytemScanCodeTextMap;
                break;
            default:
                map = this.basicScanCodeTextMap;
                break;
        }
        return map.get(scanCode);
    }

    public hasScancodeIcon(scancode: number, type = KeystrokeType.basic): boolean {
        let map: Map<number, string>;
        switch (type) {
            case KeystrokeType.basic:
                map = this.basicScancodeIcons;
                break;
            case KeystrokeType.shortMedia:
            case KeystrokeType.longMedia:
                map = this.mediaScancodeIcons;
                break;
            case KeystrokeType.system:
                map = this.systemScancodeIcons;
                break;
            default:
                map = new Map<number, string>();
        }
        return map.has(scancode);
    }

    public scanCodeToSvgImagePath(scanCode: number, type = KeystrokeType.basic): string {
        let map: Map<number, string>;
        switch (type) {
            case KeystrokeType.basic:
                map = this.basicScancodeIcons;
                break;
            case KeystrokeType.shortMedia:
            case KeystrokeType.longMedia:
                map = this.mediaScancodeIcons;
                break;
            case KeystrokeType.system:
                map = this.systemScancodeIcons;
                break;
            default:
                return undefined;
        }
        const id = map.get(scanCode);
        if (!id) {
            return undefined;
        }
        return `assets/compiled_sprite.svg#${id}`;
    }

    public getIcon(iconName: string): string {
        return 'assets/compiled_sprite.svg#' + this.nameToFileName.get(iconName);
    }

    public modifierMapper(x: number) {
        if (x < 8) {
            return Math.floor(x / 2) * 4 + 1 - x; // 1, 0, 3, 2, 5, 4, 7, 6
        } else {
            return x;
        }
    }

    private initScanCodeTextMap(): void {
        const keymap = this.mergeScancodes(scancodesCommon, scancodes);

        this.basicScanCodeTextMap = new Map<number, string[]>();
        for (const it of keymap.items.filter(value => !value.types.includes('media') && !value.types.includes('system'))) {
            this.basicScanCodeTextMap.set(it.id, it.labels);
        }

        this.mediaScanCodeTextMap = new Map<number, string[]>();
        for (const it of keymap.items.filter(value => value.types.includes('media'))) {
            this.basicScanCodeTextMap.set(it.id, it.labels);
        }

        this.sytemScanCodeTextMap = new Map<number, string[]>();
        for (const it of keymap.items.filter(value => value.types.includes('system'))) {
            this.basicScanCodeTextMap.set(it.id, it.labels);
        }
    }

    private mergeScancodes(base, stencil) {
        const copy = Object.assign({}, stencil) as SymcodeLocale;

        for (const it of base.items) {
            if (!copy.items.some(value => value.id === it.id)) {
                copy.items.push(Object.assign({}, it));
            }
        }

        return copy;
    }

    private initScancodeIcons(): void {
        this.basicScancodeIcons = new Map<number, string>();
        this.basicScancodeIcons.set(79, 'icon-kbd__mod--arrow-right');
        this.basicScancodeIcons.set(80, 'icon-kbd__mod--arrow-left');
        this.basicScancodeIcons.set(81, 'icon-kbd__mod--arrow-down');
        this.basicScancodeIcons.set(82, 'icon-kbd__mod--arrow-up');
        this.basicScancodeIcons.set(101, 'icon-kbd__mod--menu');

        this.mediaScancodeIcons = new Map<number, string>();
        this.mediaScancodeIcons.set(138, 'icon-kbd__fn--browser');
        this.mediaScancodeIcons.set(176, 'icon-kbd__media--play');
        this.mediaScancodeIcons.set(177, 'icon-kbd__media--pause');
        this.mediaScancodeIcons.set(181, 'icon-kbd__media--next');
        this.mediaScancodeIcons.set(182, 'icon-kbd__media--prev');
        this.mediaScancodeIcons.set(184, 'icon-kbd__fn--eject');
        this.mediaScancodeIcons.set(226, 'icon-kbd__media--mute');
        this.mediaScancodeIcons.set(233, 'icon-kbd__media--vol-up');
        this.mediaScancodeIcons.set(234, 'icon-kbd__media--vol-down');

        this.mediaScancodeIcons.set(406, 'icon-kbd__media--web-browser');
        this.mediaScancodeIcons.set(394, 'icon-kbd__media--email-client');
        this.mediaScancodeIcons.set(402, 'icon-kbd__media--calculator');

        this.systemScancodeIcons = new Map<number, string>();
        this.systemScancodeIcons.set(129, 'icon-kbd__system_power_down');
        this.systemScancodeIcons.set(130, 'icon-kbd__system_sleep');
        this.systemScancodeIcons.set(131, 'icon-kbd__system_wake_up');
    }

    private initNameToFileNames(): void {
        this.nameToFileName = new Map<string, string>();
        this.nameToFileName.set('toggle', 'icon-kbd__fn--toggle');
        this.nameToFileName.set('double-tap', 'icon-kbd__fn--double-tap');
        this.nameToFileName.set('switch-keymap', 'icon-kbd__mod--switch-keymap');
        this.nameToFileName.set('macro', 'icon-icon__macro');
        this.nameToFileName.set('shift', 'icon-kbd__default--modifier-shift');
        this.nameToFileName.set('option', 'icon-kbd__default--modifier-option');
        this.nameToFileName.set('command', 'icon-kbd__default--modifier-command');
        this.nameToFileName.set('mouse', 'icon-kbd__mouse');
        this.nameToFileName.set('left-arrow', 'icon-kbd__mod--arrow-left');
        this.nameToFileName.set('right-arrow', 'icon-kbd__mod--arrow-right');
        this.nameToFileName.set('down-arrow', 'icon-kbd__mod--arrow-down');
        this.nameToFileName.set('up-arrow', 'icon-kbd__mod--arrow-up');
        this.nameToFileName.set('scroll-left', 'icon-kbd__mouse--scroll-left');
        this.nameToFileName.set('scroll-right', 'icon-kbd__mouse--scroll-right');
        this.nameToFileName.set('scroll-down', 'icon-kbd__mouse--scroll-down');
        this.nameToFileName.set('scroll-up', 'icon-kbd__mouse--scroll-up');
    }

}
