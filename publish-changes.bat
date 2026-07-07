@echo off
REM Double-click this file after editing the site to publish your changes.
cd /d "%~dp0"
git add -A
git commit -m "Update cheat sheet content"
git push
echo.
echo Done! Changes go live at https://gflandreau.github.io/RStudio-Cheat-Sheet within a minute or two.
pause
