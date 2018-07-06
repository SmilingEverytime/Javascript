var smilinglei = (function() {
    /**
     * [chunk description]
     * @param  {[type]} array [description]
     * @param  {[type]} size  [description]
     * @return {[type]}       [description]
     */
    chunk: function(array, size) {
        var result = [];
        for (var i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size))
        }
        return result;
    },
    compact: function(array) {
        var newarr = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i]) {
                newarr.push(array[i]);
            }
        }
        return newarr;
    },
    difference: function(array, values) {
        let arr = values.reduce((accumulator, currentVal) => {
            return accumulator.concat(currentVal)
        }, [])
        let res = array.filter(arrItem => {
            return arr.indexOf(arrItem) === -1
        })
        return res;
    },
    fill: function(array, value, start = 0, end = array.length) {
        for (let i = start; i < end; i++) {
            array[i] = value;
        }
        return array;
    },
    drop: function(array, n = 1) {
        if (n === 0) {
            return array;
        }
        if (n > array.length) {
            return [];
        }
        for (let i = 0; i < n; i++) {
            array.shift(i);
        }
        return array;
    },
    dropRight: function(array, n = 1) {
        if (n === 0) {
            return array;
        }
        if (n > array.length) {
            return [];
        }
        for (let i = 0; i < n; i++) {
            array.pop(i);
        }
        return array;
    },
    flatten: function(array) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                for (var j = 0; j < array[i].length; j++) {
                    result.push(array[i][j]);
                }

            } else {
                result.push(array[i]);
            }
        }
        return result;
    },
    flattenDeep: function(array) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                result = result.concat(arguments.callee(array[i]));

            } else {
                result.push(array[i]);
            }
        }
        return result;
    },
    flattenDepth: function(array, depth = 1) {
        let res = array;
        for (let i = 0; i < depth; i++) {
            res = flatten(res)
        }
        return res
    },
    fromPairs: function(array) {
        var result = {};
        for (var prop of array) {
            //把数组的第一项当作属性，第二项当作值，并把值赋给属性
            result[prop[0]] = prop[1];
        }
        return result;
    },
    head: function(array) {
        return array[0] ? array[0] : undefined;
    },
    indexOf: function(array, value, fromIndexOf = 0) {
        if (fromIndexOf > array.length) {
            return -1;
        }
        for (let i = fromIndexOf; i < array.length; i++) {
            if (array[i] === value) {
                return i;
            }
        }
        return -1;
    },
    initial: function(array) {
        var res = [];
        //不修改原数组，只把切下的部分拷贝到另外的数组
        res = array.slice(0, array.length - 1);
        return res;
    },
    intersection: function(array1, array2) {
        var res = [];
        //array.includes()用来判定一个数组是否包含一个特定的值，返回值为true或者false
        for (var item of array1) {
            if (array2.includes(item)) {
                res.push(item);
            }
        }
        return res;
    },
    join: function(array, separator = ',') {
        var str = "";
        for (var i = 0; i < array.length; i++) {
            if (i === array.length - 1) {
                str += "" + array[i]
            } else {
                str += "" + array[i] + separator;
            }
        }
        return str;
    },
    last: function(array) {
        return array[array.length - 1] ? array[array.length - 1] : undefined;
    },
    lastIndexOf: function(array, value, fromIndexOf = array.length - 1) {
        for (let i = fromIndexOf; i >= 0; i--) {
            if (value === array[i]) {
                return i;
            }
        }
        return -1;
    },
    nth: function(array, n) {
        return array[n > 0 ? n : array.length + n];
    },
    pull: function(array, ...args) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < args.length; j++) {
                if (array[i] === args[j]) {
                    array.splice(i, 1);
                    i--
                }
            }
        }
        return array;
    },
    pullAll: function(array, removes) {
        let res = []
        res = array.filter(arrItem => removes.indexOf(arrItem) === -1)
        return res
    },
    filter: (array, action) => array.reduce((result, val, index) => {
        if (action(val)) {
            result.push(val)
        }
        return result, []
    }),
    flip: function(func) {
        return function(...args) {
            return func(...args.reverse())
        }
    },
    map: function(array, action) {
        return array.reduce(function(result, item) {
            if (action(item)) {
                result.push(item);
            }
            return result;
        }, [])
    },
    fromPairs: function(pairs) {
        return pairs.reduce((memo, curr) => (memo[curr[0]] = curr[1], memo), {})
    },
    spread: function(func) {
        return function(ary) {
            return func.apply(null, ary);
        }
    },
    once: function(func) {
        var called = false;
        var firstCalledValue;
        return function(...args) {
            if (!called) {
                called = true;
                firstCalledValue = func(...args);
                return firstCalledValue;
            } else {
                return firstCalledValue;
            }
        }
    },
    nagate: function(predicate) {
        return function(...args) {
            !predicate();
        }
    },
    unary: function(func) {
        return function(arg) {
            return func(arg);
        }

    },
    ary: function(func, n) {
        return function(...args) {
            args.length = n;
            return func(...args);
        }
    },
    property: function(path) {
        return function(object) {
            return get(object, path);
        }
    },
    get: function(obj, path) {
        for (var i = 0; i < path.length; i++) {
            obj = obj[path[i]];
            if (obj === undefined || obj === null) {
                return undefined;
            }
        }
        return obj;
    },
    matches: function(source) {
        return function(obj) {
            if (Object.values(obj).includes(Object.values(source))) {
                return true;
            } else {
                return false;
            }

        }
    },
    times: function(n, func) {
        var result = [];
        for (var i = 0; i < n; i++) {
            result.push(func(i));
        }
        return result;
    },
    reverse: function(array) {
        return array.reverse()
    },
    isArray: function(val) {
        if (Object.prototype.toString.apply(val) == "[object Array]") {
            return true;
        } else {
            return false;
        }
    },
    isBoolean: val => Object.prototype.toString.apply(val) == "[object Boolean]",
    forEach: function(col, action) {
        for (let i = 0; i < col.length; i++) {
            action(col[i], i, col);
        }
        return col;
    },
    map: function(col, action) {
        var res = [];
        for (let i = 0; i < col.length; i++) {
            res.push(action(col[i], i, col))
        }
        return res;
    },
    reduce: function(col, func, start = 0) {
        var current = start;
        for (let i in col) {
            current = func(current, col[i], i, col)
        }
        return current;
    },
    isArrayBuffer: val => Object.prototype.toString.call(val) == "[object ArrayBuffer]",
    isDate: val => Object.prototype.toString.call(val) == "[object Date]",
    isNumber: val => Object.prototype.toString.call(val) == "[object Number]",
    isNull: val => Object.prototype.toString.call(val) == "[object Null]",
    isUndefined: val => Object.prototype.toString.call(val) == "[object Undefined]",
    isString: val => Object.prototype.toString.call(val) == "[object String]",
    isNaN: function(val) {
        if (val != val) {
            return true;
        } else {
            return false;
        }
    },
    tail: function(array) {
        array.shift()
        return array
    },
    take: function(array, number = 1) {
        if (number > array.length) {
            return array
        }
        let res = [];
        res = array.splice(0, number)
        return res
    },
    union: function(array, ...values) {
        let arr = []
        let res = []
        let combineArray = []
        arr = values.reduce((accumulator, currentVal) => accumulator.concat(currentVal), [])
        combineArray = arr.concat(array)
        let set = new Set(combineArray)
        res = [...set]
        return res

    },
    takeRight: (array, number = 1) => array.splice(array.length - number, number),
    flip: function(func) {
        return function(...args) {
            let res = args.reverse()
            return func(...res)
        }
    },
    identity: (...args) => args[0],
    getType: function() {

    }



})()