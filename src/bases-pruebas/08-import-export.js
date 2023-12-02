import heroes from '../data/heroes';

export const getHeroeById = (id) => heroes.find((hero) => hero.id === id);

export const getHeroeByOwner = (owner) =>
  heroes.filter((hero) => hero.owner === owner);
