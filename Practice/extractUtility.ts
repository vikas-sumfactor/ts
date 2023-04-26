type Person = {
    id: string,
    name: string,
    email: string,
  };

type Animal = {
    id: string,
    name: string,
    species: string,
  };
  
  /** Use Extract to get the common keys */
  type CommonKeys = Extract<keyof Person, keyof Animal>;
  
  /** 
   * Map over the keys to find the common structure 
   * Same as `{ id: string, name: string }`
   **/
  type Base = {
    [K in CommonKeys]: (Animal & Person)[K]
  };