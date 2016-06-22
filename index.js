/* jshint node:true, browser:true, esnext:true */

'use strict';

// Utility methods for working with Sets

var difference = require('lodash.difference'),
    intersection = require('lodash.intersection');

function setToArray(set) {
    var arr;
    if (Array.from) {
        return Array.from(set);
    } else {
        arr = [];
        set.forEach(function (item) {
            arr.push(item);
        });
        return arr;
    }
}
/**
 * Converts a Set to an Array
 * @param {Set}     set     The Sets that should be converted to an Array
 * @return {Array}  The converted Set 
 */
module.exports.toArray = setToArray;

/**
 * The map() method creates a new Set with the results of calling a provided function on every element in this Set
 * @param  {Set}        set  The set you want to perform the mapping operation on
 * @param  {Function}   cb   https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @return {Set}        The Set after mapping operation has been perfomed
 */
module.exports.map = function(set, cb) {
    return new Set(
        setToArray(set)
        .map(cb)
    );
};

/**
 * The filter() method creates a new Set with all elements that pass the test implemented by the provided function
 * @param  {Set}        set The Set you want to filter
 * @param  {Function}   cb  Function to test each element of the Set. Return true to keep the element, false otherwise
 * @return {Set}        The resulting Set after the filter operation
 */
module.exports.filter = function(set, cb) {
    return new Set(
        setToArray(set)
        .filter(cb)
    );
};

/**
 * The union() method returns a new Set comprised of the Sets provided as arguments.
 * @param {Set}  sets The Sets you want to concatinate
 * @return {Set} The new concatinated Set
 */
module.exports.union = function() {
    var arr = [],
        args = [].slice.call(arguments);

    if (args.length === 1) {
        return args[0];
    }

    args.forEach(function (set) {
        arr = arr.concat(setToArray(set));
    });

    return new Set(arr);
};

/**
 * Creates a Set of unique values that are included in all given sets.
 * @param {Set} set Two or more Sets you want to intersect.
 * @return {Set} The intersection of the Sets given as arguments
 */
module.exports.intersect = function() {
    var args = [].slice.call(arguments)
        .map(function (set) {
            return setToArray(set);
        });

    return new Set(intersection.apply(null, args));
};

/**
 * Creates a Set of values not included in the other given sets.
 * @param  {Set} set1 The Set to inspect
 * @param  {Set} sets The values to exclude
 * @return {Set} The new Set of filtered values
 */
module.exports.diff = function (set1) {
    var rest = [].slice.call(arguments, 1);
    
    // Concat rest of Sets
    rest = module.exports.union.apply(null, rest);

    rest = setToArray(rest);
    set1 = setToArray(set1);

    return new Set(difference(set1, rest));
};

/**
 * The join() method joins all elements of a Set into a string.
 * @param  {Set}    set       The Set you want to join
 * @param  {String} separator Optional. Specifies string you want to separate the elements of the Set
 * @return {String}           A string result of every element in the Set
 */
module.exports.join = function(set, separator) {
    return setToArray(set).join(separator);
};

/**
 * A replacer function for use with JSON.stringify. Converts Set to an Array in JSON.
 */
module.exports.stringifyReplacer = function(key, value) {
    if ({}.toString.call(value) === '[object Set]' || value instanceof Set) {
        return setToArray(value);
    }
    return value;
};