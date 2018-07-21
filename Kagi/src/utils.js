
export function getData() {
    const promiseMSFT = fetch('/stocks')
        .then(res => {
            return res.text()
        })
        .then(str => JSON.parse(str,
            function(key, value) {
                switch (key) {
                    case "TimeStamp":
                        this.date = new Date(value);
                        return value
                    case "HighValue":
                        this.high = value;
                        return;
                    case "LowValue":
                        this.low = value;
                        return;
                    case "Open":
                        this.open = value;
                        return;
                    case "Close":
                        this.close = value;
                        return;
                    case "Volume":
                        this.volume = value;
                        return;
                    default:
                        return value
                }
            }))
        .then(stocks => stocks.Result)
        .catch(err => {
            console.log(err)
        })
    return promiseMSFT;
}