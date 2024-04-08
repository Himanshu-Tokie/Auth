function showMore(str, n) {
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
        if(count>3n)ok= true;
    }
    tempStr = tempStr.split(test)
    if(tempStr.length>2){
        tempStr[2]=tempStr[2].slice(0,n);
    }
    tempStr=tempStr.join('\n');
    // (tempStr[-1]=='n' && tempStr[-2]=='\\')?
    // tempStr=tempStr.slice(0,(tempStr.length)):
    tempStr=tempStr.slice(0,(tempStr.length-2));
    console.log(tempStr);
    return {str:tempStr,showMore:ok}
}

console.log(showMore("asd\nf nasd \nfasdf asfklds asfdsfdsjkf aksdlf dklsjfkjfa;dkfjkl a;ldksjfldsfjkdhsfjhdsfdskjfkldsjf dsljf asjfklasdfkjhdsjkfhdsklajfkla dsklfhdsjfkladjsflds",20))