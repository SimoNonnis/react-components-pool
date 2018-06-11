It renders a internal link to look like a button

```jsx
<ButtonLink to="/internal">Button</ButtonLink>
```

It renders a external link to look like a button

```jsx
<ButtonLink to="http://www.external.com" external>
  Button
</ButtonLink>
```

It renders a button with props size "small" true

```jsx
<ButtonLink to="/internal" size="small">
  Button
</ButtonLink>
```

It renders a button with styleType="secondary"

```jsx
<ButtonLink to="/internal" styleType="secondary">
  Button
</ButtonLink>
```

It renders a button with props type="secondary"

```jsx
<ButtonLink to="/internal" type="secondary">
  Button
</ButtonLink>
```

It renders a button with props size "large" and type="highlight"

```jsx
<ButtonLink to="/internal" size="large" type="highlight">
  Button
</ButtonLink>
```

It renders a button with rounded borders

```jsx
<ButtonLink to="/internal" rounded={50}>
  Button
</ButtonLink>
```

It renders a button with props type="highlight" and fullWidth 100%

```jsx
<ButtonLink to="/internal" type="highlight" fullWidth>
  Button
</ButtonLink>
```
