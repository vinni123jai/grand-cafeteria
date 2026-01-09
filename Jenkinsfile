pipeline {
    agent any

    environment {
        IMAGE_NAME = "grand-cafeteria"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo 'Cloning source code from GitHub'
                git branch: 'main',
                    url: 'https://github.com/vinni123jai/grand-cafeteria.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker Image'
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running Docker Container'
                bat "docker run -d -p 8081:80 --name cafe_container %IMAGE_NAME%"
            }
        }
    }

    post {
        success {
            echo 'Jenkins + Docker Pipeline Executed Successfully'
        }
        failure {
            echo 'Pipeline Failed'
        }
    }
}
