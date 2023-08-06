pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build Android') {
            steps {
                sh '''
                    cd /Users/ricardobento/.jenkins/workspace/ionice-2e npm install
                    cd /Users/ricardobento/.jenkins/workspace/ionice-2e npx ionic build
                    cd /Users/ricardobento/.jenkins/workspace/ionice-2e npx cap add android
                    cd /Users/ricardobento/.jenkins/workspace/ionice-2e npx cap add sync
                '''
            }
        }
    }
}
