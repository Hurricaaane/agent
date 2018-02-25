import { SymcodeLocale } from './scancodes.common';

export const scancodes: SymcodeLocale = {
    name: 'Français (France)',
    items: [
        {id: 4, labels: ['Q'], types: ['letter']},
        {id: 16, labels: [',', '?'], types: ['symbol']},
        {id: 20, labels: ['A'], types: ['letter']},
        {id: 26, labels: ['Z'], types: ['letter']},
        {id: 29, labels: ['W'], types: ['letter']},
        {id: 30, labels: ['&', '1'], types: ['symbol', 'top row']},
        {id: 31, labels: ['é', '2', '~'], types: ['symbol', 'top row']},
        {id: 32, labels: ['"', '3', '#'], types: ['symbol', 'top row']},
        {id: 33, labels: ['\'', '4', '{'], types: ['symbol', 'top row']},
        {id: 34, labels: ['(', '5', '['], types: ['symbol', 'top row']},
        {id: 35, labels: ['-', '6', '|'], types: ['symbol', 'top row']},
        {id: 36, labels: ['è', '7', '`'], types: ['symbol', 'top row']},
        {id: 37, labels: ['_', '8', '\\'], types: ['symbol', 'top row']},
        {id: 38, labels: ['ç', '9', '^'], types: ['symbol', 'top row']},
        {id: 39, labels: ['à', '0', '@'], types: ['symbol', 'top row']},
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
    ]
};
