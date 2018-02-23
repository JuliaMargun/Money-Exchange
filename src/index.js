module.exports = function makeExchange(currency) {
	needdedMoney = {}
    
    if (currency <= 0) {
    	return needdedMoney;

    } else if (currency > 10000) {
    	needdedMoney.error = "You are rich, my friend! We don't have so much coins for exchange";
    	return needdedMoney;
    	
    } else {
    	if (currency >= 50) {
    		needdedMoney.H = currency / 50 | 0;
    		currency -= needdedMoney.H * 50;
    	}

    	if (currency >= 25) {
    		needdedMoney.Q = currency / 25 | 0;
    		currency -= needdedMoney.Q * 25;
    	}

    	if (currency >= 10) {
    		needdedMoney.D = currency / 10 | 0;
    		currency -= needdedMoney.D * 10;
    	}

    	if (currency >= 5) {
    		needdedMoney.N = currency / 5 | 0;
    		currency -= needdedMoney.N * 5;
    	}

    	if (currency > 0) {
    		needdedMoney.P = currency;
    	}

    	return needdedMoney;
    }
}
