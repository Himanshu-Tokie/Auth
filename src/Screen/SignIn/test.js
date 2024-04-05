function showMore(str, n) {
    // const regex = /(?<!\\)\\n/
    const test = /(?<!\\)\n/
    let temp = str.split(test);
    let ok = false;
    let tempStr=''
    let count = 0;
    let line=0;
    if(temp.length>3)ok=true;
    temp=temp.slice(0,3)
    for(let i in temp){
        if(line>3)break;
        if(temp[i].length>n){tempStr=tempStr+temp[i]+'\n';line+=2;}
        else if(temp[i].length<=n){tempStr=tempStr+temp[i]+'\n';line+=1;}
    }  for(let i of temp){
        count+=i.length;
        if(count>3*n)ok= true;
    }
    tempStr=tempStr.slice(0,(3*n))
    console.log(tempStr);
    return {str:tempStr,showMore:ok}
}

console.log(showMore("asdf\\nasd\nfasdf",3))

