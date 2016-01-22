# Anagramator
Anagramator is a Node.js application that lists out sets of anagrams from a text file containing words. The text file must contain a word per line.
Anagramator is case sensitive and treats every character equally e.g apostrophes are treated the same way as alphabets.

I have sacrificed a bit of performance for a more SOLID code.

### Prerequisites
You should have Node.js v5.0.0 or later installed on your machine. This application has been tested with Node.js v5.0.0, I cannot guarantee it will work with lower versions.
Node.js installation can be found at found at https://nodejs.org/.

### How to run

Clone this repository by running the command: 
```sh
git clone https://github.com/Aghudum/anagrams.git
```
navigate to root folder (anagrams) then run the following:
 ```sh
npm install
node runner.js  
```
### Running unit tests
On the command line run the following:
```sh
install -g jasmine
jasmine
```
