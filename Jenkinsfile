pipeline{
    agent any
    stages{
        stage("Cypress test suite"){
            steps{
                echo "========executing cypress========"
                git branch:'main', url:'https://github.com/mehradi-github/ref-testing.git'
                sh 'npm i'
                sh 'npm run test'
            }
            
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}