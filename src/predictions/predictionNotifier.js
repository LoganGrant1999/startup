const GameEvent = {
    NewVote: 'new-vote',
  };
  
  class predictionSocket {
    constructor() {
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      const port = window.location.port;
      this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
  
      this.socket.onopen = () => console.log('WebSocket connected');
      this.socket.onclose = () => console.log('WebSocket disconnected');
      this.handlers = [];
    }
  
    addHandler(handler) {
      this.handlers.push(handler);
    }
  

  