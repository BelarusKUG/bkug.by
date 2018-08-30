# Container with application
FROM openjdk:10-jre-slim
COPY /webapp/build/install/bkug /bkug
ENTRYPOINT /bkug/bin/bkug
