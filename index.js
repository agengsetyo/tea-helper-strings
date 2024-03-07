// Helper to check object is String or Not
export function isString(v) {
    return Object.prototype.toString.call(v) === "[object String]";
}