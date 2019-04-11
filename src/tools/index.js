export default {
    getCookie: function (name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    },

    firstUpper: function(str) {
        return str && str.slice(0, 1).toUpperCase() + str.slice(1);
    }
}
