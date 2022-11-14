class GBPExchange{
    static convertToEuro(pounds){
        return pounds * GBPExchange.GBP_EURO + " €";
    }

    static convertToDollar(pounds){
        return pounds * GBPExchange.GBP_DOLLAR + "$";
    }
}

GBPExchange.GBP_EURO = 1.13;
GBPExchange.GBP_DOLLAR = 1.28;