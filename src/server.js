const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8000 });

let clients = [];

server.on("connection", (ws) => {
  console.log("Novo jogador conectado!");
  clients.push(ws);

  // Enviar uma mensagem para o cliente quando conectado
  ws.send(JSON.stringify({ type: "welcome", message: "Bem-vindo ao jogo!" }));

  // Lidar com mensagens recebidas
  ws.on("message", (message) => {
    // Reencaminhar a mensagem para todos os jogadores
    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  // Remover o cliente desconectado
  ws.on("close", () => {
    clients = clients.filter((client) => client !== ws);
    console.log("Jogador desconectado.");
  });
});

console.log("Servidor WebSocket rodando na porta 8000.");
