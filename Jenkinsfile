pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '9b7b72ff-6964-4c7d-a390-c889e4289e75'
        NETLIFY_AUTH_TOKEN = credentials('netlify-access-token')
        REACT_APP_VERSION = "1.$BUILD_ID"
    }

    stages {

        stage('Build') {
            agent {
                docker {
                    reuseNode true
                    image 'node:22-alpine'
                }
            }
            steps {
                sh '''
                    ls -la
                    npm ci
                    npm run build
                    ls -la
                '''
            }
        }

        stage('AWS') {
            agent {
                docker {
                    reuseNode true
                    image 'amazon/aws-cli:2.27.22'
                    args '--entrypoint=""'
                }
            }
            environment {
                S3_BUCKET_ADDRESS = 's3://learn-jenkins-87'
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'aws-cli-credential', passwordVariable: 'AWS_SECRET_ACCESS_KEY', usernameVariable: 'AWS_ACCESS_KEY_ID')]) {
                    sh '''
                        echo "GG S3!" > index.html
                        aws s3 sync build $S3_BUCKET_ADDRESS
                    '''
                }
            }
        }
        


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

        // stage('Deploy') {
        //     agent {
        //         docker {
        //             image 'node:22-alpine'
        //             reuseNode true
        //         }
        //     }
        //     steps {
        //         sh '''
        //             whoami
        //             npm install netlify-cli
        //             node_modules/.bin/netlify --version
        //             echo "Deploying to production. Site ID: $NETLIFY_SITE_ID"
        //             node_modules/.bin/netlify status
        //             node_modules/.bin/netlify deploy --dir=build --prod --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN
        //         '''
        //     }
        // }        

        
    }
}
