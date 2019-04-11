export const responseSuccess = function (res, data = {}) {
    return res.json({
        success: true,
        ...data
    });
};

export const responseError = function (res, data = {}) {
    return res.json({
        error: true,
        ...data
    });
}
