pipeline {
    agent any

    stages {

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

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 8085:80 --name cafeteria grand-cafeteria'
            }
        }
    }
}
