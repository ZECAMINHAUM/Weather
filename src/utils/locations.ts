const getCurrentLocation = (callbackResult: (cords: GeolocationCoordinates) => void) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            callbackResult(position.coords)
        }) 
        return
    }
    callbackResult({
        latitude: 37.39, longitude: -122.08,
        accuracy: 0,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null
    })

}

export { getCurrentLocation }