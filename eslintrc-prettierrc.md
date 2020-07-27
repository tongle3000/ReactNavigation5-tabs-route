##  eslint & prettier
    // 在对象或数组最后一个元素后面是否加逗号: none never 表示不加
    ① trailingComma: "none",         
    ① "comma-dangle": [1, "never"], 

## settings.json
    {
        "git.autofetch": true,
        "editor.fontSize": 14,
        "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
        "window.zoomLevel": 0,
        "typescriptHero.imports.disableImportRemovalOnOrganize": true,
        "typescriptHero.imports.organizeOnSave": true,
        "editor.tabSize": 4,
        "[typescript]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[typescriptreact]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "javascript.updateImportsOnFileMove.enabled": "always",
        "timeline.excludeSources": []
    }

##  "lint": "eslint . --ext .js,.jsx,.ts,.tsx"