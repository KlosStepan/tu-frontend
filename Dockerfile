FROM node as build
WORKDIR /app
COPY package.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged
COPY --chown=nginx:nginx --from=build /app/build /usr/share/nginx/html