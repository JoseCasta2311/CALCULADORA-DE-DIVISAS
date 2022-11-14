class EuroExchange{
    static convertToUSDollar(euros){
        return euros * EuroExchange.EURO_DOLAR + "$";
    }

    static convertToGBP(euros){
        return euros * EuroExchange.EURO_GBP+ "₤"; 
    }
}

EuroExchange.EURO_DOLAR = 1.13;
EuroExchange.EURO_GBP = 0.88;