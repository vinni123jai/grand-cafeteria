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
                sh 'docker build -t grand-cafeteria .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop cafeteria || true
                docker rm cafeteria || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                docker run -d \
                --name cafeteria \
                -p 8085:80 \
                grand-cafeteria
                '''
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD Pipeline Completed Successfully'
        }
        failure {
            echo '❌ CI/CD Pipeline Failed'
        }
    }
}
