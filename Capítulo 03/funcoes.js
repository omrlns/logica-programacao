function primeira() {
    console.log("#1 - ANTES");
    segunda();
    console.log("#1 - DEPOIS");
}

function segunda() {
    console.log("#2 - ANTES");
    terceira();
    console.log("#2 - DEPOIS");
}

function terceira() {
    console.log("3");
}

primeira()