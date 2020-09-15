pipeline {
  agent any
  stages {
    stage('Code Review') {
       parallel {
                stage('NPM Install') {
                    steps {
                        sh 'npm install'
                    }
                }
                stage('Static Code Review Checks') {
                    steps {
                        sh 'npm run lint'
                    }
                }
            }
	}
    stage('Unit Test Stage'){
        steps{
                sh 'karma start karma-ci.conf.js'
        }
    }
    stage('DEV Deployemnt Stage'){
        steps{
          sh 'grunt --username='+env.username+' --password="'+env.password+'" --server="http://in-blr-1709:8000" --request="S48K901194" --pkg="ZDEVOPS"' 
        }
    }
  }
}