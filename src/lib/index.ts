// place files you want to import through the `$lib` alias in this folder.

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))