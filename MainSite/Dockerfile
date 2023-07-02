# Building 
FROM  node:18.16.1-bullseye as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Copying to Nginx
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
EXPOSE 3030
CMD ["nginx", "-g", "daemon off;"]