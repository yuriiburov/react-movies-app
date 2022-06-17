const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '0035d6e240e76c6b69665d2a9c0351b5',
  originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig
