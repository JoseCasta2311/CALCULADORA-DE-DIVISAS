let addScreen = (n) => {
    document.getElementById("screen").value += n;
}

let clearScreen = () => {
    document.getElementById("screen").value = "";
}

let calculate = () => {
    let amount = parseInt(document.getElementById("screen").value);

    let res = "Error";
    if (isNaN(amount) == false){
        let selectedExchange = document.getElementById("rate_exchange").value;

        switch(selectedExchange){
            case "1":
                res = EuroExchange.convertToUSDollar(amount);
                break;
            case "2":
                res = EuroExchange.convertToGBP(amount);
                break;
            case "3":
                res = DollarExchange.convertToEuro(amount);
                break;
            case "4":
                res = DollarExchange.convertToGBP(amount);
                break;
            case "5":
                res = GBPExchange.convertToEuro(amount);
                break;
            case "6":
                res = GBPExchange.convertToDollar(amount);
                break;
            
        }    
    }

    document.getElementById("screen").value = res;
}

