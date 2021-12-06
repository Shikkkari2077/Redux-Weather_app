
export const setWeather = (weather) => {
   return{
       type:'FETCH_WEATHER',
       payload:weather
   }
}