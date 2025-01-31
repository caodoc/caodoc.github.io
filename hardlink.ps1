$folderPath = "C:\.caodoc\Dev\GitHub\caodoc.github.io"  # Change this to your target folder
$outputFile = "hardlinks.txt"  # Output file name

# Get all files in the folder and its subfolders
$files = Get-ChildItem -Path $folderPath -File -Recurse

# Initialize an array to store results
$results = @()

foreach ($file in $files) {
    $results += "Checking hardlinks for: $($file.FullName)"
    
    # Run fsutil.exe and capture its output
    $hardlinkOutput = fsutil.exe hardlink list "$($file.FullName)"
    
    # Add the fsutil output to the results
    $results += $hardlinkOutput
    $results += "-----------------------------------------"
}

# Export the results to a .txt file
$results | Out-File -FilePath $outputFile

Write-Host "Results have been exported to $outputFile"