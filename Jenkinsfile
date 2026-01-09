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
                bat 'echo Building the project'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'echo Tests executed successfully'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                bat 'echo Application deployed'
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
