exports.add = function(i, j){
    return i+j;
};
exports.sub = function(i, j){
    if(i > j){
        return i-j;
    }
    else{
        return j-i;
    }
};