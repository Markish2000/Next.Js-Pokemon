import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

const getInitialState = (): PokemonsState => {
  const favorites = JSON.parse(
    localStorage.getItem('favorite-pokemons') ?? '{}'
  );

  return favorites;
};

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      }

      state.favorites[id] = pokemon;
    },
  },
});

export const { setFavoritePokemons, toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
