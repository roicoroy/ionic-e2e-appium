pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build Android') {
            steps {
                sh '''
                    cd $HOME/.jenkins/workspace/ionice-2e npm install
                    cd $HOME/.jenkins/workspace/ionice-2e npx ionic build
                    cd $HOME/.jenkins/workspace/ionice-2e npx cap add android
                    cd $HOME/.jenkins/workspace/ionice-2e npx cap add sync
                    cd $HOME/.jenkins/workspace/ionice-2e npm run test
                    cd $HOME/.jenkins/workspace/ionice-2e npm run cypress:run
                '''
            }
        }
    }
}
