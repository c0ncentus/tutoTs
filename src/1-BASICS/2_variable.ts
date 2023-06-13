

function ref(): void {
    let clown = "red"
    const clownA = clown;
    const clownB = structuredClone(clown);
    // clownA="";
    
    clown = "green"
    console.log(`
    clown: ${clown}. 
    clownA: ${clownA}
    clownB: ${clownB}`)
}

function funcScopeRestreint(){
    [1,2,3,4,5,6]
    .forEach(()=>{
        let scopeFunc=[];
    })
    // return scopeFunc
}



ref();
funcScopeRestreint()