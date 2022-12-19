FROM nginx:latest

# The application source code
COPY dashboard /www

# Point the nginx proxy at the dashboard index page
RUN echo "server { root /www; }" > /etc/nginx/conf.d/default.conf
