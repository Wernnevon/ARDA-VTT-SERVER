# ARDA VTT Server

Servidor WebSocket minimalista que dá suporte ao multiplayer do **ARDA**, uma mesa virtual de RPG (VTT) que desenvolvo como projeto pessoal.

Ele faz *relay*: toda mensagem recebida de um jogador é reenviada para os demais conectados. Não guarda estado nem valida o conteúdo.

## Stack

Node.js · [`ws`](https://github.com/websockets/ws)

## Como rodar

```bash
npm install
npm run dev   # node --watch, porta 8000
```

## Protocolo

- Ao conectar, o cliente recebe `{"type":"welcome","message":"Bem-vindo ao jogo!"}`.
- Qualquer mensagem enviada é retransmitida (como texto) a todos os outros clientes conectados, menos ao remetente.

## Limitações

Prova de conceito: sem salas, autenticação, persistência ou testes.
