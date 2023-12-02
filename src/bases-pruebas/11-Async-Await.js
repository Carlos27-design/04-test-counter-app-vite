export const getImage = async () => {
  try {
    const apiKey = 'xStR6Xr3vIoLLlPuALILNPQQeP9INQoM';
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = resp.json();
    const { url } = data.images.original;

    return url;
  } catch (err) {
    return 'No se encontro la imagen';
  }
};
