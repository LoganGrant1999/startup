const GameEvent = {
  NewVote: 'new-vote',
};

class PredictionSocket {
  constructor() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const port = window.location.port;
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    this.socket.onopen = () => console.log('WebSocket connected');
    this.socket.onclose = () => console.log('WebSocket disconnected');
    this.socket.onmessage = (event) => this.onMessage(event); 

    this.handlers = [];
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  onMessage(event) {
    const message = JSON.parse(event.data);
    this.handlers.forEach((handler) => handler(message));
  }

  sendMessage(type, payload) {
    this.socket.send(JSON.stringify({ type, payload }));
  }
}

const predictionSocketInstance = new PredictionSocket();
export { predictionSocketInstance as predictionSocket, GameEvent };
