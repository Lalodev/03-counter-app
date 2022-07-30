const fetch = require('node-fetch');

export const getImagen = async () => {
  try {
    const apiKey = 'IHStNSicQYmpAic1LB28i0seo6J0L3p2';
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    console.log(error);
    return 'No se encontro la imagen';
  }
};
