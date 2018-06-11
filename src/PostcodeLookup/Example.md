Basic example

```jsx
const ExamplePostcodeLookup = require('./example').default;
<ExamplePostcodeLookup />;
```

Example with address passed to PostcodeLookup

```jsx
const ExamplePostcodeLookup = require('./example').default;
<ExamplePostcodeLookup
  address={{
    id: '52509479',
    sub_building: '',
    building_name: '',
    building_number: '68',
    street: 'Basin Road',
    town: 'Worcester',
    county: 'Worcestershire',
    postcode: 'WR5 3DA',
  }}
/>;
```

Example with prefilled address and readOnly prop

```jsx
const ExamplePostcodeLookup = require('./example').default;
<ExamplePostcodeLookup
  address={{
    id: '52509480',
    sub_building: null,
    building_name: null,
    building_number: '68',
    street: 'Basin Road',
    town: 'Worcester',
    county: 'Worcestershire',
    postcode: 'WR5 3DC',
  }}
  readOnly
/>;
```
