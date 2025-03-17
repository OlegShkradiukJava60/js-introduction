# HW 22

## transform the methods getUserPassword, login, getUserData to asynchrononous function

## all these functions should return promises

### getUserPassword returns promise that moves to resolvd after 1 second with resolve call taking the password 

### get login return promise in the state resolved in 2 seconds if passwword is 'correct' otherwise in the state rejectted with appropriate message

### getUserData returns promise in the state resolved with existing username in 1 second if username exists orerwise in the rejected with appropiate message 

### funStackExample = takes username, call asynchronous getUsername, then call asynhronous logis, then call asynhronous getUserData and then print out user data. if there is some promise in the state rejected(catch) the appropriate message should 