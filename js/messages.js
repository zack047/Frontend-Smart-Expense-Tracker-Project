function showMessage(type, message, duration = 3000) {
    // Hide all messages first
    document.querySelectorAll('.alert').forEach(alert => {
        alert.style.display = 'none';
    });

    // Show the specific message type
    const alert = document.querySelector(`.alert-${type}`);
    if (alert) {
        alert.textContent = message;
        alert.style.display = 'block';

        // Auto-hide after duration
        setTimeout(() => {
            alert.style.display = 'none';
        }, duration);
    }
}

// Usage examples:
// showMessage('success', 'Operation completed successfully!');
// showMessage('error', 'An error occurred');
// showMessage('warning', 'Please check your input');
// showMessage('info', 'Important information');