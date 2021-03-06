"use strict";

/**
 * arrsToObj
 * Converts two arrays into an object.
 *
 * @name arrsToObj
 * @function
 * @param {Array} names The names array.
 * @param {Array} values The values array.
 * @return {Object} The result object.
 */
module.exports = function arrsToObj (names, values) {
    let obj = {};

    if (!Array.isArray(names) || !Array.isArray(values)) {
        return obj;
    }

    for (let i = 0; i < names.length; ++i) {
        obj[names[i]] = values[i];
    }

    return obj;
};
