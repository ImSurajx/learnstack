let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");
let settings = {
    "async" : true,
    "scrossDomain" : true,
    "url": "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin%2Cethereum%2Cdogecoin",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.bitcoin.usd;
});