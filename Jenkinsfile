pipeline {
    agent any

   
    stages {
        stage('Pull Code') {
            steps {
                // Get some code from a GitHub repository

                // Run Maven on a Unix agent.
                sh "echo 'code Fetched' "

                // To run Maven on a Windows agent, use
                // bat "mvn -Dmaven.test.failure.ignore=true clean package"
            }
        }
        
         stage('Install libraries') {
            steps {
                // Get some code from a GitHub repository
              

                // Run Maven on a Unix agent.
                sh "npm install" 

                // To run Maven on a Windows agent, use
                // bat "mvn -Dmaven.test.failure.ignore=true clean package"
            }
        }

          stage('Run Service') {
            steps {
                // Get some code from a GitHub repository
              

                // Run Maven on a Unix agent.
                sh "kill $(lsof -t -i:4000)" 
                sh "nohup node index.js &"
               
                // To run Maven on a Windows agent, use
                // bat "mvn -Dmaven.test.failure.ignore=true clean package"
            }
        }
    }
}