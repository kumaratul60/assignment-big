export const findGame = (array, id) => (array.filter(game => game.find(player => player.id === id)))[0];
export const findGameIndex = (array, id) => array.findIndex(game => game.find(player => player.id === id));
export const findPlayerIndex = (array, id) => array.findIndex(player => player.id === id);