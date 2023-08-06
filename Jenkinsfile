pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') {
            steps {
                sh '''
                    cd /Users/ricardobento/.jenkins/workspace/ionice-2e npm install
                    npx ionic build
                    npx cap add android
                    npx cap sync
                '''
            }
        }
        stage('Test') {
            steps {
                sh 'echo $HOME'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo $LOGNAME'
            }
        }
    }
}
