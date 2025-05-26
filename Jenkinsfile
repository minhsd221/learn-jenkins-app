pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '9b7b72ff-6964-4c7d-a390-c889e4289e75'
        NETLIFY_AUTH_TOKEN = credentials('netlify-access-token')
    }

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
                    whoami
                    npm install netlify-cli@20.1.1
                    node_modules/.bin/netlify --version
                    echo "Deploying to production. Site ID: $NETLIFY_SITE_ID"
                    node_modules/.bin/netlify status
                    node_modules/.bin/netlify deploy --dir=build --prod
                '''
            }
        }        

        
    }
}
