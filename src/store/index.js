import {createStore} from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

const store = createStore({
    state() {
        return {
            lastFetch: null,
            coins: [
                {
                  id: '0',
                  name: 'BTC',
                  fullName: 'Bitcon',
                  img: 'src/assets/img/btc.webp'
                },
                {
                  id: '1',
                  name: 'ETH',
                  fullName: 'Ethereum',
                  img: 'src/assets/img/eth.webp'
                },
                {
                  id: '2',
                  name: 'BNB',
                  img: 'src/assets/img/bnb.webp'
                },
                {
                  id: '3',
                  name: 'XRP',
                  img: 'src/assets/img/xrp.webp'
                },
                {
                  id: '4',
                  name: 'SOL',
                  fullName: 'Solana',
                  img: 'src/assets/img/sol.webp'
                },
                {
                  id: '5',
                  name: 'DOT',
                  fullName: 'Polkadot',
                  img: 'src/assets/img/dot.webp'
                },
              ],
              isLoggedIn: false
            }
    },
    mutations,
    actions,
    getters
})

export default store;