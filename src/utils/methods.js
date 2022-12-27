export const isValidObjField = (obj) => {
    return Object.values(obj).every(value => value.trim())

}


export const updateError = (error, stateupdater) => {
    stateupdater(error);
    setTimeout(() => {
        stateupdater('')
    }, 2500);
}

//function for valid email
export const isValidEmail = (value) => {
    const regx = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return regx.test(value)

}