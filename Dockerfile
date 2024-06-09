
# FROM --platform=linux/amd64 node:lts-alpine as build

# WORKDIR /app

# COPY package.json ./

# RUN npm  install 

# COPY . .

# RUN npm run build

# RUN chown -R node:node /app

# USER node

# ENV DANGEROUSLY_DISABLE_HOST_CHECK=true

# FROM nginx:alpine

# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 3000

FROM --platform=linux/amd64 node:lts-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]







