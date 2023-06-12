
class Notification {
    #notifications;

    constructor(className) {
        this.className = className
        this.#initializeNotifications();
    }

    #initializeNotifications() {
        this.#notifications = document.querySelectorAll(`.${this.className}`);
    }

    getUnreadNotificationCount() {
        this.#initializeNotifications();
        return this.#notifications.length;
    }

    clearAllNotifications() {
        [...this.#notifications].forEach(notification => this.#hideNotification(notification));
    }

    clearNotification(notification) {
        this.#hideNotification(notification);
    }

    #hideNotification(notification) {
        notification.classList.remove(this.className);
    }
}

export default Notification;


