+++
title = "How to install Oh My Posh on Windows"
date = "2023-09-02"
description = "Installation & Customization for Oh My Posh on Windows."
+++

## About Oh My Posh
Oh My Posh is a prompt theme engine for any shell, makes your terminal looks better than its default interface.

For example:

![Example](https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/website/static/img/accordeon.png)

## Installation
1. Oh My Posh:

To download **ohmyposh.exe** and all the [themes](https://ohmyposh.dev/docs/themes), open a powershell window and run:

```
winget install JanDeDobbeleer.OhMyPosh -s winget
```

2. Font:

After that, you will need a suitable font. I recommend you should use [Fire Code](https://github.com/tonsky/FiraCode) font.

## Setting up
1. Font:

You can change the font on the terminal by doing:

> Setting -> Default -> Appearance -> Text -> Font face

2. New profile:

- Create a new profile:

```
New-Item -Path $PROFILE -Type File -Force
```

This will create a new profile in the [Documents\WindowsPowerShell]() folder.

- Note: you can open new profile file by running

```
notepad $PROFILE
```

- Add configuration:
```
oh-my-posh.exe init pwsh --config "Path to your theme" | Invoke-Expression
```

- Replace [Path to your theme]() with theme location.

- Theme folder: [%USERNAME%\AppData\Local\Programs\oh-my-posh\themes]() ([Theme previews](https://ohmyposh.dev/docs/themes))

For example:
```
oh-my-posh.exe init pwsh --config "A:\Users\ADMIN\AppData\Local\Programs\oh-my-posh\themes\uew.omp.json" | Invoke-Expression
```

Save & re-open terminal. If everything works fine, you will see the change applied.

## Bottom line
That is all you need to install Oh My Posh on Windows.

If you have any errors, you can ask me through my social media accounts or open an issue on [Oh My Posh Github](https://github.com/jandedobbeleer/oh-my-posh).

Oh My Posh official website: [ohmyposh.dev](https://ohmyposh.dev/)