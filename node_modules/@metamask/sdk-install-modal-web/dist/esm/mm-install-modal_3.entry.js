import { h, r as registerInstance, c as createEvent, g as getElement } from './index-4b8a94c9.js';

const widgetWrapperStyle = {
    fontFamily: 'Roboto, sans-serif',
};
const WidgetWrapper = ({ className, }, children) => {
    return (h("div", { style: widgetWrapperStyle, class: className }, children));
};

const AdvantagesListItem = ({ Icon, text }) => (h("div", { class: 'flexContainer', style: { padding: '6', flexDirection: 'row' } },
    h("div", { class: 'flexItem1' },
        h(Icon, null)),
    h("div", { class: 'flexItem11' },
        h("span", { style: { lineHeight: '2', color: 'black' } }, text))));

const LockIcon = () => (h("svg", { width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    h("path", { d: "M20.0002 7.9702V10.0302C20.0002 10.5802 19.5602 11.0302 19.0002 11.0502H17.0402C15.9602 11.0502 14.9702 10.2602 14.8802 9.1802C14.8202 8.5502 15.0602 7.9602 15.4802 7.5502C15.8502 7.1702 16.3602 6.9502 16.9202 6.9502H19.0002C19.5602 6.9702 20.0002 7.4202 20.0002 7.9702Z", fill: "#037DD6" }),
    h("path", { d: "M18.47 12.55H17.04C15.14 12.55 13.54 11.12 13.38 9.3C13.29 8.26 13.67 7.22 14.43 6.48C15.07 5.82 15.96 5.45 16.92 5.45H18.47C18.76 5.45 19 5.21 18.97 4.92C18.75 2.49 17.14 0.83 14.75 0.55C14.51 0.51 14.26 0.5 14 0.5H5C4.72 0.5 4.45 0.52 4.19 0.56C1.64 0.88 0 2.78 0 5.5V12.5C0 15.26 2.24 17.5 5 17.5H14C16.8 17.5 18.73 15.75 18.97 13.08C19 12.79 18.76 12.55 18.47 12.55ZM11 6.75H5C4.59 6.75 4.25 6.41 4.25 6C4.25 5.59 4.59 5.25 5 5.25H11C11.41 5.25 11.75 5.59 11.75 6C11.75 6.41 11.41 6.75 11 6.75Z", fill: "#037DD6" })));

const HeartIcon = () => (h("svg", { width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    h("path", { d: "M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z", fill: "#037DD6" })));

const WalletIcon = () => (h("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    h("path", { d: "M16.28 7.53V6.28C16.28 3.58 15.63 0 10 0C4.37 0 3.72 3.58 3.72 6.28V7.53C0.92 7.88 0 9.3 0 12.79V14.65C0 18.75 1.25 20 5.35 20H14.65C18.75 20 20 18.75 20 14.65V12.79C20 9.3 19.08 7.88 16.28 7.53ZM10 16.74C8.33 16.74 6.98 15.38 6.98 13.72C6.98 12.05 8.34 10.7 10 10.7C11.66 10.7 13.02 12.06 13.02 13.72C13.02 15.39 11.67 16.74 10 16.74ZM5.35 7.44C5.27 7.44 5.2 7.44 5.12 7.44V6.28C5.12 3.35 5.95 1.4 10 1.4C14.05 1.4 14.88 3.35 14.88 6.28V7.45C14.8 7.45 14.73 7.45 14.65 7.45H5.35V7.44Z", fill: "#037DD6" })));

const InstallIcon = () => (h("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    h("path", { d: "M16.4405 8.8999C20.0405 9.2099 21.5105 11.0599 21.5105 15.1099V15.2399C21.5105 19.7099 19.7205 21.4999 15.2505 21.4999H8.74047C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.2399 7.47047 8.9099", stroke: "white", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    h("path", { d: "M12 2V14.88", stroke: "white", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    h("path", { d: "M15.3504 12.6499L12.0004 15.9999L8.65039 12.6499", stroke: "white", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })));

function SDKVersion({ version }) {
    return (h("div", { style: { textAlign: 'center', color: '#BBC0C5', fontSize: '12' } },
        "SDK Version ",
        version ? `v${version}` : `unknown`));
}

const CloseButton = () => (h("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    h("rect", { width: "16", height: "16", fill: "white" }),
    h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.40554 2.40554C2.94627 1.86482 3.82296 1.86482 4.36369 2.40554L8 6.04186L11.6363 2.40554C12.177 1.86482 13.0537 1.86482 13.5945 2.40554C14.1352 2.94627 14.1352 3.82296 13.5945 4.36369L9.95814 8L13.5945 11.6363C14.1352 12.177 14.1352 13.0537 13.5945 13.5945C13.0537 14.1352 12.177 14.1352 11.6363 13.5945L8 9.95814L4.36369 13.5945C3.82296 14.1352 2.94627 14.1352 2.40554 13.5945C1.86482 13.0537 1.86482 12.177 2.40554 11.6363L6.04186 8L2.40554 4.36369C1.86482 3.82296 1.86482 2.94627 2.40554 2.40554Z", fill: "#BBC0C5" })));

const Logo = () => (h("svg", { width: "120", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 127 63" },
    h("path", { fill: "currentColor", d: "M71.554 48.607v13.81h-7.072v-9.568l-8.059.945c-1.77.205-2.548.79-2.548 1.864 0 1.575 1.478 2.239 4.648 2.239 1.932 0 4.073-.29 5.963-.79l-3.66 5.225c-1.479.332-2.92.496-4.44.496-6.414 0-10.074-2.57-10.074-7.132 0-4.023 2.877-6.136 9.416-6.884l8.638-1.012c-.467-2.532-2.362-3.633-6.13-3.633-3.537 0-7.443.912-10.937 2.613l1.111-6.18c3.248-1.369 6.95-2.074 10.69-2.074 8.226 0 12.461 3.444 12.461 10.075l-.008.005ZM7.938 31.315.208 62.416h7.73l3.836-15.628 6.65 8.039h8.06l6.65-8.039 3.836 15.628h7.73l-7.73-31.105-14.518 17.388L7.934 31.311l.004.004ZM36.97.21 22.452 17.598 7.938.21.208 31.315h7.73l3.836-15.628 6.65 8.039h8.06l6.65-8.039 3.836 15.628h7.73L36.97.21Zm53.17 48.107-6.25-.912c-1.562-.247-2.178-.747-2.178-1.617 0-1.41 1.52-2.032 4.647-2.032 3.62 0 6.868.747 10.283 2.364l-.862-6.094c-2.757-.995-5.922-1.491-9.212-1.491-7.688 0-11.886 2.696-11.886 7.547 0 3.776 2.303 5.889 7.196 6.636l6.335.954c1.603.248 2.261.87 2.261 1.865 0 1.41-1.478 2.074-4.481 2.074-3.948 0-8.225-.953-11.72-2.654l.7 6.094c3.003 1.122 6.91 1.785 10.57 1.785 7.896 0 12.007-2.78 12.007-7.715 0-3.94-2.303-6.057-7.4-6.8l-.01-.004ZM100.3 34.09v28.325h7.071V34.091H100.3Zm15.334 15.595 9.833-10.744h-8.8l-9.296 11.114 9.912 12.356h8.925l-10.574-12.73v.004Zm-16.321-25.09c0 4.56 3.66 7.13 10.074 7.13 1.52 0 2.961-.167 4.44-.495l3.66-5.225c-1.89.496-4.031.79-5.963.79-3.166 0-4.648-.664-4.648-2.239 0-1.079.783-1.659 2.549-1.864l8.058-.945v9.567h7.072v-13.81c0-6.635-4.236-10.075-12.461-10.075-3.744 0-7.442.705-10.691 2.075l-1.112 6.178c3.495-1.701 7.401-2.613 10.937-2.613 3.769 0 5.664 1.1 6.13 3.633l-8.637 1.013c-6.539.747-9.417 2.86-9.417 6.883l.009-.004Zm-19.779-1.492c0 5.725 3.29 8.627 9.787 8.627 2.59 0 4.732-.416 6.785-1.37l.903-6.261c-1.974 1.2-3.99 1.822-6.005 1.822-3.044 0-4.402-1.243-4.402-4.023v-8.295h10.732V7.84H86.601V2.948l-13.448 7.174v3.482h6.372V23.1l.008.004Zm-6.95-2.612v1.411H53.47c.862 2.873 3.423 4.187 7.97 4.187 3.62 0 6.993-.747 9.992-2.196l-.862 6.056c-2.757 1.16-6.251 1.785-9.829 1.785-9.5 0-14.68-4.23-14.68-12.066 0-7.838 5.264-12.235 13.406-12.235s13.119 4.771 13.119 13.062l-.005-.004ZM53.378 17.09h12.086c-.637-2.751-2.732-4.188-6.08-4.188-3.349 0-5.335 1.399-6.006 4.188Z" })));

/*!
Copyright (c) 2023 Paul Miller (paulmillr.com)
The library @paulmillr/qr is dual-licensed under the Apache 2.0 OR MIT license.
You can select a license of your choice.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
function assertNumber(n) {
    if (!Number.isSafeInteger(n))
        throw new Error(`Wrong integer: ${n}`);
}
function validateVersion(ver) {
    if (!Number.isSafeInteger(ver) || ver < 1 || ver > 40)
        throw new Error(`Invalid version=${ver}. Expected number [1..40]`);
}
function bin(dec, pad) {
    return dec.toString(2).padStart(pad, '0');
}
function mod(a, b) {
    const result = a % b;
    return result >= 0 ? result : b + result;
}
function fillArr(length, val) {
    return new Array(length).fill(val);
}
/**
 * Interleaves byte blocks.
 * @param blocks [[1, 2, 3], [4, 5, 6]]
 * @returns [1, 4, 2, 5, 3, 6]
 */
function interleaveBytes(...blocks) {
    let len = 0;
    for (const b of blocks)
        len = Math.max(len, b.length);
    const res = [];
    for (let i = 0; i < len; i++) {
        for (const b of blocks) {
            if (i >= b.length)
                continue; // outside of block, skip
            res.push(b[i]);
        }
    }
    return new Uint8Array(res);
}
function includesAt(lst, pattern, index) {
    if (index < 0 || index + pattern.length > lst.length)
        return false;
    for (let i = 0; i < pattern.length; i++)
        if (pattern[i] !== lst[index + i])
            return false;
    return true;
}
// Optimize for minimal score/penalty
function best() {
    let best;
    let bestScore = Infinity;
    return {
        add(score, value) {
            if (score >= bestScore)
                return;
            best = value;
            bestScore = score;
        },
        get: () => best,
        score: () => bestScore,
    };
}
// Based on https://github.com/paulmillr/scure-base/blob/main/index.ts
function alphabet(alphabet) {
    return {
        has: (char) => alphabet.includes(char),
        decode: (input) => {
            if (!Array.isArray(input) || (input.length && typeof input[0] !== 'string'))
                throw new Error('alphabet.decode input should be array of strings');
            return input.map((letter) => {
                if (typeof letter !== 'string')
                    throw new Error(`alphabet.decode: not string element=${letter}`);
                const index = alphabet.indexOf(letter);
                if (index === -1)
                    throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet}`);
                return index;
            });
        },
        encode: (digits) => {
            if (!Array.isArray(digits) || (digits.length && typeof digits[0] !== 'number'))
                throw new Error('alphabet.encode input should be an array of numbers');
            return digits.map((i) => {
                assertNumber(i);
                if (i < 0 || i >= alphabet.length)
                    throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet.length})`);
                return alphabet[i];
            });
        },
    };
}
class Bitmap {
    static size(size, limit) {
        if (typeof size === 'number')
            size = { height: size, width: size };
        if (!Number.isSafeInteger(size.height) && size.height !== Infinity)
            throw new Error(`Bitmap: wrong height=${size.height} (${typeof size.height})`);
        if (!Number.isSafeInteger(size.width) && size.width !== Infinity)
            throw new Error(`Bitmap: wrong width=${size.width} (${typeof size.width})`);
        if (limit !== undefined) {
            // Clamp length, so it won't overflow, also allows to use Infinity, so we draw until end
            size = {
                width: Math.min(size.width, limit.width),
                height: Math.min(size.height, limit.height),
            };
        }
        return size;
    }
    static fromString(s) {
        // Remove linebreaks on start and end, so we draw in `` section
        s = s.replace(/^\n+/g, '').replace(/\n+$/g, '');
        const lines = s.split('\n');
        const height = lines.length;
        const data = new Array(height);
        let width;
        for (const line of lines) {
            const row = line.split('').map((i) => {
                if (i === 'X')
                    return true;
                if (i === ' ')
                    return false;
                if (i === '?')
                    return undefined;
                throw new Error(`Bitmap.fromString: unknown symbol=${i}`);
            });
            if (width && row.length !== width)
                throw new Error(`Bitmap.fromString different row sizes: width=${width} cur=${row.length}`);
            width = row.length;
            data.push(row);
        }
        if (!width)
            width = 0;
        return new Bitmap({ height, width }, data);
    }
    constructor(size, data) {
        const { height, width } = Bitmap.size(size);
        this.data = data || Array.from({ length: height }, () => fillArr(width, undefined));
        this.height = height;
        this.width = width;
    }
    point(p) {
        return this.data[p.y][p.x];
    }
    isInside(p) {
        return 0 <= p.x && p.x < this.width && 0 <= p.y && p.y < this.height;
    }
    size(offset) {
        if (!offset)
            return { height: this.height, width: this.width };
        const { x, y } = this.xy(offset);
        return { height: this.height - y, width: this.width - x };
    }
    xy(c) {
        if (typeof c === 'number')
            c = { x: c, y: c };
        if (!Number.isSafeInteger(c.x))
            throw new Error(`Bitmap: wrong x=${c.x}`);
        if (!Number.isSafeInteger(c.y))
            throw new Error(`Bitmap: wrong y=${c.y}`);
        // Do modulo, so we can use negative positions
        c.x = mod(c.x, this.width);
        c.y = mod(c.y, this.height);
        return c;
    }
    // Basically every operation can be represented as rect
    rect(c, size, value) {
        const { x, y } = this.xy(c);
        const { height, width } = Bitmap.size(size, this.size({ x, y }));
        for (let yPos = 0; yPos < height; yPos++) {
            for (let xPos = 0; xPos < width; xPos++) {
                // NOTE: we use give function relative coordinates inside box
                this.data[y + yPos][x + xPos] =
                    typeof value === 'function'
                        ? value({ x: xPos, y: yPos }, this.data[y + yPos][x + xPos])
                        : value;
            }
        }
        return this;
    }
    // returns rectangular part of bitmap
    rectRead(c, size, fn) {
        return this.rect(c, size, (c, cur) => {
            fn(c, cur);
            return cur;
        });
    }
    // Horizontal & vertical lines
    hLine(c, len, value) {
        return this.rect(c, { width: len, height: 1 }, value);
    }
    vLine(c, len, value) {
        return this.rect(c, { width: 1, height: len }, value);
    }
    // add border
    border(border = 2, value) {
        const height = this.height + 2 * border;
        const width = this.width + 2 * border;
        const v = fillArr(border, value);
        const h = Array.from({ length: border }, () => fillArr(width, value));
        return new Bitmap({ height, width }, [...h, ...this.data.map((i) => [...v, ...i, ...v]), ...h]);
    }
    // Embed another bitmap on coordinates
    embed(c, bm) {
        return this.rect(c, bm.size(), ({ x, y }) => bm.data[y][x]);
    }
    // returns rectangular part of bitmap
    rectSlice(c, size = this.size()) {
        const rect = new Bitmap(Bitmap.size(size, this.size(this.xy(c))));
        this.rect(c, size, ({ x, y }, cur) => (rect.data[y][x] = cur));
        return rect;
    }
    // Change shape, replace rows with columns (data[y][x] -> data[x][y])
    inverse() {
        const { height, width } = this;
        const res = new Bitmap({ height: width, width: height });
        return res.rect({ x: 0, y: 0 }, Infinity, ({ x, y }) => this.data[x][y]);
    }
    // Each pixel size is multiplied by factor
    scale(factor) {
        if (!Number.isSafeInteger(factor) || factor > 1024)
            throw new Error(`Wrong scale factor: ${factor}`);
        const { height, width } = this;
        const res = new Bitmap({ height: factor * height, width: factor * width });
        return res.rect({ x: 0, y: 0 }, Infinity, ({ x, y }) => this.data[Math.floor(y / factor)][Math.floor(x / factor)]);
    }
    clone() {
        const res = new Bitmap(this.size());
        return res.rect({ x: 0, y: 0 }, this.size(), ({ x, y }) => this.data[y][x]);
    }
    // Ensure that there is no undefined values left
    assertDrawn() {
        this.rectRead(0, Infinity, (_, cur) => {
            if (typeof cur !== 'boolean')
                throw new Error(`Invalid color type=${typeof cur}`);
        });
    }
    // Simple string representation for debugging
    toString() {
        return this.data
            .map((i) => i.map((j) => (j === undefined ? '?' : j ? 'X' : ' ')).join(''))
            .join('\n');
    }
    toASCII() {
        const { height, width, data } = this;
        let out = '';
        // Terminal character height is x2 of character width, so we process two rows of bitmap
        // to produce one row of ASCII
        for (let y = 0; y < height; y += 2) {
            for (let x = 0; x < width; x++) {
                const first = data[y][x];
                const second = y + 1 >= height ? true : data[y + 1][x]; // if last row outside bitmap, make it black
                if (!first && !second)
                    out += '█'; // both rows white (empty)
                else if (!first && second)
                    out += '▀'; // top row white
                else if (first && !second)
                    out += '▄'; // down row white
                else if (first && second)
                    out += ' '; // both rows black
            }
            out += '\n';
        }
        return out;
    }
    toTerm() {
        const reset = '\x1b[0m';
        const whiteBG = `\x1b[1;47m  ${reset}`;
        const darkBG = `\x1b[40m  ${reset}`;
        return this.data.map((i) => i.map((j) => (j ? darkBG : whiteBG)).join('')).join('\n');
    }
    toSVG() {
        let out = `<svg xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 ${this.width} ${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">`;
        this.rectRead(0, Infinity, ({ x, y }, val) => {
            if (val)
                out += `<rect x="${x}" y="${y}" width="1" height="1" />`;
        });
        out += '</svg>';
        return out;
    }
    toGIF() {
        // NOTE: Small, but inefficient implementation.
        // Uses 1 byte per pixel, but still less bloated than SVG.
        const u16le = (i) => [i & 0xff, (i >>> 8) & 0xff];
        const dims = [...u16le(this.width), ...u16le(this.height)];
        const data = [];
        this.rectRead(0, Infinity, (_, cur) => data.push(+(cur === true)));
        const N = 126; // Block size
        // prettier-ignore
        const bytes = [
            0x47, 0x49, 0x46, 0x38, 0x37, 0x61, ...dims, 0xf6, 0x00, 0x00, 0xff, 0xff, 0xff,
            ...fillArr(3 * 127, 0x00), 0x2c, 0x00, 0x00, 0x00, 0x00, ...dims, 0x00, 0x07
        ];
        const fullChunks = Math.floor(data.length / N);
        // Full blocks
        for (let i = 0; i < fullChunks; i++)
            bytes.push(N + 1, 0x80, ...data.slice(N * i, N * (i + 1)).map((i) => +i));
        // Remaining bytes
        bytes.push((data.length % N) + 1, 0x80, ...data.slice(fullChunks * N).map((i) => +i));
        bytes.push(0x01, 0x81, 0x00, 0x3b);
        return new Uint8Array(bytes);
    }
    toImage(isRGB = false) {
        const { height, width } = this.size();
        const data = new Uint8Array(height * width * (isRGB ? 3 : 4));
        let i = 0;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const value = !!this.data[y][x] ? 0 : 255;
                data[i++] = value;
                data[i++] = value;
                data[i++] = value;
                if (!isRGB)
                    data[i++] = 255; // alpha channel
            }
        }
        return { height, width, data };
    }
}
// End of utils
// Runtime type-checking
// Low: 7%, medium: 15%, quartile: 25%, high: 30%
const ECMode = ['low', 'medium', 'quartile', 'high'];
const Encoding = ['numeric', 'alphanumeric', 'byte', 'kanji', 'eci'];
// Various constants & tables
// prettier-ignore
const BYTES = [
    // 1,  2,  3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,   20,
    26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
    //  21,   22,   23,   24,   25,   26,   27,   28,   29,   30,   31,   32,   33,   34,   35,   36,   37,   38,   39,   40
    1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
];
// prettier-ignore
const WORDS_PER_BLOCK = {
    // Version 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    low: [7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    medium: [10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    quartile: [13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    high: [17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
};
// prettier-ignore
const ECC_BLOCKS = {
    // Version   1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    low: [1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    medium: [1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    quartile: [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    high: [1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81],
};
const info = {
    size: {
        encode: (ver) => 21 + 4 * (ver - 1), // ver1 = 21, ver40=177 blocks
        decode: (size) => (size - 17) / 4,
    },
    sizeType: (ver) => Math.floor((ver + 7) / 17),
    // Based on https://codereview.stackexchange.com/questions/74925/algorithm-to-generate-this-alignment-pattern-locations-table-for-qr-codes
    alignmentPatterns(ver) {
        if (ver === 1)
            return [];
        const first = 6;
        const last = info.size.encode(ver) - first - 1;
        const distance = last - first;
        const count = Math.ceil(distance / 28);
        let interval = Math.floor(distance / count);
        if (interval % 2)
            interval += 1;
        else if ((distance % count) * 2 >= count)
            interval += 2;
        const res = [first];
        for (let m = 1; m < count; m++)
            res.push(last - (count - m) * interval);
        res.push(last);
        return res;
    },
    ECCode: {
        low: 0b01,
        medium: 0b00,
        quartile: 0b11,
        high: 0b10,
    },
    formatMask: 0b101010000010010,
    formatBits(ecc, maskIdx) {
        const data = (info.ECCode[ecc] << 3) | maskIdx;
        let d = data;
        for (let i = 0; i < 10; i++)
            d = (d << 1) ^ ((d >> 9) * 0b10100110111);
        return ((data << 10) | d) ^ info.formatMask;
    },
    versionBits(ver) {
        let d = ver;
        for (let i = 0; i < 12; i++)
            d = (d << 1) ^ ((d >> 11) * 0b1111100100101);
        return (ver << 12) | d;
    },
    alphabet: {
        numeric: alphabet('0123456789'),
        alphanumerc: alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'),
    }, // as Record<EncodingType, ReturnType<typeof alphabet>>,
    lengthBits(ver, type) {
        const table = {
            numeric: [10, 12, 14],
            alphanumeric: [9, 11, 13],
            byte: [8, 16, 16],
            kanji: [8, 10, 12],
            eci: [0, 0, 0],
        };
        return table[type][info.sizeType(ver)];
    },
    modeBits: {
        numeric: '0001',
        alphanumeric: '0010',
        byte: '0100',
        kanji: '1000',
        eci: '0111',
    },
    capacity(ver, ecc) {
        const bytes = BYTES[ver - 1];
        const words = WORDS_PER_BLOCK[ecc][ver - 1];
        const numBlocks = ECC_BLOCKS[ecc][ver - 1];
        const blockLen = Math.floor(bytes / numBlocks) - words;
        const shortBlocks = numBlocks - (bytes % numBlocks);
        return {
            words,
            numBlocks,
            shortBlocks,
            blockLen,
            capacity: (bytes - words * numBlocks) * 8,
            total: (words + blockLen) * numBlocks + numBlocks - shortBlocks,
        };
    },
};
const PATTERNS = [
    (x, y) => (x + y) % 2 == 0,
    (_x, y) => y % 2 == 0,
    (x, _y) => x % 3 == 0,
    (x, y) => (x + y) % 3 == 0,
    (x, y) => (Math.floor(y / 2) + Math.floor(x / 3)) % 2 == 0,
    (x, y) => ((x * y) % 2) + ((x * y) % 3) == 0,
    (x, y) => (((x * y) % 2) + ((x * y) % 3)) % 2 == 0,
    (x, y) => (((x + y) % 2) + ((x * y) % 3)) % 2 == 0,
];
// Galois field && reed-solomon encoding
const GF = {
    tables: ((p_poly) => {
        const exp = fillArr(256, 0);
        const log = fillArr(256, 0);
        for (let i = 0, x = 1; i < 256; i++) {
            exp[i] = x;
            log[x] = i;
            x <<= 1;
            if (x & 0x100)
                x ^= p_poly;
        }
        return { exp, log };
    })(0x11d),
    exp: (x) => GF.tables.exp[x],
    log(x) {
        if (x === 0)
            throw new Error(`GF.log: wrong arg=${x}`);
        return GF.tables.log[x] % 255;
    },
    mul(x, y) {
        if (x === 0 || y === 0)
            return 0;
        return GF.tables.exp[(GF.tables.log[x] + GF.tables.log[y]) % 255];
    },
    add: (x, y) => x ^ y,
    pow: (x, e) => GF.tables.exp[(GF.tables.log[x] * e) % 255],
    inv(x) {
        if (x === 0)
            throw new Error(`GF.inverse: wrong arg=${x}`);
        return GF.tables.exp[255 - GF.tables.log[x]];
    },
    polynomial(poly) {
        if (poly.length == 0)
            throw new Error('GF.polymomial: wrong length');
        if (poly[0] !== 0)
            return poly;
        // Strip leading zeros
        let i = 0;
        for (; i < poly.length - 1 && poly[i] == 0; i++)
            ;
        return poly.slice(i);
    },
    monomial(degree, coefficient) {
        if (degree < 0)
            throw new Error(`GF.monomial: wrong degree=${degree}`);
        if (coefficient == 0)
            return [0];
        let coefficients = fillArr(degree + 1, 0);
        coefficients[0] = coefficient;
        return GF.polynomial(coefficients);
    },
    degree: (a) => a.length - 1,
    coefficient: (a, degree) => a[GF.degree(a) - degree],
    mulPoly(a, b) {
        if (a[0] === 0 || b[0] === 0)
            return [0];
        const res = fillArr(a.length + b.length - 1, 0);
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                res[i + j] = GF.add(res[i + j], GF.mul(a[i], b[j]));
            }
        }
        return GF.polynomial(res);
    },
    mulPolyScalar(a, scalar) {
        if (scalar == 0)
            return [0];
        if (scalar == 1)
            return a;
        const res = fillArr(a.length, 0);
        for (let i = 0; i < a.length; i++)
            res[i] = GF.mul(a[i], scalar);
        return GF.polynomial(res);
    },
    mulPolyMonomial(a, degree, coefficient) {
        if (degree < 0)
            throw new Error('GF.mulPolyMonomial: wrong degree');
        if (coefficient == 0)
            return [0];
        const res = fillArr(a.length + degree, 0);
        for (let i = 0; i < a.length; i++)
            res[i] = GF.mul(a[i], coefficient);
        return GF.polynomial(res);
    },
    addPoly(a, b) {
        if (a[0] === 0)
            return b;
        if (b[0] === 0)
            return a;
        let smaller = a;
        let larger = b;
        if (smaller.length > larger.length)
            [smaller, larger] = [larger, smaller];
        let sumDiff = fillArr(larger.length, 0);
        let lengthDiff = larger.length - smaller.length;
        let s = larger.slice(0, lengthDiff);
        for (let i = 0; i < s.length; i++)
            sumDiff[i] = s[i];
        for (let i = lengthDiff; i < larger.length; i++)
            sumDiff[i] = GF.add(smaller[i - lengthDiff], larger[i]);
        return GF.polynomial(sumDiff);
    },
    remainderPoly(data, divisor) {
        const out = Array.from(data);
        for (let i = 0; i < data.length - divisor.length + 1; i++) {
            const elm = out[i];
            if (elm === 0)
                continue;
            for (let j = 1; j < divisor.length; j++) {
                if (divisor[j] !== 0)
                    out[i + j] = GF.add(out[i + j], GF.mul(divisor[j], elm));
            }
        }
        return out.slice(data.length - divisor.length + 1, out.length);
    },
    divisorPoly(degree) {
        let g = [1];
        for (let i = 0; i < degree; i++)
            g = GF.mulPoly(g, [1, GF.pow(2, i)]);
        return g;
    },
    evalPoly(poly, a) {
        if (a == 0)
            return GF.coefficient(poly, 0); // Just return the x^0 coefficient
        let res = poly[0];
        for (let i = 1; i < poly.length; i++)
            res = GF.add(GF.mul(a, res), poly[i]);
        return res;
    },
    // TODO: cleanup
    euclidian(a, b, R) {
        // Force degree(a) >= degree(b)
        if (GF.degree(a) < GF.degree(b))
            [a, b] = [b, a];
        let rLast = a;
        let r = b;
        let tLast = [0];
        let t = [1];
        // while degree of Ri ≥ t/2
        while (2 * GF.degree(r) >= R) {
            let rLastLast = rLast;
            let tLastLast = tLast;
            rLast = r;
            tLast = t;
            if (rLast[0] === 0)
                throw new Error('rLast[0] === 0');
            r = rLastLast;
            let q = [0];
            const dltInverse = GF.inv(rLast[0]);
            while (GF.degree(r) >= GF.degree(rLast) && r[0] !== 0) {
                const degreeDiff = GF.degree(r) - GF.degree(rLast);
                const scale = GF.mul(r[0], dltInverse);
                q = GF.addPoly(q, GF.monomial(degreeDiff, scale));
                r = GF.addPoly(r, GF.mulPolyMonomial(rLast, degreeDiff, scale));
            }
            q = GF.mulPoly(q, tLast);
            t = GF.addPoly(q, tLastLast);
            if (GF.degree(r) >= GF.degree(rLast))
                throw new Error(`Division failed r: ${r}, rLast: ${rLast}`);
        }
        const sigmaTildeAtZero = GF.coefficient(t, 0);
        if (sigmaTildeAtZero == 0)
            throw new Error('sigmaTilde(0) was zero');
        const inverse = GF.inv(sigmaTildeAtZero);
        return [GF.mulPolyScalar(t, inverse), GF.mulPolyScalar(r, inverse)];
    },
};
function RS(eccWords) {
    return {
        encode(from) {
            const d = GF.divisorPoly(eccWords);
            const pol = Array.from(from);
            pol.push(...d.slice(0, -1).fill(0));
            return Uint8Array.from(GF.remainderPoly(pol, d));
        },
        decode(to) {
            const res = to.slice();
            const poly = GF.polynomial(Array.from(to));
            // Find errors
            let syndrome = fillArr(eccWords, 0);
            let hasError = false;
            for (let i = 0; i < eccWords; i++) {
                const evl = GF.evalPoly(poly, GF.exp(i));
                syndrome[syndrome.length - 1 - i] = evl;
                if (evl !== 0)
                    hasError = true;
            }
            if (!hasError)
                return res;
            syndrome = GF.polynomial(syndrome);
            const monomial = GF.monomial(eccWords, 1);
            const [errorLocator, errorEvaluator] = GF.euclidian(monomial, syndrome, eccWords);
            // Error locations
            const locations = fillArr(GF.degree(errorLocator), 0);
            let e = 0;
            for (let i = 1; i < 256 && e < locations.length; i++) {
                if (GF.evalPoly(errorLocator, i) === 0)
                    locations[e++] = GF.inv(i);
            }
            if (e !== locations.length)
                throw new Error('RS.decode: wrong errors number');
            for (let i = 0; i < locations.length; i++) {
                const pos = res.length - 1 - GF.log(locations[i]);
                if (pos < 0)
                    throw new Error('RS.decode: wrong error location');
                const xiInverse = GF.inv(locations[i]);
                let denominator = 1;
                for (let j = 0; j < locations.length; j++) {
                    if (i === j)
                        continue;
                    denominator = GF.mul(denominator, GF.add(1, GF.mul(locations[j], xiInverse)));
                }
                res[pos] = GF.add(res[pos], GF.mul(GF.evalPoly(errorEvaluator, xiInverse), GF.inv(denominator)));
            }
            return res;
        },
    };
}
// Interleaves blocks
function interleave(ver, ecc) {
    const { words, shortBlocks, numBlocks, blockLen, total } = info.capacity(ver, ecc);
    const rs = RS(words);
    return {
        encode(bytes) {
            // Add error correction to bytes
            const blocks = [];
            const eccBlocks = [];
            for (let i = 0; i < numBlocks; i++) {
                const isShort = i < shortBlocks;
                const len = blockLen + (isShort ? 0 : 1);
                blocks.push(bytes.subarray(0, len));
                eccBlocks.push(rs.encode(bytes.subarray(0, len)));
                bytes = bytes.subarray(len);
            }
            const resBlocks = interleaveBytes(...blocks);
            const resECC = interleaveBytes(...eccBlocks);
            const res = new Uint8Array(resBlocks.length + resECC.length);
            res.set(resBlocks);
            res.set(resECC, resBlocks.length);
            return res;
        },
        decode(data) {
            if (data.length !== total)
                throw new Error(`interleave.decode: len(data)=${data.length}, total=${total}`);
            const blocks = [];
            for (let i = 0; i < numBlocks; i++) {
                const isShort = i < shortBlocks;
                blocks.push(new Uint8Array(words + blockLen + (isShort ? 0 : 1)));
            }
            // Short blocks
            let pos = 0;
            for (let i = 0; i < blockLen; i++) {
                for (let j = 0; j < numBlocks; j++)
                    blocks[j][i] = data[pos++];
            }
            // Long blocks
            for (let j = shortBlocks; j < numBlocks; j++)
                blocks[j][blockLen] = data[pos++];
            // ECC
            for (let i = blockLen; i < blockLen + words; i++) {
                for (let j = 0; j < numBlocks; j++) {
                    const isShort = j < shortBlocks;
                    blocks[j][i + (isShort ? 0 : 1)] = data[pos++];
                }
            }
            // Decode
            // Error-correct and copy data blocks together into a stream of bytes
            const res = [];
            for (const block of blocks)
                res.push(...Array.from(rs.decode(block)).slice(0, -words));
            return Uint8Array.from(res);
        },
    };
}
// Draw
// Generic template per version+ecc+mask. Can be cached, to speedup calculations.
function drawTemplate(ver, ecc, maskIdx, test = false) {
    const size = info.size.encode(ver);
    let b = new Bitmap(size + 2);
    // Finder patterns
    // We draw full pattern and later slice, since before addition of borders finder is truncated by one pixel on sides
    const finder = new Bitmap(3).rect(0, 3, true).border(1, false).border(1, true).border(1, false);
    b = b
        .embed(0, finder) // top left
        .embed({ x: -finder.width, y: 0 }, finder) // top right
        .embed({ x: 0, y: -finder.height }, finder); // bottom left
    b = b.rectSlice(1, size);
    // Alignment patterns
    const align = new Bitmap(1).rect(0, 1, true).border(1, false).border(1, true);
    const alignPos = info.alignmentPatterns(ver);
    for (const y of alignPos) {
        for (const x of alignPos) {
            if (b.data[y][x] !== undefined)
                continue;
            b.embed({ x: x - 2, y: y - 2 }, align); // center of pattern should be at position
        }
    }
    // Timing patterns
    b = b
        .hLine({ x: 0, y: 6 }, Infinity, ({ x }, cur) => (cur === undefined ? x % 2 == 0 : cur))
        .vLine({ x: 6, y: 0 }, Infinity, ({ y }, cur) => (cur === undefined ? y % 2 == 0 : cur));
    // Format information
    {
        const bits = info.formatBits(ecc, maskIdx);
        const getBit = (i) => !test && ((bits >> i) & 1) == 1;
        // vertical
        for (let i = 0; i < 6; i++)
            b.data[i][8] = getBit(i); // right of top-left finder
        // TODO: re-write as lines, like:
        // b.vLine({ x: 8, y: 0 }, 6, ({ x, y }) => getBit(y));
        for (let i = 6; i < 8; i++)
            b.data[i + 1][8] = getBit(i); // after timing pattern
        for (let i = 8; i < 15; i++)
            b.data[size - 15 + i][8] = getBit(i); // right of bottom-left finder
        // horizontal
        for (let i = 0; i < 8; i++)
            b.data[8][size - i - 1] = getBit(i); // under top-right finder
        for (let i = 8; i < 9; i++)
            b.data[8][15 - i - 1 + 1] = getBit(i); // VVV, after timing
        for (let i = 9; i < 15; i++)
            b.data[8][15 - i - 1] = getBit(i); // under top-left finder
        b.data[size - 8][8] = !test; // bottom-left finder, right
    }
    // Version information
    if (ver >= 7) {
        const bits = info.versionBits(ver);
        for (let i = 0; i < 18; i += 1) {
            const bit = !test && ((bits >> i) & 1) == 1;
            const x = Math.floor(i / 3);
            const y = (i % 3) + size - 8 - 3;
            // two copies
            b.data[x][y] = bit;
            b.data[y][x] = bit;
        }
    }
    return b;
}
// zigzag: bottom->top && top->bottom
function zigzag(tpl, maskIdx, fn) {
    const size = tpl.height;
    const pattern = PATTERNS[maskIdx];
    // zig-zag pattern
    let dir = -1;
    let y = size - 1;
    // two columns at time
    for (let xOffset = size - 1; xOffset > 0; xOffset -= 2) {
        if (xOffset == 6)
            xOffset = 5; // skip vertical timing pattern
        for (;; y += dir) {
            for (let j = 0; j < 2; j += 1) {
                const x = xOffset - j;
                if (tpl.data[y][x] !== undefined)
                    continue; // skip already written elements
                fn(x, y, pattern(x, y));
            }
            if (y + dir < 0 || y + dir >= size)
                break;
        }
        dir = -dir; // change direction
    }
}
// NOTE: byte encoding is just representation, QR works with strings only. Most decoders will fail on raw byte array,
// since they expect unicode or other text encoding inside bytes
function detectType(str) {
    let type = 'numeric';
    for (let x of str) {
        if (info.alphabet.numeric.has(x))
            continue;
        type = 'alphanumeric';
        if (!info.alphabet.alphanumerc.has(x))
            return 'byte';
    }
    return type;
}
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function encode(ver, ecc, data, type) {
    let encoded = '';
    let dataLen = data.length;
    if (type === 'numeric') {
        const t = info.alphabet.numeric.decode(data.split(''));
        const n = t.length;
        for (let i = 0; i < n - 2; i += 3)
            encoded += bin(t[i] * 100 + t[i + 1] * 10 + t[i + 2], 10);
        if (n % 3 === 1) {
            encoded += bin(t[n - 1], 4);
        }
        else if (n % 3 === 2) {
            encoded += bin(t[n - 2] * 10 + t[n - 1], 7);
        }
    }
    else if (type === 'alphanumeric') {
        const t = info.alphabet.alphanumerc.decode(data.split(''));
        const n = t.length;
        for (let i = 0; i < n - 1; i += 2)
            encoded += bin(t[i] * 45 + t[i + 1], 11);
        if (n % 2 == 1)
            encoded += bin(t[n - 1], 6); // pad if odd number of chars
    }
    else if (type === 'byte') {
        const utf8 = utf8ToBytes(data);
        dataLen = utf8.length;
        encoded = Array.from(utf8)
            .map((i) => bin(i, 8))
            .join('');
    }
    else {
        throw new Error('encode: unsupported type');
    }
    const { capacity } = info.capacity(ver, ecc);
    const len = bin(dataLen, info.lengthBits(ver, type));
    let bits = info.modeBits[type] + len + encoded;
    if (bits.length > capacity)
        throw new Error('Capacity overflow');
    // Terminator
    bits += '0'.repeat(Math.min(4, Math.max(0, capacity - bits.length)));
    // Pad bits string untill full byte
    if (bits.length % 8)
        bits += '0'.repeat(8 - (bits.length % 8));
    // Add padding until capacity is full
    const padding = '1110110000010001';
    for (let idx = 0; bits.length !== capacity; idx++)
        bits += padding[idx % padding.length];
    // Convert a bitstring to array of bytes
    const bytes = Uint8Array.from(bits.match(/(.{8})/g).map((i) => Number(`0b${i}`)));
    return interleave(ver, ecc).encode(bytes);
}
// DRAW
function drawQR(ver, ecc, data, maskIdx, test = false) {
    const b = drawTemplate(ver, ecc, maskIdx, test);
    let i = 0;
    const need = 8 * data.length;
    zigzag(b, maskIdx, (x, y, mask) => {
        let value = false;
        if (i < need) {
            value = ((data[i >>> 3] >> ((7 - i) & 7)) & 1) !== 0;
            i++;
        }
        b.data[y][x] = value !== mask; // !== as xor
    });
    if (i !== need)
        throw new Error('QR: bytes left after draw');
    return b;
}
function penalty(bm) {
    const inverse = bm.inverse();
    // Adjacent modules in row/column in same | No. of modules = (5 + i) color
    const sameColor = (row) => {
        let res = 0;
        for (let i = 0, same = 1, last = undefined; i < row.length; i++) {
            if (last === row[i]) {
                same++;
                if (i !== row.length - 1)
                    continue; // handle last element
            }
            if (same >= 5)
                res += 3 + (same - 5);
            last = row[i];
            same = 1;
        }
        return res;
    };
    let adjacent = 0;
    bm.data.forEach((row) => (adjacent += sameColor(row)));
    inverse.data.forEach((column) => (adjacent += sameColor(column)));
    // Block of modules in same color (Block size = 2x2)
    let box = 0;
    let b = bm.data;
    const lastW = bm.width - 1;
    const lastH = bm.height - 1;
    for (let x = 0; x < lastW; x++) {
        for (let y = 0; y < lastH; y++) {
            const x1 = x + 1;
            const y1 = y + 1;
            if (b[x][y] === b[x1][y] && b[x1][y] === b[x][y1] && b[x1][y] === b[x1][y1]) {
                box += 3;
            }
        }
    }
    // 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column, preceded or followed by light area 4 modules wide
    const finderPattern = (row) => {
        const finderPattern = [true, false, true, true, true, false, true]; // dark:light:dark:light:dark
        const lightPattern = [false, false, false, false]; // light area 4 modules wide
        const p1 = [...finderPattern, ...lightPattern];
        const p2 = [...lightPattern, ...finderPattern];
        let res = 0;
        for (let i = 0; i < row.length; i++) {
            if (includesAt(row, p1, i))
                res += 40;
            if (includesAt(row, p2, i))
                res += 40;
        }
        return res;
    };
    let finder = 0;
    for (const row of bm.data)
        finder += finderPattern(row);
    for (const column of inverse.data)
        finder += finderPattern(column);
    // Proportion of dark modules in entire symbol
    // Add 10 points to a deviation of 5% increment or decrement in the proportion
    // ratio of dark module from the referential 50%
    let darkPixels = 0;
    bm.rectRead(0, Infinity, (_c, val) => (darkPixels += val ? 1 : 0));
    const darkPercent = (darkPixels / (bm.height * bm.width)) * 100;
    const dark = 10 * Math.floor(Math.abs(darkPercent - 50) / 5);
    return adjacent + box + finder + dark;
}
// Selects best mask according to penalty, if no mask is provided
function drawQRBest(ver, ecc, data, maskIdx) {
    if (maskIdx === undefined) {
        const bestMask = best();
        for (let mask = 0; mask < PATTERNS.length; mask++)
            bestMask.add(penalty(drawQR(ver, ecc, data, mask, true)), mask);
        maskIdx = bestMask.get();
    }
    if (maskIdx === undefined)
        throw new Error('Cannot find mask'); // Should never happen
    return drawQR(ver, ecc, data, maskIdx);
}
function validateECC(ec) {
    if (!ECMode.includes(ec))
        throw new Error(`Invalid error correction mode=${ec}. Expected: ${ECMode}`);
}
function validateEncoding(enc) {
    if (!Encoding.includes(enc))
        throw new Error(`Encoding: invalid mode=${enc}. Expected: ${Encoding}`);
    if (enc === 'kanji' || enc === 'eci')
        throw new Error(`Encoding: ${enc} is not supported (yet?).`);
}
function validateMask(mask) {
    if (![0, 1, 2, 3, 4, 5, 6, 7].includes(mask) || !PATTERNS[mask])
        throw new Error(`Invalid mask=${mask}. Expected number [0..7]`);
}
function encodeQR(text, output = 'raw', opts = {}) {
    const ecc = opts.ecc !== undefined ? opts.ecc : 'medium';
    validateECC(ecc);
    const encoding = opts.encoding !== undefined ? opts.encoding : detectType(text);
    validateEncoding(encoding);
    if (opts.mask !== undefined)
        validateMask(opts.mask);
    let ver = opts.version;
    let data, err = new Error('Unknown error');
    if (ver !== undefined) {
        validateVersion(ver);
        data = encode(ver, ecc, text, encoding);
    }
    else {
        // If no version is provided, try to find smallest one which fits
        // Currently just scans all version, can be significantly speedup if needed
        for (let i = 1; i <= 40; i++) {
            try {
                data = encode(i, ecc, text, encoding);
                ver = i;
                break;
            }
            catch (e) {
                err = e;
            }
        }
    }
    if (!ver || !data)
        throw err;
    let res = drawQRBest(ver, ecc, data, opts.mask);
    res.assertDrawn();
    const border = opts.border === undefined ? 2 : opts.border;
    if (!Number.isSafeInteger(border))
        throw new Error(`Wrong border type=${typeof border}`);
    res = res.border(border, false); // Add border
    if (opts.scale !== undefined)
        res = res.scale(opts.scale); // Scale image
    if (output === 'raw')
        return res.data;
    else if (output === 'ascii')
        return res.toASCII();
    else if (output === 'svg')
        return res.toSVG();
    else if (output === 'gif')
        return res.toGIF();
    else if (output === 'term')
        return res.toTerm();
    else
        throw new Error(`Unknown output: ${output}`);
}
// Type tests
// const o1 = qr('test', 'ascii');
// const o2 = qr('test', 'raw');
// const o3 = qr('test', 'gif');
// const o4 = qr('test', 'svg');
// const o5 = qr('test', 'term');

const defaultTranslations = {
    "DESKTOP": "Desktop",
    "MOBILE": "Mobile",
    "META_MASK_MOBILE_APP": "MetaMask mobile app",
    "SCAN_TO_CONNECT": "Scan to connect and sign with",
    "CONNECT_WITH_EXTENSION": "Connect With MetaMask Extension",
    "INSTALL_MODAL": {
        "TRUSTED_BY_USERS": "Trusted by over 30 million users to buy, store, send and swap crypto securely",
        "LEADING_CRYPTO_WALLET": "The leading crypto wallet & gateway to blockchain apps built on Ethereum Mainnet, Polygon, Optimism, and many other networks",
        "CONTROL_DIGITAL_INTERACTIONS": "Puts you in control of your digital interactions by making power of cryptography more accessible",
        "INSTALL_META_MASK_EXTENSION": "Install MetaMask Extension"
    },
    "PENDING_MODAL": {
        "OPEN_META_MASK_SELECT_CODE": "Please open the MetaMask wallet app and select the code on the screen OR disconnect",
        "OPEN_META_MASK_CONTINUE": "Open the MetaMask app to continue with your session.",
        "NUMBER_AFTER_OPEN_NOTICE": "If a number doesn't appear after opening MetaMask, please click disconnect and re-scan the QRCode.",
        "DISCONNECT": "Disconnect"
    },
    "SELECT_MODAL": {
        "CRYPTO_TAKE_CONTROL_TEXT": "Take control of your crypto and explore the blockchain with the wallet trusted by over 30 million people worldwide"
    },
    "META_MASK_MODAL": {
        "ADDRESS_COPIED": "Address copied to clipboard!",
        "DISCONNECT": "Disconnect",
        "ACTIVE_NETWORK": "Active Network"
    }
};
class SimpleI18n {
    constructor(config) {
        var _a;
        this.translations = defaultTranslations;
        this.supportedLocales = ['es', 'fr', 'he', 'it', 'pt', 'tr'];
        this.baseUrl = (_a = config === null || config === void 0 ? void 0 : config.baseUrl) !== null && _a !== void 0 ? _a : 'https://raw.githubusercontent.com/MetaMask/metamask-sdk/refs/heads/gh-pages/locales';
    }
    getBrowserLanguage() {
        // Get all browser languages in order of preference
        const browserLanguages = navigator.languages || [navigator.language];
        // Check if English is one of the preferred languages
        const hasEnglish = browserLanguages.some(lang => lang.toLowerCase().startsWith('en'));
        // If user understands English, use it
        if (hasEnglish) {
            return 'en';
        }
        // Otherwise, check for other supported languages
        const primaryLang = navigator.language;
        const shortLang = primaryLang.toLowerCase().split('-')[0];
        if (this.supportedLocales.includes(shortLang)) {
            return shortLang;
        }
        return 'en';
    }
    async init(config) {
        const browserLang = this.getBrowserLanguage();
        const locale = browserLang || config.fallbackLng;
        await this.loadTranslations(locale);
    }
    async loadTranslations(locale) {
        const shortLocale = locale.split('-')[0];
        if (shortLocale === 'en' || !this.supportedLocales.includes(shortLocale)) {
            this.translations = defaultTranslations;
            return;
        }
        try {
            const url = `${this.baseUrl}/${shortLocale}.json`;
            const response = await fetch(url);
            if (!response.ok)
                throw new Error(`HTTP error! status: ${response.status}`);
            this.translations = await response.json();
        }
        catch (error) {
            console.warn(`❌ Failed to load ${shortLocale} translations, falling back to English:`, error);
            this.translations = defaultTranslations;
        }
    }
    t(key) {
        return this.getNestedTranslation(key, this.translations) || key;
    }
    getNestedTranslation(key, dict) {
        const parts = key.split('.');
        let current = dict;
        for (const part of parts) {
            if (typeof current !== 'object')
                return '';
            current = current[part];
        }
        return typeof current === 'string' ? current : '';
    }
}

var TrackingEvents;
(function (TrackingEvents) {
    TrackingEvents["SDK_MODAL_VIEWED"] = "sdk_modal_viewed";
    TrackingEvents["SDK_MODAL_BUTTON_CLICKED"] = "sdk_modal_button_clicked";
    TrackingEvents["SDK_MODAL_TOGGLE_CHANGED"] = "sdk_modal_toggle_changed";
})(TrackingEvents || (TrackingEvents = {}));

const styleCss$2 = ".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";
const MmInstallModalStyle0 = styleCss$2;

const InstallModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.close = createEvent(this, "close", 7);
        this.startDesktopOnboarding = createEvent(this, "startDesktopOnboarding", 7);
        this.trackAnalytics = createEvent(this, "trackAnalytics", 7);
        this.link = undefined;
        this.sdkVersion = undefined;
        this.preferDesktop = undefined;
        this.tab = 1;
        this.isDefaultTab = true;
        this.translationsLoaded = false;
        this.onClose = this.onClose.bind(this);
        this.onStartDesktopOnboardingHandler = this.onStartDesktopOnboardingHandler.bind(this);
        this.setTab = this.setTab.bind(this);
        this.render = this.render.bind(this);
        this.setTab(this.preferDesktop ? 1 : 2);
        this.i18nInstance = new SimpleI18n();
    }
    componentDidLoad() {
        this.trackAnalytics.emit({
            event: TrackingEvents.SDK_MODAL_VIEWED,
            params: {
                extensionInstalled: false,
                tab: this.tab === 1 ? 'desktop' : 'mobile',
            },
        });
    }
    async connectedCallback() {
        await this.i18nInstance.init({
            fallbackLng: 'en'
        });
        this.translationsLoaded = true;
    }
    updatePreferDesktop(newValue) {
        if (newValue) {
            this.setTab(1);
        }
        else {
            this.setTab(2);
        }
    }
    onClose(shouldTerminate = false) {
        this.close.emit({ shouldTerminate });
    }
    onStartDesktopOnboardingHandler() {
        this.trackAnalytics.emit({
            event: TrackingEvents.SDK_MODAL_BUTTON_CLICKED,
            params: {
                button_type: 'install_extension',
                tab: 'desktop',
            },
        });
        this.startDesktopOnboarding.emit();
    }
    setTab(newTab, isUserAction = false) {
        if (isUserAction) {
            this.trackAnalytics.emit({
                event: TrackingEvents.SDK_MODAL_TOGGLE_CHANGED,
                params: {
                    toggle: this.tab === 1 ? 'desktop_to_mobile' : 'mobile_to_desktop',
                },
            });
        }
        this.tab = newTab;
        this.isDefaultTab = false;
    }
    render() {
        if (!this.translationsLoaded) {
            return null; // or a loading state
        }
        const t = (key) => this.i18nInstance.t(key);
        const currentTab = this.isDefaultTab ? this.preferDesktop ? 1 : 2 : this.tab;
        const svgElement = encodeQR(this.link, "svg", {
            ecc: "medium",
            scale: 2
        });
        return (h(WidgetWrapper, { className: "install-model" }, h("div", { class: 'backdrop', onClick: () => this.onClose(true) }), h("div", { class: 'modal' }, h("div", { class: 'closeButtonContainer' }, h("div", { class: 'right' }, h("span", { class: 'closeButton', onClick: () => this.onClose(true) }, h(CloseButton, null)))), h("div", { class: 'logoContainer' }, h(Logo, null)), h("div", null, h("div", { class: 'tabcontainer' }, h("div", { class: 'flexContainer' }, h("div", { onClick: () => this.setTab(1, true), class: `tab flexItem ${currentTab === 1 ? 'tabactive' : ''}` }, t('DESKTOP')), h("div", { onClick: () => this.setTab(2, true), class: `tab flexItem ${currentTab === 2 ? 'tabactive' : ''}` }, t('MOBILE')))), h("div", { style: { display: currentTab === 1 ? 'none' : 'block' } }, h("div", { class: 'flexContainer' }, h("div", { class: 'flexItem', style: {
                textAlign: 'center',
                marginTop: '4',
            } }, svgElement && (h("div", { id: "sdk-mm-qrcode", class: 'center', innerHTML: svgElement })), h("div", { class: 'connectMobileText' }, t('SCAN_TO_CONNECT'), " ", h("br", null), h("span", { class: 'blue' }, h("b", null, t('META_MASK_MOBILE_APP'))))))), h("div", { style: { display: currentTab === 2 ? 'none' : 'block' } }, h("div", { class: 'item' }, h(AdvantagesListItem, { Icon: HeartIcon, text: t('INSTALL_MODAL.TRUSTED_BY_USERS') })), h("div", { class: 'item' }, h(AdvantagesListItem, { Icon: LockIcon, text: t('INSTALL_MODAL.LEADING_CRYPTO_WALLET') })), h("div", { class: 'item' }, h(AdvantagesListItem, { Icon: WalletIcon, text: t('INSTALL_MODAL.CONTROL_DIGITAL_INTERACTIONS') })), h("button", { class: 'button', onClick: () => this.onStartDesktopOnboardingHandler() }, h(InstallIcon, null), h("span", { class: 'installExtensionText' }, t('INSTALL_MODAL.INSTALL_META_MASK_EXTENSION'))))), h(SDKVersion, { version: this.sdkVersion }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "preferDesktop": ["updatePreferDesktop"]
    }; }
};
InstallModal.style = MmInstallModalStyle0;

const styleCss$1 = ".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";
const MmPendingModalStyle0 = styleCss$1;

const PendingModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.close = createEvent(this, "close", 7);
        this.disconnect = createEvent(this, "disconnect", 7);
        this.updateOTPValue = createEvent(this, "updateOTPValue", 7);
        this.displayOTP = undefined;
        this.sdkVersion = undefined;
        this.otpCode = undefined;
        this.translationsLoaded = false;
        this.i18nInstance = new SimpleI18n();
    }
    async connectedCallback() {
        await this.i18nInstance.init({
            fallbackLng: 'en'
        });
        this.translationsLoaded = true;
    }
    onClose() {
        this.close.emit();
    }
    onDisconnect() {
        this.disconnect.emit();
    }
    onUpdateOTPValueHandler(otpValue) {
        this.updateOTPValue.emit({
            otpValue,
        });
    }
    disconnectedCallback() {
        this.onClose();
    }
    render() {
        var _a;
        if (!this.translationsLoaded) {
            return null;
        }
        const displayOTP = (_a = this.displayOTP) !== null && _a !== void 0 ? _a : true;
        const sdkVersion = this.sdkVersion;
        const t = (key) => this.i18nInstance.t(key);
        return (h(WidgetWrapper, { className: "pending-modal" }, h("div", { class: 'backdrop', onClick: () => this.onClose() }), h("div", { class: 'modal' }, h("div", { class: 'closeButtonContainer' }, h("div", { class: 'right' }, h("span", { class: 'closeButton', onClick: () => this.onClose() }, h(CloseButton, null)))), h("div", { class: 'logoContainer' }, h(Logo, null)), h("div", null, h("div", { class: 'flexContainer', style: {
                flexDirection: 'column',
                color: 'black',
            } }, h("div", { class: 'flexItem', style: {
                textAlign: 'center',
                marginTop: '30px',
                marginBottom: '30px',
                fontSize: '16px',
            } }, displayOTP
            ? t('PENDING_MODAL.OPEN_META_MASK_SELECT_CODE')
            : t('PENDING_MODAL.OPEN_META_MASK_CONTINUE')), h("div", { id: "sdk-mm-otp-value", style: { padding: '10px', fontSize: '32px', display: this.otpCode ? 'block' : 'none' } }, this.otpCode), displayOTP && (h("div", { class: 'notice' }, "* ", t('PENDING_MODAL.NUMBER_AFTER_OPEN_NOTICE')))), h("div", { style: { marginTop: '20px' } }, h("button", { class: 'button blue', style: {
                marginTop: '5px',
                color: '#0376C9',
                borderColor: '#0376C9',
                borderWidth: '1px',
                borderStyle: 'solid',
                backgroundColor: 'white',
            }, onClick: () => this.onDisconnect() }, t('PENDING_MODAL.DISCONNECT')))), h(SDKVersion, { version: sdkVersion }))));
    }
    get el() { return getElement(this); }
};
PendingModal.style = MmPendingModalStyle0;

const ConnectIcon = () => (h("svg", { width: "21", height: "15", viewBox: "0 0 21 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    h("path", { d: "M14.1364 14.9851C13.5909 14.9851 13.2273 14.5851 13.2273 13.9851C13.2273 13.3851 13.5909 12.9851 14.1364 12.9851C16.6818 12.9851 18.6818 10.7851 18.6818 7.98508C18.6818 5.18508 16.6818 2.98508 14.1364 2.98508C11.5909 2.98508 9.59091 5.18508 9.59091 7.98508C9.59091 8.58508 9.22727 8.98508 8.68182 8.98508C8.13636 8.98508 7.77273 8.58508 7.77273 7.98508C7.77273 4.08508 10.5909 0.985077 14.1364 0.985077C17.6818 0.985077 20.5 4.08508 20.5 7.98508C20.5 11.8851 17.6818 14.9851 14.1364 14.9851ZM6.68182 14.7851C3.22727 14.7851 0.5 11.6851 0.5 7.98508C0.5 4.28508 3.22727 1.18508 6.68182 1.18508C7.22727 1.18508 7.59091 1.58508 7.59091 2.18508C7.59091 2.78508 7.22727 3.18508 6.68182 3.18508C4.22727 3.18508 2.31818 5.38508 2.31818 7.98508C2.31818 10.5851 4.22727 12.7851 6.68182 12.7851C9.13636 12.7851 11.0455 10.6851 11.0455 7.98508C11.0455 7.38508 11.4091 6.98508 11.9545 6.98508C12.5 6.98508 12.8636 7.38508 12.8636 7.98508C12.7727 11.6851 10.0455 14.7851 6.68182 14.7851Z", fill: "white" })));

const MetamaskExtensionImage = () => (h("svg", { width: "400", height: "300", viewBox: "0 0 400 300", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    h("rect", { width: "400", height: "300", fill: "white" }),
    h("path", { d: "M300.116 242.46L250.485 227.681L213.057 250.055L186.944 250.045L149.493 227.681L99.8843 242.46L84.7939 191.518L99.8843 134.979L84.7939 87.1777L99.8843 27.9336L177.402 74.2466H222.598L300.116 27.9336L315.206 87.1777L300.116 134.979L315.206 191.518L300.116 242.46Z", fill: "#FF5C16" }),
    h("path", { d: "M99.8955 27.9336L177.414 74.2792L174.331 106.085L99.8955 27.9336Z", fill: "#FF5C16" }),
    h("path", { d: "M149.505 191.539L183.612 217.521L149.505 227.681V191.539Z", fill: "#FF5C16" }),
    h("path", { d: "M180.886 148.585L174.33 106.107L132.369 134.991L132.348 134.98V135.001L132.477 164.732L149.493 148.585H149.504H180.886Z", fill: "#FF5C16" }),
    h("path", { d: "M300.116 27.9336L222.598 74.2792L225.67 106.085L300.116 27.9336Z", fill: "#FF5C16" }),
    h("path", { d: "M250.508 191.539L216.4 217.521L250.508 227.681V191.539Z", fill: "#FF5C16" }),
    h("path", { d: "M267.652 135.001H267.663H267.652V134.98L267.641 134.991L225.68 106.107L219.125 148.585H250.507L267.533 164.732L267.652 135.001Z", fill: "#FF5C16" }),
    h("path", { d: "M149.493 227.681L99.8843 242.46L84.7939 191.54H149.493V227.681Z", fill: "#E34807" }),
    h("path", { d: "M180.875 148.574L190.351 209.98L177.219 175.838L132.456 164.732L149.483 148.574H180.864H180.875Z", fill: "#E34807" }),
    h("path", { d: "M250.507 227.681L300.116 242.46L315.206 191.54H250.507V227.681Z", fill: "#E34807" }),
    h("path", { d: "M219.126 148.574L209.649 209.98L222.782 175.838L267.545 164.732L250.507 148.574H219.126Z", fill: "#E34807" }),
    h("path", { d: "M84.7939 191.517L99.8843 134.979H132.337L132.456 164.721L177.219 175.826L190.351 209.969L183.601 217.488L149.493 191.506H84.7939V191.517Z", fill: "#FF8D5D" }),
    h("path", { d: "M315.206 191.517L300.116 134.979H267.664L267.545 164.721L222.782 175.826L209.649 209.969L216.4 217.488L250.507 191.506H315.206V191.517Z", fill: "#FF8D5D" }),
    h("path", { d: "M222.598 74.2466H200H177.402L174.33 106.053L190.351 209.936H209.649L225.681 106.053L222.598 74.2466Z", fill: "#FF8D5D" }),
    h("path", { d: "M99.8843 27.9336L84.7939 87.1777L99.8843 134.979H132.337L174.319 106.085L99.8843 27.9336Z", fill: "#661800" }),
    h("path", { d: "M171.496 160.906H156.795L148.79 168.752L177.229 175.804L171.496 160.896V160.906Z", fill: "#661800" }),
    h("path", { d: "M300.116 27.9336L315.206 87.1777L300.116 134.979H267.663L225.681 106.085L300.116 27.9336Z", fill: "#661800" }),
    h("path", { d: "M228.525 160.906H243.248L251.253 168.763L222.781 175.826L228.525 160.896V160.906Z", fill: "#661800" }),
    h("path", { d: "M213.046 229.789L216.399 217.51L209.649 209.991H190.34L183.59 217.51L186.943 229.789", fill: "#661800" }),
    h("path", { d: "M213.047 229.789V250.066H186.944V229.789H213.047Z", fill: "#C0C4CD" }),
    h("path", { d: "M149.504 227.66L186.965 250.056V229.779L183.611 217.5L149.504 227.66Z", fill: "#E7EBF6" }),
    h("path", { d: "M250.506 227.66L213.045 250.056V229.779L216.398 217.5L250.506 227.66Z", fill: "#E7EBF6" })));

const styleCss = ".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";
const MmSelectModalStyle0 = styleCss;

const SelectModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.close = createEvent(this, "close", 7);
        this.connectWithExtension = createEvent(this, "connectWithExtension", 7);
        this.link = undefined;
        this.sdkVersion = undefined;
        this.preferDesktop = undefined;
        this.tab = 1;
        this.isDefaultTab = true;
        this.translationsLoaded = false;
        this.i18nInstance = new SimpleI18n();
        this.setTab(this.preferDesktop ? 1 : 2);
    }
    async connectedCallback() {
        await this.i18nInstance.init({
            fallbackLng: 'en'
        });
        this.translationsLoaded = true;
    }
    onClose(shouldTerminate = false) {
        this.close.emit({ shouldTerminate });
    }
    connectWithExtensionHandler() {
        this.connectWithExtension.emit();
    }
    setTab(tab) {
        this.tab = tab;
        this.isDefaultTab = false;
    }
    disconnectedCallback() {
        this.onClose();
    }
    updatePreferDesktop(newValue) {
        if (newValue) {
            this.setTab(1);
        }
        else {
            this.setTab(2);
        }
    }
    render() {
        if (!this.translationsLoaded) {
            return null;
        }
        const t = (key) => this.i18nInstance.t(key);
        const sdkVersion = this.sdkVersion;
        const currentTab = this.isDefaultTab ? this.preferDesktop ? 1 : 2 : this.tab;
        const svgElement = encodeQR(this.link, "svg", {
            ecc: "medium",
            scale: 2
        });
        return (h(WidgetWrapper, { className: "select-modal" }, h("div", { class: 'backdrop', onClick: () => this.onClose(true) }), h("div", { class: 'modal' }, h("div", { class: 'closeButtonContainer' }, h("div", { class: 'right' }, h("span", { class: 'closeButton', onClick: () => this.onClose(true) }, h(CloseButton, null)))), h("div", { class: 'logoContainer' }, h(Logo, null)), h("div", null, h("div", { class: 'tabcontainer' }, h("div", { class: 'flexContainer' }, h("div", { onClick: () => this.setTab(1), class: `tab flexItem ${currentTab === 1 ? 'tabactive' : ''}` }, t('DESKTOP')), h("div", { onClick: () => this.setTab(2), class: `tab flexItem ${currentTab === 2 ? 'tabactive' : ''}` }, t('MOBILE')))), h("div", { style: { display: currentTab === 1 ? 'none' : 'block' } }, h("div", { class: 'flexContainer' }, h("div", { class: 'flexItem', style: {
                textAlign: 'center',
                marginTop: '4',
            } }, h("div", { class: 'center', id: "sdk-mm-qrcode", innerHTML: svgElement }), h("div", { class: 'connectMobileText' }, t('SCAN_TO_CONNECT'), h("br", null), h("span", { class: 'blue' }, h("b", null, t('META_MASK_MOBILE_APP'))))))), h("div", { style: { display: currentTab === 2 ? 'none' : 'block' } }, h("div", { style: {
                display: 'flex',
                justifyContent: 'center',
                height: '300',
                marginTop: '-20',
            } }, h(MetamaskExtensionImage, null)), h("div", { class: 'extensionLabel' }, t('SELECT_MODAL.CRYPTO_TAKE_CONTROL_TEXT')), h("button", { class: 'button', onClick: () => this.connectWithExtensionHandler() }, h(ConnectIcon, null), h("span", { class: 'installExtensionText' }, t('CONNECT_WITH_EXTENSION'))))), h(SDKVersion, { version: sdkVersion }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "preferDesktop": ["updatePreferDesktop"]
    }; }
};
SelectModal.style = MmSelectModalStyle0;

export { InstallModal as mm_install_modal, PendingModal as mm_pending_modal, SelectModal as mm_select_modal };

//# sourceMappingURL=mm-install-modal_3.entry.js.map