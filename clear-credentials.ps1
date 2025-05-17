# This script will clear Git credentials from the credential manager
# and force Git to ask for your credentials again

Write-Host "Clearing Git credentials from Windows Credential Manager..."

# Clear Git credentials
cmdkey /delete:git:https://github.com

Write-Host "Git credentials have been cleared."
Write-Host "The next time you push, Git will prompt you to enter your GitHub username and password."
Write-Host "Make sure to use your jenish2917 GitHub account and password (or token)."
