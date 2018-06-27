export interface SymcodeLocale {
    name: string;
    items: Symcode[];
    overrides: SymOverride[];
    groups: SymGroup[] | undefined;
}

export interface Symcode {
    id: number;
    labels: string[];
    types: string[];
}

export interface SymOverride {
    from: number;
    to: number;
    reason: string | undefined;
}

export interface SymGroup {
    type: string;
    label: string;
    orderFn: (a: Symcode, b: Symcode) => number;
}

export const usingSymcodes = function (stencil: SymcodeLocale) {
    const copy = Object.assign({}, stencil) as SymcodeLocale;

    for (const it of base.items) {
        if (!copy.items.some(value => value.id === it.id)) {
            copy.items.push(Object.assign({}, it));
        }
    }
    copy.name = stencil.name || base.name;
    copy.groups = stencil.groups || base.groups;
    for (const it of base.overrides) {
        if (!copy.overrides.some(value => value.from === it.from)) {
            copy.overrides.push(Object.assign({}, it));
        }
    }

    return copy;
};

const compById = function (a, b) {
    return a.id < b.id ? -1 : a.id === b.id ? 0 : 1;
};
const compByLabel = function (a, b) {
    return a.labels[0] < b.labels[0] ? -1 : a.labels[0] === b.labels[0] ? 0 : 1;
};

