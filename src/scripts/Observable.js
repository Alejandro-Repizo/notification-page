class Observable {

    constructor() {
        this.observers = []
    }

    subscribe(func) {
        this.observers.push(func)
    }

    notify() {
        this.observers.forEach(observer => observer())
    }
}

export default new Observable()