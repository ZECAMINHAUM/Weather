const getCurrentLocation = (callbackResult: (cords: GeolocationCoordinates) => void) => {
    navigator.geolocation.getCurrentPosition((position) => {
        callbackResult(position.coords)
    }) 
}

export { getCurrentLocation }