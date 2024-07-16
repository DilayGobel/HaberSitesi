// API Key, bu kısmı kendi API anahtarınızla değiştirmeniz gerekiyor
const apiKey = '103ff69e4c6efaccf13c6bb9';

// Döviz kurları için API URL
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

// Döviz kurları ve ülke adları
let currencies = {};

// HTML elementlerini referans al
const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from");
const toCurrencySelect = document.getElementById("to");
const resultText = document.getElementById("result");

// Döviz kurlarını API'den al ve select listelerini oluştur
async function fetchCurrencies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.result === "success") {
            currencies = data.conversion_rates;
            
            // Döviz kurları için seçenekleri oluştur
            for (let currency in currencies) {
                const option1 = document.createElement("option");
                option1.value = currency;
                option1.textContent = `${currency} - ${currency}`;

                const option2 = document.createElement("option");
                option2.value = currency;
                option2.textContent = `${currency} - ${currency}`;

                fromCurrencySelect.appendChild(option1);
                toCurrencySelect.appendChild(option2);
            }
        } else {
            throw new Error("Döviz kurları alınamadı.");
        }
    } catch (error) {
        console.error("Hata:", error.message);
        resultText.textContent = "Döviz kurları yüklenirken bir hata oluştu.";
    }
}

// Çeviri işlemini gerçekleştir
function convert() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    const exchangeRate = currencies[toCurrency] / currencies[fromCurrency];
    const result = amount * exchangeRate;

    resultText.textContent = `${amount.toFixed(2)} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}

// Sayfa yüklendiğinde döviz kurlarını al
fetchCurrencies();

async function fetchExchangeRates() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/TRY');
    const data = await response.json();
    const rates = data.rates;

    // Gösterilecek dövizlerin uzun isimleri
    const selectedCurrencies = {
        'USD': 'Amerikan Doları',
        'EUR': 'Euro',
        'GBP': 'İngiliz Sterlini',
        'JPY': 'Japon Yeni',
        'AUD': 'Avustralya Doları',
        'CHF': 'İsviçre Frangı'
    };
    const tbody = document.getElementById('exchange-rates');
    tbody.innerHTML = '';

    for (const [currency, name] of Object.entries(selectedCurrencies)) {
        const row = document.createElement('tr');
        const rate = 1 / rates[currency]; // 1 birim döviz için TRY hesaplama
        row.innerHTML = `<td>${name}</td><td>${rate ? rate.toFixed(2) : 'Hata'}</td>`;
        tbody.appendChild(row);
    }
}

fetchExchangeRates();
setInterval(fetchExchangeRates, 60000); // 1 dakikada bir güncelle


fetchExchangeRates();
setInterval(fetchExchangeRates, 60000); // 1 dakikada bir güncelle