const base: SymcodeLocale = {
    name: 'Base locale',
    items: [
        {id: 0, labels: ['None'], types: ['unassigned']},
        {id: 4, labels: ['A'], types: ['letter']},
        {id: 5, labels: ['B'], types: ['letter']},
        {id: 6, labels: ['C'], types: ['letter']},
        {id: 7, labels: ['D'], types: ['letter']},
        {id: 8, labels: ['E'], types: ['letter']},
        {id: 9, labels: ['F'], types: ['letter']},
        {id: 10, labels: ['G'], types: ['letter']},
        {id: 11, labels: ['H'], types: ['letter']},
        {id: 12, labels: ['I'], types: ['letter']},
        {id: 13, labels: ['J'], types: ['letter']},
        {id: 14, labels: ['K'], types: ['letter']},
        {id: 15, labels: ['L'], types: ['letter']},
        {id: 16, labels: ['M'], types: ['letter']},
        {id: 17, labels: ['N'], types: ['letter']},
        {id: 18, labels: ['O'], types: ['letter']},
        {id: 19, labels: ['P'], types: ['letter']},
        {id: 20, labels: ['Q'], types: ['letter']},
        {id: 21, labels: ['R'], types: ['letter']},
        {id: 22, labels: ['S'], types: ['letter']},
        {id: 23, labels: ['T'], types: ['letter']},
        {id: 24, labels: ['U'], types: ['letter']},
        {id: 25, labels: ['V'], types: ['letter']},
        {id: 26, labels: ['W'], types: ['letter']},
        {id: 27, labels: ['X'], types: ['letter']},
        {id: 28, labels: ['Y'], types: ['letter']},
        {id: 29, labels: ['Z'], types: ['letter']},
        {id: 30, labels: ['1', '!'], types: ['digit', 'symbol', 'top-row']},
        {id: 31, labels: ['2', '@'], types: ['digit', 'symbol', 'top-row']},
        {id: 32, labels: ['3', '#'], types: ['digit', 'symbol', 'top-row']},
        {id: 33, labels: ['4', '$'], types: ['digit', 'symbol', 'top-row']},
        {id: 34, labels: ['5', '%'], types: ['digit', 'symbol', 'top-row']},
        {id: 35, labels: ['6', '^'], types: ['digit', 'symbol', 'top-row']},
        {id: 36, labels: ['7', '&'], types: ['digit', 'symbol', 'top-row']},
        {id: 37, labels: ['8', '*'], types: ['digit', 'symbol', 'top-row']},
        {id: 38, labels: ['9', '('], types: ['digit', 'symbol', 'top-row']},
        {id: 39, labels: ['0', ')'], types: ['digit', 'symbol', 'top-row']},
        {id: 40, labels: ['Enter'], types: ['whitespace']},
        {id: 41, labels: ['Esc'], types: ['misc']},
        {id: 42, labels: ['Backspace'], types: ['misc']},
        {id: 43, labels: ['Tab'], types: ['whitespace']},
        {id: 44, labels: ['Space'], types: ['whitespace']},
        {id: 45, labels: ['-', '_'], types: ['symbol', 'top-row']},
        {id: 46, labels: ['=', '+'], types: ['symbol', 'top-row']},
        {id: 47, labels: ['[', '{'], types: ['symbol']},
        {id: 48, labels: [']', '}'], types: ['symbol']},
        {id: 49, labels: ['\\', '|'], types: ['symbol']},
        {id: 50, labels: ['NON_US_HASHMARK_AND_TILDE'], types: ['symbol']},
        {id: 51, labels: [';', ','], types: ['symbol']},
        {id: 52, labels: ['\'', '"'], types: ['symbol']},
        {id: 53, labels: ['`', '~'], types: ['symbol', 'top-row']},
        {id: 54, labels: [',', '<'], types: ['symbol']},
        {id: 55, labels: ['.', '>'], types: ['symbol']},
        {id: 56, labels: ['/', '?'], types: ['symbol']},
        {id: 57, labels: ['Caps Lock'], types: ['misc']},
        {id: 58, labels: ['F1'], types: ['function']},
        {id: 59, labels: ['F2'], types: ['function']},
        {id: 60, labels: ['F3'], types: ['function']},
        {id: 61, labels: ['F4'], types: ['function']},
        {id: 62, labels: ['F5'], types: ['function']},
        {id: 63, labels: ['F6'], types: ['function']},
        {id: 64, labels: ['F7'], types: ['function']},
        {id: 65, labels: ['F8'], types: ['function']},
        {id: 66, labels: ['F9'], types: ['function']},
        {id: 67, labels: ['F10'], types: ['function']},
        {id: 68, labels: ['F11'], types: ['function']},
        {id: 69, labels: ['F12'], types: ['function']},
        {id: 70, labels: ['PrtScn'], types: ['misc']},
        {id: 71, labels: ['Scroll Lock'], types: ['misc']},
        {id: 72, labels: ['Pause'], types: ['misc']},
        {id: 73, labels: ['Insert'], types: ['misc']},
        {id: 74, labels: ['Home'], types: ['navigation']},
        {id: 75, labels: ['PgUp'], types: ['navigation']},
        {id: 76, labels: ['Del'], types: ['misc']},
        {id: 77, labels: ['End'], types: ['navigation']},
        {id: 78, labels: ['PgDn'], types: ['navigation']},
        {id: 79, labels: ['Right Arrow'], types: ['navigation']},
        {id: 80, labels: ['Left Arrow'], types: ['navigation']},
        {id: 81, labels: ['Down Arrow'], types: ['navigation']},
        {id: 82, labels: ['Up Arrow'], types: ['navigation']},
        {id: 83, labels: ['Num Lock'], types: ['navigation']},
        {id: 84, labels: ['/'], types: ['numpad']},
        {id: 85, labels: ['*'], types: ['numpad']},
        {id: 86, labels: ['-'], types: ['numpad']},
        {id: 87, labels: ['+'], types: ['numpad']},
        {id: 88, labels: ['Enter'], types: ['numpad']},
        {id: 89, labels: ['end', '1'], types: ['numpad']},
        {id: 90, labels: ['2'], types: ['numpad']},
        {id: 91, labels: ['pgdn', '3'], types: ['numpad']},
        {id: 92, labels: ['4'], types: ['numpad']},
        {id: 93, labels: ['5'], types: ['numpad']},
        {id: 94, labels: ['6'], types: ['numpad']},
        {id: 95, labels: ['home', '7'], types: ['numpad']},
        {id: 96, labels: ['8'], types: ['numpad']},
        {id: 97, labels: ['pgup', '9'], types: ['numpad']},
        {id: 98, labels: ['Insert', '0'], types: ['numpad']},
        {id: 99, labels: ['Del', '.'], types: ['numpad']},
        {id: 100, labels: ['|', 'ISO'], types: ['symbol']},
        {id: 104, labels: ['F13'], types: ['function']},
        {id: 105, labels: ['F14'], types: ['function']},
        {id: 106, labels: ['F15'], types: ['function']},
        {id: 107, labels: ['F16'], types: ['function']},
        {id: 108, labels: ['F17'], types: ['function']},
        {id: 109, labels: ['F18'], types: ['function']},
        {id: 110, labels: ['F19'], types: ['function']},
        {id: 111, labels: ['F20'], types: ['function']},
        {id: 112, labels: ['F21'], types: ['function']},
        {id: 113, labels: ['F22'], types: ['function']},
        {id: 114, labels: ['F23'], types: ['function']},
        {id: 115, labels: ['F24'], types: ['function']},
        {id: 101, labels: ['Menu'], types: ['misc']},
        {id: 176, labels: ['00'], types: ['misc']},
        {id: 177, labels: ['000'], types: ['misc']},

        {id: 138, labels: ['WWW'], types: ['media']},
        {id: 176, labels: ['Play'], types: ['media']},
        {id: 177, labels: ['Pause'], types: ['media']},
        {id: 181, labels: ['Next'], types: ['media']},
        {id: 182, labels: ['Prev'], types: ['media']},
        {id: 183, labels: ['Stop'], types: ['media']},
        {id: 184, labels: ['Eject'], types: ['media']},
        {id: 204, labels: ['Eject', 'Stop'], types: ['media']},
        {id: 205, labels: ['Pause', 'Play'], types: ['media']},
        {id: 226, labels: ['Mute'], types: ['media']},
        {id: 233, labels: ['Vol +'], types: ['media']},
        {id: 234, labels: ['Vol -'], types: ['media']},
        {id: 406, labels: ['Launch Web Browser'], types: ['media', 'launch-app']},
        {id: 394, labels: ['Launch Email Client'], types: ['media', 'launch-app']},
        {id: 402, labels: ['Launch Calculator'], types: ['media', 'launch-app']},

        {id: 129, labels: ['Power Down'], types: ['system']},
        {id: 130, labels: ['Sleep'], types: ['system']},
        {id: 131, labels: ['Wake Up'], types: ['system']}
    ],
    overrides: [
        {from: 8, to: 42, reason: '/ Backspace'},
        {from: 9, to: 43, reason: '/ Tab'},
        {from: 13, to: 40, reason: 'Enter'},
        {from: 19, to: 72, reason: 'Pause/break'},
        {from: 20, to: 57, reason: 'Caps lock'},
        {from: 27, to: 41, reason: 'Escape'},
        {from: 32, to: 44, reason: '(space)'},
        {from: 33, to: 75, reason: 'Page up'},
        {from: 34, to: 78, reason: 'Page down'},
        {from: 35, to: 77, reason: 'End'},
        {from: 36, to: 74, reason: 'Home'},
        {from: 37, to: 80, reason: 'Left arrow'},
        {from: 38, to: 82, reason: 'Up arrow'},
        {from: 39, to: 79, reason: 'Right arrow'},
        {from: 40, to: 81, reason: 'Down arrow'},
        {from: 45, to: 73, reason: 'Insert'},
        {from: 46, to: 76, reason: 'Delete'},
        {from: 48, to: 39, reason: '0'},
        {from: 49, to: 30, reason: '1'},
        {from: 50, to: 31, reason: '2'},
        {from: 51, to: 32, reason: '3'},
        {from: 52, to: 33, reason: '4'},
        {from: 53, to: 34, reason: '5'},
        {from: 54, to: 35, reason: '6'},
        {from: 55, to: 36, reason: '7'},
        {from: 56, to: 37, reason: '8'},
        {from: 57, to: 38, reason: '9'},
        {from: 65, to: 4, reason: '/ A'},
        {from: 66, to: 5, reason: '/ B'},
        {from: 67, to: 6, reason: '/ C'},
        {from: 68, to: 7, reason: '/ D'},
        {from: 69, to: 8, reason: '/ E'},
        {from: 70, to: 9, reason: '/ F'},
        {from: 71, to: 10, reason: 'G'},
        {from: 72, to: 11, reason: 'H'},
        {from: 73, to: 12, reason: 'I'},
        {from: 74, to: 13, reason: 'J'},
        {from: 75, to: 14, reason: 'K'},
        {from: 76, to: 15, reason: 'L'},
        {from: 77, to: 16, reason: 'M'},
        {from: 78, to: 17, reason: 'N'},
        {from: 79, to: 18, reason: 'O'},
        {from: 80, to: 19, reason: 'P'},
        {from: 81, to: 20, reason: 'Q'},
        {from: 82, to: 21, reason: 'R'},
        {from: 83, to: 22, reason: 'S'},
        {from: 84, to: 23, reason: 'T'},
        {from: 85, to: 24, reason: 'U'},
        {from: 86, to: 25, reason: 'V'},
        {from: 87, to: 26, reason: 'W'},
        {from: 88, to: 27, reason: 'X'},
        {from: 89, to: 28, reason: 'Y'},
        {from: 90, to: 29, reason: 'Z'},
        {from: 93, to: 101, reason: 'Menu'},
        {from: 96, to: 98, reason: 'Num pad 0'},
        {from: 97, to: 89, reason: 'Num pad 1'},
        {from: 98, to: 90, reason: 'Num pad 2'},
        {from: 99, to: 91, reason: 'Num pad 3'},
        {from: 100, to: 92, reason: 'Num pad 4'},
        {from: 101, to: 93, reason: 'Num pad 5'},
        {from: 102, to: 94, reason: 'Num pad 6'},
        {from: 103, to: 95, reason: 'Num pad 7'},
        {from: 104, to: 96, reason: 'Num pad 8'},
        {from: 105, to: 97, reason: 'Num pad 9'},
        {from: 106, to: 85, reason: 'Multiply'},
        {from: 107, to: 87, reason: 'Add'},
        {from: 109, to: 86, reason: 'Subtract'},
        {from: 110, to: 99, reason: 'Decimal point'},
        {from: 111, to: 84, reason: 'Divide'},
        {from: 112, to: 58, reason: 'F1'},
        {from: 113, to: 59, reason: 'F2'},
        {from: 114, to: 60, reason: 'F3'},
        {from: 115, to: 61, reason: 'F4'},
        {from: 116, to: 62, reason: 'F5'},
        {from: 117, to: 63, reason: 'F6'},
        {from: 118, to: 64, reason: 'F7'},
        {from: 119, to: 65, reason: 'F8'},
        {from: 120, to: 66, reason: 'F9'},
        {from: 121, to: 67, reason: 'F10'},
        {from: 122, to: 68, reason: 'F11'},
        {from: 123, to: 69, reason: 'F12'},
        {from: 144, to: 83, reason: 'Num lock'},
        {from: 145, to: 71, reason: 'Scroll lock'},
        {from: 186, to: 51, reason: 'Semi-colon'},
        {from: 187, to: 46, reason: 'Equal sign'},
        {from: 188, to: 54, reason: 'Comma'},
        {from: 189, to: 45, reason: 'Dash'},
        {from: 190, to: 55, reason: 'Period'},
        {from: 191, to: 56, reason: 'Forward slash'},
        {from: 192, to: 53, reason: 'Grave accent'},
        {from: 219, to: 47, reason: 'Open bracket'},
        {from: 220, to: 49, reason: 'Back slash'},
        {from: 221, to: 48, reason: 'Close bracket'},
        {from: 222, to: 52, reason: 'Single quote'}
    ],
    groups: [
        {type: 'unassigned', label: 'None', orderFn: compById },
        {type: 'letter', label: 'Letter', orderFn: compByLabel },
        {type: 'digit', label: 'Number', orderFn: compByLabel },
        {type: 'symbol', label: 'Symbol', orderFn: compById },
        {type: 'whitespace', label: 'Whitespace', orderFn: compById },
        {type: 'misc', label: 'Misc', orderFn: compById },
        {type: 'function', label: 'Function', orderFn: compById },
        {type: 'navigation', label: 'Navigation', orderFn: compById },
        {type: 'media', label: 'Media', orderFn: compById },
        {type: 'launch-app', label: 'Launch Application', orderFn: compById },
        {type: 'system', label: 'System', orderFn: compById }
    ]
};
