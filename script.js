
function calculateScore() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let age = parseInt(document.getElementById('age').value);
    let heartRate = parseInt(document.getElementById('heartRate').value);
    let wbcCount = parseFloat(document.getElementById('wbcCount').value);
    let plateletCount = parseFloat(document.getElementById('plateletCount').value);
    let crp = parseFloat(document.getElementById('crp').value);

    let score = 0;

    if (temperature >= 39) score += 2;
    if (age >= 65) score += 1;
    if (heartRate >= 100) score += 1;
    if (wbcCount >= 12000) score += 1;
    if (plateletCount < 150000) score += 1;
    if (crp >= 40) score += 1;

    let bacteremiaRate;

    switch(score) {
        case 0:
            bacteremiaRate = "2.96%";
            break;
        case 1:
            bacteremiaRate = "4.06%";
            break;
        case 2:
            bacteremiaRate = "8.73%";
            break;
        case 3:
            bacteremiaRate = "13.32%";
            break;
        case 4:
            bacteremiaRate = "20.87%";
            break;
        case 5:
            bacteremiaRate = "28.09%";
            break;
        case 6:
            bacteremiaRate = "35.5%";
            break;
        case 7:
            bacteremiaRate = "47.37%";
            break;
        default:
            bacteremiaRate = "Invalid score";
            break;
    }

    document.getElementById('result').innerText = "Score: " + score + "\nBacteremia Rate: " + bacteremiaRate;
}
