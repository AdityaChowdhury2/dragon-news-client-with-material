export const getCurrentDate = () => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const currentDate = new Date().toLocaleDateString('en-US', options);
    return currentDate;
}