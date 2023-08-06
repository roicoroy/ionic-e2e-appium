pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Ionic install and build') {
            steps {
                sh '''
                    cd $HOME/.jenkins/workspace/ionice-2e npm install
                '''
            }
        }
    }
}
