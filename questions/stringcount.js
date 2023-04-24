function stringCount() {
    // const str:string[]=["vikas"];
    var str = "vikas";
    var array = str.split('');
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        count++;
    }
    console.log(count);
}
stringCount();
