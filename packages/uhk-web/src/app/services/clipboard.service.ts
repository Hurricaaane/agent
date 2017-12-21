import {Injectable} from '@angular/core';
import {Layer} from 'uhk-common/src/config-serializer/config-items/layer';
import {KeyAction} from 'uhk-common/src/config-serializer/config-items/key-action/key-action';
import {KeystrokeAction} from 'uhk-common/src/config-serializer/config-items/key-action/keystroke-action';
import {SwitchLayerAction} from 'uhk-common/src/config-serializer/config-items/key-action/switch-layer-action';
import {PlayMacroAction} from 'uhk-common/src/config-serializer/config-items/key-action/play-macro-action';
import {MouseAction} from 'uhk-common/src/config-serializer/config-items/key-action/mouse-action';
import {
    SwitchKeymapAction,
    UnresolvedSwitchKeymapAction
} from 'uhk-common/src/config-serializer/config-items/key-action/switch-keymap-action';
import {NoneAction} from 'uhk-common/src/config-serializer/config-items/key-action/none-action';

@Injectable()
export class ClipboardService {
    public isSelectionModeEnabled: boolean;
    private selected: object = {};
    private content: object;
    private contentCount: number;

    constructor() {
    }

    toggle(moduleId: number, keyId: number) {
        if (!this.selected[moduleId]) {
            this.selected[moduleId] = {};
        }
        this.selected[moduleId][keyId] = !this.selected[moduleId][keyId];
    }

    isSelected(moduleId: number, keyId: number) {
        if (!this.selected[moduleId]) {
            return false;
        }

        return this.selected[moduleId][keyId];
    }

    countSelected(): number {
        let c = 0;
        for (let moduleId in this.selected) {
            for (let keyId in this.selected[moduleId] as any) {
                c += this.selected[moduleId][keyId] ? 1 : 0;
            }
        }
        return c;
    }

    countCopied(): number {
        return this.contentCount;
    }

    copySelectionOutOf(layer: Layer) {
        let stencil = {};
        let count = 0;
        for (let moduleId in this.selected) {
            for (let keyId in this.selected[moduleId] as any) {
                if (this.selected[moduleId][keyId]) {
                    // FIXME: Having something selected does not necessarily mean something exists in the current layer.
                    let keyAction = ClipboardService.cloneKeyAction(layer.modules[moduleId].keyActions[keyId]);
                    if (!stencil[moduleId]) {
                        stencil[moduleId] = {};
                    }
                    stencil[moduleId][keyId] = keyAction;
                    count++;
                }
            }
        }

        this.content = stencil;
        this.contentCount = count;
    }

    pasteInto(layer: Layer) {
        console.log("a")
        for (let moduleId in this.content) {
            console.log("b")
            if (layer.modules[moduleId]) {
                console.log("c")
                for (let keyId in this.content[moduleId] as any) {
                    console.log("d")
                    // if (layer.modules[moduleId].keyActions[keyId] !== undefined) {
                        console.log("e")
                        console.log(layer.modules[moduleId].keyActions[keyId])
                        console.log(this.content[moduleId][keyId])
                        layer.modules[moduleId].keyActions[keyId] = ClipboardService.cloneKeyAction(this.content[moduleId][keyId]);
                    // }
                }
            }
        }
    }

    clear() {
        delete this.content;
        this.contentCount = 0;
    }

    static cloneKeyAction(action: KeyAction): KeyAction {
        switch (action.getName()) {
            case "SwitchKeymapAction": return new SwitchKeymapAction(action as SwitchKeymapAction);
            case "UnresolvedSwitchKeymapAction": return new UnresolvedSwitchKeymapAction((action as UnresolvedSwitchKeymapAction).keymapIndex);
            case "NoneAction": return new NoneAction();
            case "MouseAction": return new MouseAction(action as MouseAction);
            case "PlayMacroAction": return new PlayMacroAction(action as PlayMacroAction);
            case "SwitchLayerAction": return new SwitchLayerAction(action as SwitchLayerAction);
            case "KeystrokeAction": return new KeystrokeAction(action as KeystrokeAction);
        }

        throw new Error("Invalid KeyAction, can't clone")
    }

    hasContent(): boolean {
        return !!this.content;
    }
}
