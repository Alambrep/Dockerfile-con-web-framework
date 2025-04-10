pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    bat '''
                    echo "Building Docker image..."
                    docker build -t sicei-app:%BUILD_ID% .
                    '''
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    bat '''
                    echo "Stopping and removing any existing container..."
                    docker stop sicei-app || exit 0
                    docker rm sicei-app || exit 0

                    echo "Removing old Docker images..."
                    for /f "tokens=*" %i in ('docker images -q sicei-app') do docker rmi -f %i

                    echo "Running Docker container..."
                    docker run -d -p 3000:3000 --name sicei-app sicei-app:%BUILD_ID%
                    '''
                }
            }
        }
    }
}