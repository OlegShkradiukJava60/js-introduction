export const mergeObj = (a, b, p) =>
    Object.fromEntries(
        [...Object.keys(a), ...Object.keys(b)]
            .filter((v, i, arr) => arr.indexOf(v) === i)
            .map((k) => [k, k in a && k in b ? (p ? a[k] : b[k]) : a[k] ?? b[k]])
    );