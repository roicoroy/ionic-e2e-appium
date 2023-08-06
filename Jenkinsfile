pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    tools {
        maven 'apache-maven-3.0.1'
    }
    stages {
         stage('MVN') {
            steps {
                sh 'mvn --version'
            }
        }
        stage('Ionic install and build') {
            steps {
                sh '''
                    cd $HOME/.jenkins/workspace/ionice-2e npm install
                    ionic build
                '''
            }
        }
        // stage('Android') {
        //     steps {
        //         sh '''
        //             cd $HOME/.jenkins/workspace/ionice-2e npx cap add android
        //             cd $HOME/.jenkins/workspace/ionice-2e npx cap add sync
        //         '''
        //     }
        // }
        // stage('iOS') {
        //     steps {
        //         sh '''
        //             cd $HOME/.jenkins/workspace/ionice-2e npx cap add ios
        //             cd $HOME/.jenkins/workspace/ionice-2e npx cap add sync
        //         '''
        //     }
        // }
        // stage('Tests') {
        //     steps {
        //         sh '''
        //             cd $HOME/.jenkins/workspace/ionice-2e npm run test
        //             cd $HOME/.jenkins/workspace/ionice-2e npm run cypress:run
        //         '''
        //     }
        // }
    }
}
