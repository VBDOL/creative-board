# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia apenas o que é necessário para instalar e buildar
COPY package*.json ./
RUN npm install

# Copia o resto do código
COPY . .

# Gera o build da aplicação
RUN npm run build

# Etapa 2: Imagem final com Nginx
FROM nginx:stable-alpine

# Remove arquivos padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o build do React
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia config customizado (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
