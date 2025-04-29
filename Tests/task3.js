function equality(a,b) {
    if (typeof a == 'object' && a && typeof b == 'object' && b && Object.keys(a).length == Object.keys(b).length) {
        for (const key in a) {
            if (key in b) {
                if(typeof a[key] == 'object' && a[key]) {
                    const result = typeof b[key] == 'object' && b[key] ? equality(a[key], b[key]) : false;
                    if (result == false) return false
                } else {
                    if (a[key] !== b[key])
                        return false;
                }
            } else return false;
        }
     return true;
    } else return a == b;
}

console.log(equality({},null));