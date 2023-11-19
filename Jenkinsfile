pipeline {
        agent {
            label 'api'
        }
        options {    
            buildDiscarder logRotator(
                artifactDaysToKeepStr: '', 
                artifactNumToKeepStr: '', 
                daysToKeepStr: '', 
                numToKeepStr: '5'
                )
            timeout(
                activity: true, 
                time: 30
                )
            disableConcurrentBuilds()    
        }
        
        parameters {
            text defaultValue: 'SONAR_TOKEN', name: 'sqp_915ae83994e1ac45468a3280496ebac645c8a0c6'
        }
        stages {
            stage('sonarqube-scan') {
                when {
                    branch 'master'
                }
                steps {
                    sh "echo $SONAR_TOKEN"
                }
            }
        }
        post {
            always {
                 cleanWs(
                    cleanWhenAborted: true,
                    cleanWhenFailure: true,
                    cleanWhenNotBuilt: true,
                    cleanWhenSuccess: true,
                    cleanWhenUnstable: true,
                    deleteDirs: true,
                    notFailBuild: true,
                    disableDeferredWipeout: true,
                    patterns: [[pattern: 'node_modules', type: 'EXCLUDE']]

                 )
            }
        }
    }
