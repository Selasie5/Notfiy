export const validateEmail = (email) => {
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export const getInitial = (name) => {
    if (!name) return "";
    const words = name.split(" "); // Split by spaces to get words
    let initials = "";

    for (let i = 0; i < Math.min(words.length, 2); i++) {
        initials += words[i][0]; // Use += to concatenate characters to initials
    }
    return initials.toUpperCase();
}
