//first
function firstLast6(x){
    if(x[0]==6 || x[x.length-1]==6){
        return true;
    }
    return false;
}

//second
function has23(x){
    for (var i=0;i<x.length;i++){
        if(x[i]==2 || x[i]==3){
            return true;
        }
    }
    return false;
}

//third
function fix23(x){
    for (var i=0;i<x.length;i++){
        if(x[i]==2 && x[i+1]==3){
            x[i+1]=0;
        }
    }
    return x;
}


//fourth
function countYZ(x){
    var count = 0;
    x = x.toLowerCase();
    for (var i=0;i<x.length;i++){
        if (x[i]=="y" && (x[i+1]==" " || i==x.length-1)){
            count = count+1;
        }
        if (x[i]=="z" && (x[i+1]==" " || i==x.length-1)){
            count = count+1;
        }
    }
    return count;
}

//fifth
function endOther(x, y){
    x = x.toLowerCase();
    y = y.toLowerCase();
    xLength = x.length;
    yLength = y.length;
    if(y.substring(y.length-xLength,y.length)==x){
        return true;
    }
    if(x.substring(x.length-yLength,x.length)==y){
        return true;
    }
    return false;
}

//sixth
function starOut(x){
    var y = "";
    for (var i=0;i<x.length;i++){
        if(!(x.substring(i, i+1)=="*" || x.substring(i+1, i+2)=="*" || x.substring(i-1, i)=="*")){
           y = y + x.substring(i, i+1);
        }
    }
    return y;
}

//seventh
function getSandwich(x){
    if(x.indexOf("bread")==-1){
        return "";
    }
    var y = x.indexOf("bread")+5;
    var z = x.lastIndexOf("bread");
    if (y<z){
        var sandWich = x.substring(y, z);
        return sandWich;
    }
    return "";
}

//eigth
function canBalance(x){
    var sumBefore=0;
    var sumAfter=0;
    for (var i=0;i<x.length;i++){
        sumBefore += x[i];
        for (var y=i+1;y<x.length;y++){
            sumAfter += x[y]
        }
        if (sumBefore==sumAfter){
            return true;
        }
        sumAfter = 0;
    }
    return false;
}

//ninth
function countClumps(x){
    var count = 0;
    for (var i=0;i<x.length;i++){
        if(x[i]==x[i+1] && x[i]!=x[i-1]){
            count=count+1;
        }
    }
    return count;
}

//tenth
function evenlySpaced(a, b, c){
    if(b-a==c-b){
        return true;
    }
    if(a-b==b-c){
        return true;
    }
    if(c-a==b-c){
        return true;
    }
    if(c-a==a-b){
        return true;
    }
    return false;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += firstLast6([6, 1]);
    document.getElementById("output").innerHTML += has23([2, 1]);
    document.getElementById("output").innerHTML += fix23([2, 1, 1]);
    document.getElementById("output").innerHTML += countYZ('dak yak');
    document.getElementById("output").innerHTML += endOther("Hiabc", "abc");
    document.getElementById("output").innerHTML += starOut("ab*cd");
    document.getElementById("output").innerHTML += getSandwich("breadjambread");
    document.getElementById("output").innerHTML += canBalance([1, 1, 1, 2, 1]);
    document.getElementById("output").innerHTML += countClumps([1, 1, 1, 1, 1]);
    document.getElementById("output").innerHTML += evenlySpaced(4, 6, 2);
}