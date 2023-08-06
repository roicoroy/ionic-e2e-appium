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
                    cd /Users/ricardobento/.jenkins/workspace/ionice-2e npx ionic build
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
