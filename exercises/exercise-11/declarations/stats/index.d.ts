declare module 'stats' {
    export function getMaxIndex(input: array, comparator: function): number;
    export function getMaxElement<T>(input: T, comparator: function): null | T[number];
    export function getMinIndex(input: array, comparator: function): number;
    export function getMinElement<T>(input: T, comparator: function): null | T[number];
    export function getMedianIndex(input: array, comparator: function): number;
    export function getMedianElement<T>(input: T, comparator: function): null | T[number];
    export function getAverageValue(input: array, getValue: function): null | number;
}
