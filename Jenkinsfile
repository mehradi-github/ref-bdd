pipeline{
    agent any   
    stages{
        stage("docker compose"){
            steps{
                echo "========executing compose========"
                git branch:'main', url:'https://github.com/mehradi-github/ref-bdd.git'
                sh 'docker compose up'
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