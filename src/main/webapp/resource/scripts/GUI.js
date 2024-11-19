class GUI {
    constructor() {
        this.socket = null;
        this.socketEndpoint = `ws://${document.location.host}${document.location.pathname}wordle-duel`;
        this.enterBtn = document.querySelector('#enter-btn');
    }

    connect() {
        this.socket = new WebSocket(this.socketEndpoint);
        this.socket.onopen = () => {
            this.enterBtn.innerHTML = 'Sair';
            this.enterBtn.onclick = this.disconnect.bind(this);
        };

        this.socket.onclose = () => {
            this.enterBtn.innerHTML = 'Entrar';
            this.enterBtn.onclick = this.connect.bind(this);
        }
    }

    disconnect() {
        this.socket?.close();
    }

    init() {
        this.enterBtn.onclick = this.connect.bind(this);
    }
}

const gui = new GUI();
gui.init();
