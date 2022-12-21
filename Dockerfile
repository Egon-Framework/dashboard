FROM nginx:latest

# Build the application
COPY dashboard dashboard
RUN apt update && apt install -y npm && npm install --prefix dashboard/assets/vendored/

FROM nginx:latest

# Point the nginx proxy at the dashboard index page
COPY --from=0 dashboard /www
RUN echo "server { root /www; }" > /etc/nginx/conf.d/default.conf
