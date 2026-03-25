pipeline{
    agent any;
    
    stages{
        stage("Code"){
            steps{
                git url: "https://github.com/codebydeep/React-App.git", branch: "main"
            }
        }
        stage("Build"){
            steps{
                sh "docker build -t react-practice ."
            }
        }
        stage("Test"){
            steps{
                echo "Code test bhi ho gaya"
            }
        }
        stage("Push on Docker hub"){
            steps{
                withCredentials([usernamePassword(
                    credentialsId: "credentialsID",
                    usernameVariable: "dockerHubUser",
                    passwordVariable: "dockerHubPass",
                    )]){
                        sh "docker image tag react-practice ${env.dockerHubUser}/react-practice:latest"
                        sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                        sh "docker push ${env.dockerHubUser}/react-practice:latest"
                    }
            }
        }
        stage("Deploy"){
            steps{
                sh "docker compose up -d --build frontend"
            }
        }
    }
}
