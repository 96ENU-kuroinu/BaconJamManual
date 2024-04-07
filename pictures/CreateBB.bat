pushd %~dp0
IF EXIST extract.bat DEL  /Q extract.bat
dir *.png /b > files.txt
for /f "delims= " %%a in (files.txt) do (
(echo extractbb %%a) >> extract.bat
)
DEL /Q files.txt
extract.bat

