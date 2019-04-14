export const getCookie = function (name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));

    if (match) return match[2];
};

export const firstUpper = function (str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
};

export const lang = function (number, texts) {
    if (!texts.one || !texts.two || !texts.five) {
        throw new Error('Не переданы все слова для перевода.');
    }

    const n = number % 10;

    if (n === 1 && number !== 11) {
        return { number, text: texts.one };
    }

    /* eslint-disable-next-line no-mixed-operators */
    else if (n >= 2 && n <= 4 && (number < 12 || number > 19)) {
        return { number, text: texts.two };
    }

    /* eslint-disable-next-line no-mixed-operators */
    else if (n >= 0 && n <= 9 || n >= 12 && n <= 19) {
        return { number, text: texts.five };
    }
}
