Multiple RadioBoxes with default props

```jsx
initialState = { checked1: false, checked2: true, checked3: false, checked4: false };
<div>
  <RadioBox
    id="banana"
    label="Banana"
    name="fruits"
    checked={state.checked1}
    onChange={() => setState({ checked1: !state.checked1 })}
  />
  <RadioBox
    id="orange"
    label="Orange"
    name="fruits"
    checked={state.checked2}
    onChange={() => setState({ checked2: !state.checked2 })}
  />
  <RadioBox
    id="avocado"
    label="Avocado"
    name="fruits"
    checked={state.checked3}
    onChange={() => setState({ checked3: !state.checked3 })}
  />
  <RadioBox
    id="avocado"
    label="Avocado (disabled)"
    name="fruits"
    disabled
    checked={state.checked4}
    onChange={() => setState({ checked3: !state.checked4 })}
  />
</div>;
```

```jsx
initialState = { checked: false };
<div>
  <RadioBox
    id="longLabel1"
    label="I am a very long label that will wrap to the next line! I am a very long label that will wrap to the next line! I am a very long label that will wrap to the next line!"
    name="longLabel"
    checked={state.checked}
    onChange={() => setState({ checked: !state.checked })}
  />
</div>;
```

```jsx
initialState = { checked: false };
<div>
  <RadioBox
    id="labelWithHtml"
    label={<i>Label with Html</i>}
    name="labelWithHtml"
    checked={state.checked}
    onChange={() => setState({ checked: !state.checked })}
  />
</div>;
```
