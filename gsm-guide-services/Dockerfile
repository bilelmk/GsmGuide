FROM openjdk:8-jdk-alpine
EXPOSE 8080
ARG JAR_FILE=target/*.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT [ "java","-Dspring.profiles.active=docker" ,"-jar","/app.jar"]
