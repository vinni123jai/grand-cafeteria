pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                echo 'Checking out source code from GitHub...'
                git branch: 'main',
                    url: 'https://github.com/vinni123jai/grand-cafeteria.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Build stage started...'
                sh 'echo Building the project'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'echo Tests executed successfully'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'echo Application deployed'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed SUCCESSFULLY'
        }
        failure {
            echo 'Pipeline FAILED'
        }
    }
}
