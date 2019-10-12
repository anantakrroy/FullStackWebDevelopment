function getHammingDistance(str1, str2) {
    var hamDistance = 0;
    if (str1.length !== str2.length) {
        throw ValueError("Hamming distance is calculated for strings of equal length!");
    } else if (typeof str1 !== "string" || typeof str2 !== "string") {
        throw TypeError("Inputs should be of type string!");
    } else {
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                hamDistance++;
            }
        }
    }
    return ("The Hamming distance between string " + str1 + " and string " + str2 + " is " + hamDistance);
}

getHammingDistance("karolin", "kerstin");