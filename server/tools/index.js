export const responseSuccess = function (res, data = {}) {
    console.log('resp succ', data);
    return res.json({
        success: true,
        ...data
    });
};

export const responseError = function (res, data = {}) {
    console.log('resp err', data);
    return res.json({
        error: true,
        ...data
    });
}

export const firstUpper = function (str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}
