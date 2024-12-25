function checkType(value) {
    const type = typeof value;
    console.log(`The type is: ${type}`);
}

checkType({});
checkType(true);
checkType(42);
checkType("Hello, world!");
checkType(undefined);
