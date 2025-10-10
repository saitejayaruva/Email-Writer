# Use OpenJDK 17 as base image
FROM openjdk:17-jdk-slim

# Set working directory inside container
WORKDIR /app

# Copy Maven wrapper and project files
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# Make Maven wrapper executable
RUN chmod +x mvnw

# Build the project (skip tests to speed up)
RUN ./mvnw clean package -DskipTests

# Expose port 8080 for the Spring Boot app
EXPOSE 8080

# Run the Spring Boot JAR
CMD ["java", "-jar", "target/email-writer-sb-0.0.1-SNAPSHOT.jar"]
