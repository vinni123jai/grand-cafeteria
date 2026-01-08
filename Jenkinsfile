pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/vinni123jai/grand-cafeteria.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t grand-cafeteria .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat '''
                docker stop cafeteria || exit 0
                docker rm cafeteria || exit 0
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 8085:80 --name cafeteria grand-cafeteria'
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully'
        }
        failure {
            echo 'CI/CD pipeline failed'
        }
    }
}
