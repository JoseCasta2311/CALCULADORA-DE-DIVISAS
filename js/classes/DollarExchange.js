class DollarExchange{
    static convertToEuro(dollars){
        return dollars * DollarExchange.DOLLAR_EURO + "€";
    }

    static convertToGBP(dollars){
        return dollars * DollarExchange.DOLLAR_GBP + "₤";
    }
}

DollarExchange.DOLLAR_EURO = 0.87;
DollarExchange.DOLLAR_GBP = 0.77;