FROM mysql:5.7.29

ENV MYSQL_ROOT_PASSWORD whee  
ENV MYSQL_DATABASE docker  
ENV MYSQL_USER users-service  
ENV MYSQL_PASSWORD blah

VOLUME ./.mysql-data/db

EXPOSE 3306

# ADD setup.sql /docker-entrypoint-initdb.d