pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t sicei-app:${BUILD_ID} .'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker stop sicei-app || true'
                    sh 'docker rm sicei-app || true'

                    sh 'docker images -q sicei-app | xargs docker rmi -f || true'

                    sh 'docker run -d -p 3000:3000 --name sicei-app sicei-app:${BUILD_ID}'
                }
            }
        }
    }
}