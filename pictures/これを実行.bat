pushd %0\..
dir *.png /b > files.txt
for /f "delims=" %%a in (files.txt) do (
(echo extractbb %%a) >> extract.bat
)
del files.txt
extract.bat