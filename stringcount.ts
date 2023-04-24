function stringCount(){
    const str: string = "vikas";
  const array: string[] = str.split('');
    
    let count:number=0;
    for(let i:number =0; i<str.length; i++){
  
      count++;
    }
    console.log(count);
  }
  stringCount();