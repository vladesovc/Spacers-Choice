class Circle {
    constructor() {
        this.color = "green";
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

module.exports = Circle;

class Triangle {
    constructor() {
        this.color = "bisque";
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

module.exports = Triangle;

class Square {
    constructor() {
        this.color = "dodgerblue";
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

module.exports = Square;