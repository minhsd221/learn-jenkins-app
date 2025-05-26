pipeline {
    agent any

    stages {
        
        // stage('Build') {
        //     agent {
        //         docker {
        //             image 'node:18-alpine'
        //             reuseNode true
        //         }
        //     }
        //     steps {
        //         sh '''
        //             ls -la
        //             node --version
        //             npm --version
        //             npm ci
        //             npm run build
        //             ls -la
        //         '''
        //     }
        // }
        

        // stage('Do some shit') {
        //     parallel {
        //         stage('do sth with node - npm') {
        //             agent {
        //                 docker {
        //                     image 'node:18-alpine'
        //                     reuseNode true
        //                 }
        //             }

        //             steps {
        //                 sh '''
        //                     node --version
        //                     npm --version 
        //                 '''
        //             }
        //             post {
        //                 always {
        //                     sh 'echo "823"'
        //                 }
        //             }
        //         }

        //         stage('do sth with python - pip') {
        //             agent {
        //                 docker {
        //                     image 'python:3.11.5-alpine'
        //                     reuseNode true
        //                 }
        //             }

        //             steps {
        //                 sh '''
        //                     python --version
        //                     pip --version
        //                 '''
        //             }

        //             post {
        //                 always {
        //                     sh 'pip -h'
        //                 }
        //             }
        //         }
        //     }
        // }

        stage('Deploy') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm install netlify-cli@20.1.1
                    node_modules/.bin/netlify --version
                '''
            }
        }        

        
    }
}
