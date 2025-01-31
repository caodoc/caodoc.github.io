$folderPath = "C:\.caodoc\Dev\GitHub\caodoc.github.io"  # Change this to your target folder
$outputFile = "symlinks.txt"  # Output file name

# Get all files and directories in the folder and its subfolders
$items = Get-ChildItem -Path $folderPath -Recurse

# Initialize an array to store results
$results = @()

foreach ($item in $items) {
    # Check if the item is a symlink
    if ($item.Attributes -match "ReparsePoint") {
        $result = "Symlink found: $($item.FullName)"
    } else {
        $result = "Not a symlink: $($item.FullName)"
    }
    # Add the result to the array
    $results += $result
    $results += "-----------------------------------------"
}

# Export the results to a file
$results | Out-File -FilePath $outputFile

Write-Host "Results have been exported to $outputFile"