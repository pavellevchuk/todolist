export const register  = ({name, email, password}) => {
    let users = JSON.parse(localStorage.getItem('users'));

    let isAlreadyRegistered = users.find(user => user.email === email);
    if(isAlreadyRegistered){
        return {
            status: 'error',
            description: 'User with this email is already registered',
        }
    }

    let usersCopy = [...JSON.parse(localStorage.getItem('users'))];
    let newUser = { name, email, password, id: usersCopy.length };

    usersCopy.push(newUser);

    localStorage.setItem('users', JSON.stringify(usersCopy));

    return {
        status: 'success',
        description: 'User registered successfully',
        user: newUser
    }
}

export const login = ({email, password}) => {
    let user = JSON.parse(localStorage.getItem('users')).find(user => user.email === email);
    if(!user){
        return {
            status: 'error',
            description: 'Login error',
        }
    }

    if(user.password === password){
        user.loggedIn = true;
        return {
            status: 'success',
            description: 'Login successful',
            user
        }
    }

    return {
        status: 'error',
        description: 'Login error',
    }
}

export const setUser = user => ({
    type: 'SET_USER',
    user
})
