# This script will update your Git remote URL with a Personal Access Token
# Replace YOUR_TOKEN_HERE with your actual GitHub Personal Access Token

param(
    [Parameter(Mandatory=$true)]
    [string]$token
)

Write-Host "Updating remote URL with your token..."

# Update the remote URL with the token
git remote set-url origin "https://$token@github.com/jenish2917/Ashraya_web.git"

Write-Host "Remote URL updated successfully!"
Write-Host "New remote URL (with token hidden):"
Write-Host "https://TOKEN@github.com/jenish2917/Ashraya_web.git"

Write-Host "`nYou should now be able to push your changes."
