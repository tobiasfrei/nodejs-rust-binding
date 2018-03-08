# rust-nodejs-parser

Example of a Rust-Nodejs binding and performance test.
Parse whitespaces in string using Rust and native Javascript.


## Build Setup

### install rust
https://www.rust-lang.org/en-US/install.html


``` bash

# install neon-cli for rust nodejs bindings
$ npm install --global neon-cli

# switch node version to 8.9.4
$ nvm use

# install dependencies
$ npm install

# run script for performance test
$ node parser.js
```


## Results

Note: The function calls were processed in arrays for the measurements.

1 call
------
js function : 0.0422 ms
Rust Library: 0.0154 ms

200 calls
------
js function : 0.4364 ms
Rust Library: 0.4548 ms

500 calls
------
js function : 1.3348 ms
Rust Library: 1.1595 ms

1000 calls
------
js function : 2.5211 ms
Rust Library: 4.4674 ms

1500 calls
------
js function : 3.7939 ms
Rust Library: 4.3629 ms

1800 calls
------
js function : 5.4781 ms
Rust Library: 3.209 ms

2000 calls
------
js function : 7.3445 ms
Rust Library: 3.4855 ms

10000 calls
------
js function : 20.9384 ms
Rust Library: 16.8017 ms


## conclusion

The actual parsing is done with Rust in half the time, but with several function calls the V8 takes effect and the garbage collector shows its effect. However, this will change after 1800 serial calls and Rust performs much faster.
