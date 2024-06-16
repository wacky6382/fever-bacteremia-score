
function calculateScore() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let age = parseInt(document.getElementById('age').value);
    let heartRate = parseInt(document.getElementById('heartRate').value);
    let wbcCount = parseFloat(document.getElementById('wbcCount').value);
    let plateletCount = parseFloat(document.getElementById('plateletCount').value);
    let crp = parseFloat(document.getElementById('crp').value);

    let score = 0;

    if (temperature > 39) score += 2;
    if (age > 65) score += 1;
    if (heartRate > 100) score += 1;
    if (wbcCount > 12000) score += 1;
    if (plateletCount < 150000) score += 1;
    if (crp > 40) score += 1;

    document.getElementById('result').innerText = "Score: " + score;
}
