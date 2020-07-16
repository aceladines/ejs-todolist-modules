
//This is a module in order to eport data to different files and make it reusable

exports.getDate = () => {

    const day = new Date();

    const options = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    };

    return day.toLocaleDateString('en-US', options);
}

