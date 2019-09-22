export const split = (array) => {
    let result = [];
    let teams = Math.floor(array.length / (array.length / 2));

    while (array.length) {
        result.push(array.splice(0, teams));
    }

    return result;
}