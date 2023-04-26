function myfn(categoery) {
    console.log(categoery.name);
    if ("runningSpeed" in categoery) {
        console.log(categoery.runningSpeed);
    }
}
myfn({ name: "lion", runningSpeed: 100 });
