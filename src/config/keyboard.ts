export interface KeyData {
    label: string;
    index: number;
    size: string;
    position: string;
}
export const keyMap: {[key: string]: number} = {
    '`': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 10,
    '-': 11, '=': 12, 'Backspace': 13, 'Tab': 14, 'q': 15, 'w': 16, 'e': 17, 'r': 18, 't': 19,
    'y': 20, 'u': 21, 'i': 22, 'o': 23, 'p': 24, '[': 25, ']': 26, '\\': 27, 'CapsLock': 28,
    'a': 29, 's': 30, 'd': 31, 'f': 32, 'g': 33, 'h': 34, 'j': 35, 'k': 36, 'l': 37, ';': 38,
    '\'': 39, 'Enter': 40, 'Shift': 41, 'z': 42, 'x': 43, 'c': 44, 'v': 45, 'b': 46, 'n': 47,
    'm': 48, ',': 49, '.': 50, '/': 51, 'Control': 52, 'Alt': 53, ' ': 54, 'ArrowLeft': 55,
    'ArrowUp': 56, 'ArrowDown': 57, 'ArrowRight': 58,
};
export const keyboardLayout: KeyData[][] = [
    [
        {label: '`', index: 0, size: 'default', position: 'center'},
        {label: '1', index: 1, size: 'default', position: 'center'},
        {label: '2', index: 2, size: 'default', position: 'center'},
        {label: '3', index: 3, size: 'default', position: 'center'},
        {label: '4', index: 4, size: 'default', position: 'center'},
        {label: '5', index: 5, size: 'default', position: 'center'},
        {label: '6', index: 6, size: 'default', position: 'center'},
        {label: '7', index: 7, size: 'default', position: 'center'},
        {label: '8', index: 8, size: 'default', position: 'center'},
        {label: '9', index: 9, size: 'default', position: 'center'},
        {label: '0', index: 10, size: 'default', position: 'center'},
        {label: '-', index: 11, size: 'default', position: 'center'},
        {label: '=', index: 12, size: 'default', position: 'center'},
        {label: 'Backspace', index: 13, size: 'max', position: 'center'}
    ],
    [
        {label: 'Tab', index: 14, size: 'max', position: 'left'},
        {label: 'q', index: 15, size: 'default', position: 'center'},
        {label: 'w', index: 16, size: 'default', position: 'center'},
        {label: 'e', index: 17, size: 'default', position: 'center'},
        {label: 'r', index: 18, size: 'default', position: 'center'},
        {label: 't', index: 19, size: 'default', position: 'center'},
        {label: 'y', index: 20, size: 'default', position: 'center'},
        {label: 'u', index: 21, size: 'default', position: 'center'},
        {label: 'i', index: 22, size: 'default', position: 'center'},
        {label: 'o', index: 23, size: 'default', position: 'center'},
        {label: 'p', index: 24, size: 'default', position: 'center'},
        {label: '[', index: 25, size: 'default', position: 'center'},
        {label: ']', index: 26, size: 'default', position: 'center'},
        {label: '\\', index: 27, size: 'max', position: 'center'}
    ],
    [
        {label: 'CapsLk', index: 28, size: 'big', position: 'left'},
        {label: 'a', index: 29, size: 'default', position: 'center'},
        {label: 's', index: 30, size: 'default', position: 'center'},
        {label: 'd', index: 31, size: 'default', position: 'center'},
        {label: 'f', index: 32, size: 'default', position: 'center'},
        {label: 'g', index: 33, size: 'default', position: 'center'},
        {label: 'h', index: 34, size: 'default', position: 'center'},
        {label: 'j', index: 35, size: 'default', position: 'center'},
        {label: 'k', index: 36, size: 'default', position: 'center'},
        {label: 'l', index: 37, size: 'default', position: 'center'},
        {label: ';', index: 38, size: 'default', position: 'center'},
        {label: '\'', index: 39, size: 'default', position: 'center'},
        {label: 'Enter', index: 40, size: 'max', position: 'right'}
    ],
    [
        {label: 'Shift', index: 41, size: 'max', position: 'left'},
        {label: 'z', index: 42, size: 'default', position: 'center'},
        {label: 'x', index: 43, size: 'default', position: 'center'},
        {label: 'c', index: 44, size: 'default', position: 'center'},
        {label: 'v', index: 45, size: 'default', position: 'center'},
        {label: 'b', index: 46, size: 'default', position: 'center'},
        {label: 'n', index: 47, size: 'default', position: 'center'},
        {label: 'm', index: 48, size: 'default', position: 'center'},
        {label: ',', index: 49, size: 'default', position: 'center'},
        {label: '.', index: 50, size: 'default', position: 'center'},
        {label: '/', index: 51, size: 'default', position: 'center'},
        {label: 'Shift', index: 41, size: 'max', position: 'right'}
    ],
    [
        {label: 'Ctrl', index: 52, size: 'default', position: 'center'},
        {label: 'Alt', index: 53, size: 'default', position: 'center'},
        {label: ' ', index: 54, size: 'max', position: 'center'},
        {label: 'Alt', index: 53, size: 'default', position: 'center'},
        {label: 'Ctrl', index: 52, size: 'default', position: 'center'},
        {label: '◀', index: 55, size: 'default', position: 'center'},
        {label: '▲', index: 56, size: 'half', position: 'center'},
        {label: '▼', index: 57, size: 'half', position: 'center'},
        {label: '▶', index: 58, size: 'default', position: 'center'}
    ]
];