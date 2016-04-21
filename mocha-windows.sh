vagrant up win2012
vagrant winrm win2012 -c ". C:\\vagrant\\run-tests-1.bat | Write-Output"
vagrant reload win2012
vagrant winrm win2012 -c ". C:\\vagrant\\run-tests-2.bat | Write-Output"
vagrant reload win2012
vagrant winrm win2012 -c ". C:\\vagrant\\run-tests-3.bat | Write-Output"
vagrant halt win2012
