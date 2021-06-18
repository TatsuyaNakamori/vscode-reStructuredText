echo off

cd /d %~dp0

set workpath=%~dp0pyinstaller_work\build\
set distpath=%~dp0..\win32\

@REM .specを実行
pyinstaller --workpath %workpath% --distpath %distpath% pyinstaller_work\sphinxhelper.spec

pause
