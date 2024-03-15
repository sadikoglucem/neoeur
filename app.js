var i = 1;
var bet = 0.6; // 1 = 1$
var ses = '2a306e84-2112-436d-b49a-3e6bab1c4ede';

deal();
function deal() {
setTimeout(function() {
    i++;
fetch("https://rgs-cu2.hacksawgaming.com/api/play/bet", {
  "headers": {
    "accept": "*/*",
    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "access-control-allow-origin": "*",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://static-live.hacksawgaming.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"seq\":"+i+",\"sessionUuid\":\""+ses+"\",\"bets\":[{\"betAmount\":\""+bet*100+"\",\"customData\":{\"betAmount\":\""+bet*100+"\",\"playerBet\":\"0\",\"bankerBet\":\""+bet*100+"\",\"tieBet\":\"0\"}}],\"offerId\":null,\"promotionId\":null,\"autoplay\":false}",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
}).then(r => r.json()).then(r => {
    if(r.round.status === 'wfwpc') {
        i++;
fetch("https://rgs-cu2.hacksawgaming.com/api/play/bet", {
  "headers": {
    "accept": "*/*",
    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "access-control-allow-origin": "*",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://static-live.hacksawgaming.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"seq\":"+i+",\"sessionUuid\":\""+ses+"\",\"roundId\":\""+r.round.roundId+"\",\"continueInstructions\":{\"action\":\"win_presentation_complete\"}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
}).then(p => deal());
    } else {

deal();
    };
});
}, 30);
}
