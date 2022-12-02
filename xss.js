fetch("https://bitzlato.bz/api2/p2p/dsa/", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru-RU,ru;q=0.9",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://bitzlato.bz/p2p/adverts/create",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"type\":\"selling\",\"cryptocurrency\":\"MDT\",\"paymethod\":1415,\"minAmount\":\"1000000\",\"maxAmount\":\"10000000\",\"terms\":\"Привет битзлато. Как там фиксы?\\nНе покупать. Тестовый лот.\",\"details\":null,\"maxLimitForNewTrader\":null,\"minPartnerTradesAmount\":null,\"verifiedOnly\":false,\"liquidityLimit\":false,\"ratePercent\":\"120\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});