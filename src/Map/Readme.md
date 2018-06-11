``` js
function onChange(coords) {
    console.log('New coordinates: ', coords);
  }
 <MapContainer
    location={{
      lat: 41.9,
      lng: -87.624,
    }}
    onChange={onChange}
    />
```
