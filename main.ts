import yargs from "yargs";
import axios, { AxiosPromise } from "axios";

import { hideBin } from "yargs/helpers";

(async () => {
    const argv: any = yargs(hideBin(process.argv)).argv;
    const { word } = argv
    
    getResult(word).then((res) => {
        const result = res.data.data[0]
        console.log("\x1b[43m\x1b[30m",`${result['k']}:\n ${result['v']}`)
    })

    function getResult(input: string):AxiosPromise {
        return axios({
            method: "post",
            url: `https://fanyi.baidu.com/sug`,
            data: {
                kw: input
            }
        });
    }
})()
