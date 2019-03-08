# Cloud9 Workspace Hibernation Preventer
### Another proud project by Simon Cheng
How to install:
```
# And of course, run this in the cloud9 workspace
# Install node 8.9.0
nvm install 8.9.0
nvm alias default 8.9.0
git clone https://github.com/scheng123/stay-active-c9
cd stay-active-c9/
npm install

```
Starting the "Preventer":
```
npm start
## OR ##
node index.js

```
## Important Notes:
You have to have at least node 7.6 and above<br><br>
If you see the "async" error, you have a node version bellow 7.6, c9 automaticly makes your node version 6.11.2, just run `nvm install 8.9.0` and `nvm alias default 8.9.0` again<br><br>
You may see another "you" in your workspace (Its the "Preventer")<br><br>
If you see the error "Page has crashed" or the application exits randomly, probably you set the height and width too big. Use default size in the config or set a smaller size<br><br>
### Enjoy!
