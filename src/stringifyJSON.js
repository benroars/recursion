// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
    if(typeof obj === 'number' || typeof obj ==='boolean'){
        return obj.toString();
    }
    else if(typeof obj === 'string'){
        return '"' + obj + '"';
    }
    else if(obj === null && typeof obj === "object"){
        return "null";
    }
    else if(typeof obj === undefined){
        return undefined;
    }
    else if(typeof obj === 'function'){
        return undefined;
    }
    else if(Array.isArray(obj)){
        var json = [];
        obj.forEach(function(value){
            json.push(stringifyJSON(value));
        });
        return '[' + json.join(',') + ']';
    }
    else if({}.toString.call(obj) === '[object Object]'){
        var keyval = [];
        for(var key in obj){
            if(key !== undefined && obj[key] !== undefined){
                keyval.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
            }else{
                return '{}';
            }   
        }
        return '{' + keyval.join(',') + '}';
    }
    
};