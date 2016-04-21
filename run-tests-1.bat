:: use call so if a program fails, the bat continues to run
:: move to the working directory
cd C:\vagrant\
:: install the package dependencies
call C:\nodejsx64\npm.cmd i
:: run mocha
call C:\Users\vagrant\AppData\Roaming\npm\mocha.cmd test\test-1.js

:: enable UAC
call C:\nodejsx64\node.exe examples\enable.js
