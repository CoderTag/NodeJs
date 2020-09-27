let func1 = ()=>{
    console.log("hi");
}

let func2 = (someFunc)=>{
    someFunc();
}

func2(func1);