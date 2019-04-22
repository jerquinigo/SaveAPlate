export const geoFindMe = function() {
  return new Promise(function(success) {
    navigator.geolocation.getCurrentPosition(success);
  });
};
