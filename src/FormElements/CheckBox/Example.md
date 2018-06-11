CheckBox with default props

```jsx
initialState = { checked: true };

<CheckBox
  id="yes"
  label="Yes"
  name="choice"
  checked={state.checked}
  onChange={() => setState({ checked: !state.checked })}
/>;
```

```jsx
initialState = { checked: true };

<CheckBox
  id="yes1"
  label="I am a very long label and i am hopeing that i will wrap to the next line as i need to test! I am a very long label and i am hopeing that i will wrap to the next line as i need to test!"
  name="choice"
  checked={state.checked}
  onChange={() => setState({ checked: !state.checked })}
/>;
```

Checkbox with label as styled component
```jsx
initialState = { checked: true };
const LabelComp = require('./style').ExampleLabel;
<CheckBox
  id="yes2"
  label={<LabelComp>Label</LabelComp>}
  name="choice"
  checked={state.checked}
  onChange={() => setState({ checked: !state.checked })}
/>;
```

Checkbox with label as HTML element
```jsx
initialState = { checked: true };
<CheckBox
  id="yes3"
  label={<div>Label</div>}
  name="choice"
  checked={state.checked}
  onChange={() => setState({ checked: !state.checked })}
/>;
```

Checkbox with label as function
```jsx
initialState = { checked: true };
const LabelComp = require('./style').ExampleLabel;
<CheckBox
  id="yes4"
  label={() => <div>Label</div>}
  name="choice"
  checked={state.checked}
  onChange={() => setState({ checked: !state.checked })}
/>;
```

CheckBox with error

```jsx
initialState = { checked: false };

<CheckBox
  id="iagree"
  label="I agree"
  name="choice1"
  error="error string"
  checked={state.checked}
  onChange={() => setState({ checked: !state.checked })}
/>;
```

Multiple CheckBoxes with default props

```jsx
initialState = { checked1: false, checked2: true, checked3: false, checked4: false };
<div>
  <CheckBox
    id="london"
    label="London"
    name="cities"
    checked={state.checked1}
    onChange={() => setState({ checked1: !state.checked1 })}
  />
  <CheckBox
    id="rome"
    label="Rome"
    name="cities"
    checked={state.checked2}
    onChange={() => setState({ checked2: !state.checked2 })}
  />
  <CheckBox
    id="madrid"
    label="Madrid"
    name="cities"
    checked={state.checked3}
    onChange={() => setState({ checked3: !state.checked3 })}
  />
  <CheckBox
    id="madrid"
    label="Madrid (disabled)"
    name="cities"
    disabled
    checked={state.checked4}
    onChange={() => setState({ checked3: !state.checked4 })}
  />
</div>;
```
