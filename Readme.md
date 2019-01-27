### Install dependencies

    yarn install

### Run

    yarn start

### check # of processes spawned every minute or so

    ps aux | grep node_modules/bull/lib/process/master.js | wc -l
