// =========  Farsi Characters unicode
export const persianLetterPattern = /^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u06A9\u06AF\u06BE\u06CC_ -]+$/;
export const userAddressPAttern = /^[\d\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u06A9\u06AF\u06BE\u06CC \_\-\n]+$/;
// ========== check national code function ============ 
export function checkNC(meli_code) {
    if (meli_code.length == 10) {
        if (meli_code == '1111111111' ||
            meli_code == '0000000000' ||
            meli_code == '2222222222' ||
            meli_code == '3333333333' ||
            meli_code == '4444444444' ||
            meli_code == '5555555555' ||
            meli_code == '6666666666' ||
            meli_code == '7777777777' ||
            meli_code == '8888888888' ||
            meli_code == '9999999999') {
            return false;
        }
        let c = parseInt(meli_code.charAt(9));
        let n = parseInt(meli_code.charAt(0)) * 10 +
            parseInt(meli_code.charAt(1)) * 9 +
            parseInt(meli_code.charAt(2)) * 8 +
            parseInt(meli_code.charAt(3)) * 7 +
            parseInt(meli_code.charAt(4)) * 6 +
            parseInt(meli_code.charAt(5)) * 5 +
            parseInt(meli_code.charAt(6)) * 4 +
            parseInt(meli_code.charAt(7)) * 3 +
            parseInt(meli_code.charAt(8)) * 2;
        let r = n - parseInt(n / 11) * 11;
        if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
// ================================================================

// -------- check if Hex color code is white or is in white shade
export function whiteShade(cc) {
    let mycc = [];
    cc = cc.substring(1, cc.length).split(''); // remove the # from hex code and make an array of the rest (a-z0-9)
    for (let i = 0; i < cc.length; i++) {
        if (i % 2 === 0) {
            mycc.push(cc[i])
        }
    }
    return mycc.every(item => item == 'f')
}
// ===============================================================