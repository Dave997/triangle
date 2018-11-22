function evaluate(l1, l2, l3){

    if(arguments.length != 3) return "err: bad_parameters";
    if(!Number.isInteger(l1)) return "err: bad_parameters";
    if(!Number.isInteger(l2)) return "err: bad_parameters";
    if(!Number.isInteger(l3)) return "err: bad_parameters";

    if (l1 + l2 <= l3 || l1 + l3 <= l2 || l2 + l3 <= l1 || l1 == 0 || l2 == 0 || l3 == 0) 
        return "err: not_triangle";

    if(l1 == l2 && l2 == l3)
        return "equilateral";
    
    if(l1 == l2 || l2 == l3 || l1 == l3)
        return "isosceles";

    if(l1 != l2 && l2 != l3 && l1 != l3)
        return "scalene";

    return "err: not_recognized"; 
}

module.exports = {evaluate:evaluate};