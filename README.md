# nodejs-rust-binding

> Compare the process time between Javascript and Nodejs with Rust. Parse whitespaces in string using Rust with Nodejs and on the other side Javascript only.

String to parse:
```javascript
const parseString = '           pB WLRu\t qpBWLRu\t qZ     oCExn   lFV  iX0M   c j  gL@_  at      zNI&nb\t J IA    ';
```

## Setup

#### install rust
[Start with Rust]( https://www.rust-lang.org/en-US/install.html "Rust")

#### install nvm (node version manager)
[mac/linux](https://github.com/creationix/nvm#installation "noder version manager linux mac")

[windows]( https://github.com/coreybutler/nvm-windows "noder version manager for windows")
  
***


``` bash

# install neon-cli for rust nodejs binding
$ npm install --global neon-cli

# switch node version to 8.9.4
$ nvm use

# enter neon folder
$ cd neon

# install dependencies
$ npm install

# compile rust
$ neon build

# back to project directory
$ cd ..

# run script for performance test
$ node parser.js
```


## Results

Note: The function calls were processed in arrays.

| Calls  | Native  | Rust |   
|---|---|---|
|  1 | 0.0422 ms | 0.0154 ms |
|  200 | 0.4364 ms | 0.4548 ms |
|  500 | 1.3348 ms | 1.1595 ms | 
|  1000 | 2.5211 ms | 4.4674 ms | 
|  1500 | 3.7939 ms | 4.3629 ms | 
|  1800 | 5.4781 ms | 3.209 ms | 
|  2000 | 7.3445 ms | 3.4855 ms | 
|  10000 | 20.9384 ms | 16.8017 ms | 


### conclusion

The actual parsing is done with Rust in half the time, but with several function calls the V8 takes effect and the garbage collector do his work.
