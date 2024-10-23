const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Estamos executando uma calculadora web');
});

app.get('/teste', (req, res) => {
  res.send('Calculadora');
});

app.get('/tabuada', (req, res) => {
  const tabuada = parseInt(req.query.tabuada) || 1; 
  const sequencia = parseInt(req.query.sequencia) || 10; 

  let htmlResponse = `
    <html>
      <head>
        <title>Tabuada do ${tabuada}</title>
        <style>
         body { 
            font-family: Arial, sans-serif; 
            background-color: #f4f4f4;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .container {
            text-align: center;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 { 
            color: #4CAF50; 
            font-size: 24px;
            margin-bottom: 20px;
          }
          table { 
            border-collapse: collapse; 
            width: 100%; 
            margin: 0 auto;
          }
          th, td { 
            padding: 12px; 
            border: 1px solid #ddd; 
            text-align: center;
          }
          th { 
            background-color: #4CAF50; 
            color: white; 
          }
          tr:nth-child(even) { 
            background-color: #f2f2f2; 
          }
        </style>
      </head>
      <body>
        <h1>Tabuada do ${tabuada} (até ${sequencia})</h1>
        <table>
          <thead>
            <tr>
              <th>Multiplicação</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
  `;

  for (let i = 1; i <= sequencia; i++) {
    htmlResponse += `
      <tr>
        <td>${tabuada} x ${i}</td>
        <td>${tabuada * i}</td>
      </tr>
    `;
  }


  htmlResponse += `
          </tbody>
        </table>
      </body>
    </html>
  `;

  res.send(htmlResponse);
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
