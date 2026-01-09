pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                echo 'Checking out source code'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image'
                bat 'docker build -t grand-cafeteria .'
            }
        }

        stage('Remove Old Container') {
            steps {
                echo 'Removing old container if exists'
                bat '''
                docker stop cafeteria || exit 0
                docker rm cafeteria || exit 0
                '''
            }
        }

        stage('Run New Container') {
            steps {
                echo 'Running new container'
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
