pipeline {
    agent {
            label {
            label ''
            }
    }

    tools {
        jdk 'jdk17'
    }

    options { buildDiscarder(logRotator(daysToKeepStr: '15')) }

    stages {
        stage('NPM Install') {
            steps {
                script {
                    nodejs(nodeJSInstallationName: 'NodeJS v16.20.0') {
                        labelledShell label: 'NPM Install', script: '''
                                    echo "NPM Install"
                                    /opt/nodejs-v16.20.0/bin/npm install
                                    '''
                    }
                }
            }
        }
        stage('Unit Test (with Coverage Report)') {
            steps {
                script {
                        nodejs(nodeJSInstallationName: 'NodeJS v16.20.0') {
                        labelledShell label: 'Unit Test (with Coverage Report)', script: '''
                                        echo "Unit Test (with Coverage Report)"
                                        /opt/nodejs-v16.20.0/bin/npm run test-clear-cache
                                        /opt/nodejs-v16.20.0/bin/npm run test-coverage
                                        '''
                        }
                }
            }
        }
        stage('Functional Test') {
            steps {
                script {
                        nodejs(nodeJSInstallationName: 'NodeJS v16.20.0') {
                        labelledShell label: 'Functional Test', script: '''
                                        echo "Functional Test (ToDo - Appium Integration)"
                                        '''
                        }
                }
            }
        }
        stage('NPM Build - WebApp') {
            steps {
                script {
                    nodejs(nodeJSInstallationName: 'NodeJS v16.20.0') {
                        labelledShell label: 'NPM Build - WebApp', script: '''
                                        echo "NPM Build - WebApp"
                                        '''
                    }
                }
            }
        }
        stage('Deploy - WebApp') {
            steps {
                script {
                        nodejs(nodeJSInstallationName: 'NodeJS v16.20.0') {
                        labelledShell label: 'Deploy - WebApp', script: '''
                                        echo "Deploy - WebApp (ToDo - Deploy to Infrastructure using Ansible Inventory)"
                                        '''
                        }
                }
            }
        }
    }
}
