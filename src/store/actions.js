export default {
    async loadCoins(context) {
        const bUrl = 'https://api.binance.com';
        const response = await fetch(bUrl + '/api/v3/ticker/24hr?symbols=' + context.rootGetters.createBinanceSymbolsEndpoint);
        const responseData = await response.json();
        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch requests.');
            throw error;
        }

        const responseArray = [];
        for(const id in responseData)
        responseArray.push({
            id: Number(id),
            name: responseData[id].symbol.substr(0, 3), 
            fullName: context.rootGetters.coins[id].fullName,
            img: `/src/assets/img/${responseData[id].symbol.substr(0, 3)}.webp`,
            bidPrice: parseFloat(responseData[id].bidPrice),
            priceChangePercent: responseData[id].priceChangePercent,
            weightedAvgPrice: parseFloat(responseData[id].weightedAvgPrice),
        })

        context.commit('setCoins', responseArray);
    }
}