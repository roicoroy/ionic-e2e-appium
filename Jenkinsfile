pipeline {
    agent {
            label {
            label ''
            }
    }

    stages {
        stage('NPM Install') {
            steps {
                script {
                    nodejs(nodeJSInstallationName: 'NodeJS v16.20.0') {
                        labelledShell label: 'NPM Install', script: '''
                                    echo "NPM Install"
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
