# Sample Parity NoddeJS APP (potentially obsolete - 9th Jan 2024)

installed python2 from python website<https://www.python.org/downloads/release/python-2718/>
npm config set python /usr/local/bin/python2

npm i @truffle/blockchain-utils @truffle/contract @ensdomains/ens-contracts -S
npm i uuid -S
npm i   -S

deprecated truffle-contract@1.1.11: WARNING: This package has been renamed to @truffle/contract.

stack Error: Can't find Python executable "python", you can set the PYTHON env variable.   export PYTHON=python ?? will this do

gyp verb check python checking for Python executable "python2" in the PATH


Application / Project Setup

1) Git pull this project repository from git hub
2) cd sampleParityNodeJsApp   <== Go to project folder
3) npm install  <== Installs dependencies
4) npm run mongoDB-restore  (OR) mongorestore --drop -d localDB 'data/mongoDBdump/localDB',   may need to added --host mongoDB_server_ip:Port to this command
5) Update ==> Blockchain & MongoDB servers <== in Server Configuarations file :  sampleParityNodeJsApp\src\tools\serverConfig.js
6) npm start  <== Starts application serving on the port assigned to APPLICATION_SERVER_BACKEND_PORT constant
  in serverConfig.js, initial set to port 5000
7) login to application as user: mohan@testfed.com,  password: pwd
    a) ???????????????????

==>  You should be all set to use the application  <==