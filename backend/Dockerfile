FROM node:18-alpine

WORKDIR /app

# Copia apenas os arquivos de dependência
COPY package*.json ./
RUN npm install --production

# Copia o código da aplicação
COPY . .

EXPOSE 4000

CMD ["node", "server.js"]
