pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                echo 'Cloning GitHub repository...'
                git branch: 'main',
                    url: 'https://github.com/vinni123jai/grand-cafeteria.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t grand-cafeteria .'
            }
        }

        stage('Stop Old Container') {
            steps {
                echo 'Stopping old container if exists...'
                sh '''
                docker stop cafeteria || true
                docker rm cafeteria || true
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
                sh 'docker run -d -p 8085:80 --name cafeteria grand-cafeteria'
            }
        }
    }
}
