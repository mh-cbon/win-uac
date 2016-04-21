:: use call so if a program fails, the bat continues to run
:: move to the working directory
cd C:\vagrant\
call C:\Users\vagrant\AppData\Roaming\npm\mocha.cmd test\test-2.js

:: disable UAC :: should not run...
call C:\nodejsx64\node.exe examples\disable.js
