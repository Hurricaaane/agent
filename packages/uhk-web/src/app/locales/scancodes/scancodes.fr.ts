import { SymcodeLocale } from './scancodes.common';

export const scancodes: SymcodeLocale = {
    name: 'Français (France)',
    items: [
        {id: 4, labels: ['Q'], types: ['letter']},
        {id: 16, labels: [',', '?'], types: ['symbol']},
        {id: 20, labels: ['A'], types: ['letter']},
        {id: 26, labels: ['Z'], types: ['letter']},
        {id: 29, labels: ['W'], types: ['letter']},
        {id: 30, labels: ['&', '1'], types: ['digit', 'symbol', 'top row']},
        {id: 31, labels: ['é', '2', '~'], types: ['digit', 'symbol', 'top row']},
        {id: 32, labels: ['"', '3', '#'], types: ['digit', 'symbol', 'top row']},
        {id: 33, labels: ['\'', '4', '{'], types: ['digit', 'symbol', 'top row']},
        {id: 34, labels: ['(', '5', '['], types: ['digit', 'symbol', 'top row']},
        {id: 35, labels: ['-', '6', '|'], types: ['digit', 'symbol', 'top row']},
        {id: 36, labels: ['è', '7', '`'], types: ['digit', 'symbol', 'top row']},
        {id: 37, labels: ['_', '8', '\\'], types: ['digit', 'symbol', 'top row']},
        {id: 38, labels: ['ç', '9', '^'], types: ['digit', 'symbol', 'top row']},
        {id: 39, labels: ['à', '0', '@'], types: ['digit', 'symbol', 'top row']},
        {id: 45, labels: [')', '°', ']'], types: ['symbol', 'top row']},
        {id: 46, labels: ['=', '+', '}'], types: ['symbol', 'top row']},
        {id: 47, labels: ['^', '¨'], types: ['symbol']},
        {id: 48, labels: ['$', '£', '¤'], types: ['symbol']},
        {id: 49, labels: ['*', 'µ'], types: ['symbol']},
        {id: 51, labels: ['M'], types: ['letter']},
        {id: 52, labels: ['ù', '%'], types: ['symbol']},
        {id: 53, labels: ['²'], types: ['symbol', 'top row']},
        {id: 54, labels: [';', '.'], types: ['symbol']},
        {id: 55, labels: [':', '/'], types: ['symbol']},
        {id: 56, labels: ['!', '§'], types: ['symbol']},
        {id: 100, labels: ['<', '>'], types: ['symbol']}
    ],
    overrides: [
        {from: 65, to: 20, reason: 'A bound Q'},
        {from: 81, to: 4, reason: 'Q bound A'},
        {from: 87, to: 29, reason: 'W bound Z'},
        {from: 90, to: 26, reason: 'Z bound W'},
        {from: 77, to: 51, reason: 'M bound'},

        {from: 219, to: 45, reason: 'Close parenthese bound'},

        {from: 188, to: 16, reason: 'Comma bound'},
        {from: 190, to: 54, reason: 'Semi-colon bound'},
        {from: 191, to: 55, reason: 'Colon bound'},
        {from: 223, to: 56, reason: 'Exclamation mark bound'},

        {from: 221, to: 47, reason: 'Circumflex bound'},
        {from: 186, to: 48, reason: 'Dollar bound'},
        {from: 220, to: 49, reason: 'Asterisk bound'},

        {from: 192, to: 52, reason: 'U grave bound'},

        {from: 226, to: 100, reason: 'ISO < > symbols defined'},
        {from: 222, to: 53, reason: 'Squared symbol defined'}
    ],
    groups: undefined
};
