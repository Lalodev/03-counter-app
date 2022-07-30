import { getImagen } from '../../base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
  test('getImagen debe de retornar un URL de la imagen ', async () => {
    const res = await getImagen();
    //console.log(res);

    //expect(typeof res).toBe('string');
    //expect(res).toBe('No se encontro la imagen');
  });
});
