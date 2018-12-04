import Eos from 'eosjs'
import Scatter from 'scatterjs-core'
import ScatterEOS from 'scatterjs-plugin-eosjs'

const { Blockchains } = Scatter

let _account = {
    name: null,
    authority: null
}
//main net
export const MAIN_NETWORK = {
    blockchain: Blockchains.EOS,
    protocol: 'https',
    host: 'nodes.get-scatter.com',
    port: 443,
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
}

// testnet
export const TEST_NETWORK = {
    blockchain: Blockchains.EOS,
    protocol: 'http',
    host: 'jungle.cryptolions.io',
    port: 18888,
    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca'
}

const network ={
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    blockchain: 'eos',
}

class ApiService {
    static async LoginScatter() {
        console.log('tam_ login scatter');

        Scatter.plugins( new ScatterEOS() )
        const connected = await Scatter.scatter.connect(Scatter.Blockchains.EOS)

        if (!connected) {
            console.log('tam_ SCATTER NOT Connect')
            alert("Scatter NOT find")
            return
        }
        const win = window
        win.ScatterJS = win.ScatterEOS = win.scatter = undefined

        //If it connected to scatter, forget its Identify
        // if(Scatter.scatter.identity){
        //     Scatter.scatter.forgetIdentity()
        // }

        //connect to scatter
        Scatter.scatter.getIdentity({accounts: [MAIN_NETWORK]});
        console.log('tam_ in scattter', ApiService.hasIdentity());
    }

    static hasIdentity() { 
        return Scatter.scatter.identity;
    }




}

export default ApiService;