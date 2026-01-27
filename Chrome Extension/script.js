function updateDashboard() {
    const now = new Date();
    
    // --- Time setup ---
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    // Option for seconds if you want them back:
    // const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // --- Situational Greeting Logic (Acc to situation behave) ---
    const greetingElement = document.getElementById('greeting');
    let greetingText = "";

    // 5 AM to 11:59 AM
    if (hours >= 5 && hours < 12) {
        greetingText = "Good Morning";
    } 
    // 12 PM to 4:59 PM
    else if (hours >= 12 && hours < 17) {
        greetingText = "Good Afternoon";
    } 
    // 5 PM to 7:59 PM
    else if (hours >= 17 && hours < 20) {
        greetingText = "Good Evening";
    } 
    // 8 PM onwards (Raat hai!)
    else {
        greetingText = "Hey, It's Night";
    }
    greetingElement.innerText = greetingText;

    // --- Clock Update ---
    // Using 24H format works better for modern UI, but you can switch to 12h.
    document.getElementById('clock').innerText = `${hours}:${minutes}`;

    // --- Date Update ---
    const options = { weekday: 'short', month: 'long', day: 'numeric' };
    document.getElementById('date').innerText = now.toLocaleDateString('en-US', options);
}

// Update every second (to keep time accurate)
setInterval(updateDashboard, 1000);
updateDashboard(); // Run immediately on load