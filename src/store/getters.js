export default {
    coins(state) {
        return state.coins;
    },
    hasCoins(state) {
        return state.coins && state.coins.length > 0;
    },
    isLoggedIn(state) {
        return state.isLoggedIn;
    },
    createBinanceSymbolsEndpoint(state) {
        const result = [];
        const stableCoinName = 'USDT';
        for (const coin in state.coins) {
          result.push('"' + state.coins[coin].name + stableCoinName + '"');
        }
        const finalResults = '[' + result.toString() + ']';
        return finalResults;
    },
    // shouldUpdate(state) {
    //     const lastFetch = state.lastFetch;
    //     if (!lastFetch) {
    //       return true;
    //     }
    //     const currentTimeStamp = new Date().getTime();
    //     return (currentTimeStamp - lastFetch) / 1000 > 60;
    //   }
}