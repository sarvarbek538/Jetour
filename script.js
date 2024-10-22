    // Telegram bot token va chat ID
    const botToken = '8013796814:AAFEjsmIQ5GHE4XEslwQsewB-Nx-R8ybLaI'; // O'zingizning bot tokeningiz
    const chatId = '6206221012'; // Olingan chat ID

    function sendTelegramMessage(message) {
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const data = {
            chat_id: chatId,
            text: message,
        };

        fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Xabar yuborildi:', data);
            })
            .catch(error => {
                console.error('Xatolik:', error);
            });
    }

    // Form yuborilganda Telegramga xabar yuborish
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const telegramMessage = `Yangi xabar:\nIsm: ${name}\nEmail: ${email}\nXabar: ${message}`;
        sendTelegramMessage(telegramMessage);

        alert('Xabaringiz yuborildi!');
        this.reset();
    });