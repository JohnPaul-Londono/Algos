function birthdayCakeCandles(candles) {
    var tallestCandlesCount = 0;
    var tallestCandles = Math.max(...candles)
    for (var i = 0; i < candles.length; i++) {
        if (candles[i] ===tallestCandles) {
            tallestCandlesCount++
        }
    }
    console.log(tallestCandlesCount)
}


birthdayCakeCandles([3, 2, 1, 3])