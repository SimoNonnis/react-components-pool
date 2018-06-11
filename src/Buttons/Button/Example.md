It renders a button with required props

```jsx
const onClick = () => true;
<Button onClick={onClick}>Button</Button>;
```

It renders a button with props size "small" and "disabled" true

```jsx
const onClick = () => true;
<Button onClick={onClick} size="small" disabled>
  Button
</Button>;
```

It renders a button with props "disabled" true, "loading" true and size="small"

```jsx
const onClick = () => true;
<Button onClick={onClick} disabled loading size="small">
  Button
</Button>;
```

It renders a button with props "disabled" true and "loading" true

```jsx
const onClick = () => true;
<Button onClick={onClick} disabled loading>
  Button
</Button>;
```

It renders a button with props "disabled" true, "loading" true and size="large"

```jsx
const onClick = () => true;
<Button onClick={onClick} disabled loading size="large">
  Button
</Button>;
```

It renders a button with props styleType="danger"

```jsx
const onClick = () => true;
<Button onClick={onClick} styleType="danger">
  Button
</Button>;
```

It renders a button with props type="danger"

```jsx
const onClick = () => true;
<Button onClick={onClick} type="danger">
  Button
</Button>;
```

It renders a button with props type="secondary"

```jsx
const onClick = () => true;
<Button onClick={onClick} type="secondary">
  Button
</Button>;
```

It renders a button with props size "large" and type="highlight"

```jsx
const onClick = () => true;
<Button onClick={onClick} size="large" type="highlight">
  Button
</Button>;
```

It renders a button with rounded borders

```jsx
const onClick = () => true;
<Button onClick={onClick} rounded={50}>
  Button
</Button>;
```

It renders a button with props type="highlight" and fullWidth 100%

```jsx
const onClick = () => true;
<Button onClick={onClick} type="highlight" fullWidth>
  Button
</Button>;
```
It renders a button with props styleType="link" type="button"

```jsx
const onClick = () => console.log('i look like a link but I am a button!!');
<Button onClick={onClick} styleType="link" type="button">
  Button
</Button>;
```

It renders a button with props type="link"

```jsx
const onClick = () => console.log('i look like a link but I am a button!!');
<Button onClick={onClick} type="link">
  Button
</Button>;
```
