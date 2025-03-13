# Imagen oficial de Node.js
FROM node:14

# Se establece el directorio de trabajo
WORKDIR /usr/src/app

# Se copia el package.json
COPY package*.json ./

# Se instalan las dependencias
RUN npm install

# Se copia el resto de la aplicación
COPY . .

# Se expone el puerto de la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]