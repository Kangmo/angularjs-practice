# Prerequisites
## Install Deployd 
```
npm install deployd -g
```

## Install MongoDB
```
brew update
brew install mongodb
```

# Sample proejct
## Create Project
```
dpd create sportsstore
```

## Start the new server
```
cd sportsstore
dpd -p 5500 app.dpd dashboard
```

## Try it
Open your browser with the following address.
```
http://localhost:5500/dashboard/
```
