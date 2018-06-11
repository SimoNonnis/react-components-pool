Input with no Label

```jsx
<Input id="1" />
```

Input password with Label

```jsx
<Input label="Password" type="password" id="2" required />
```

Input Date with Label

```jsx
<Input label="Date of birth" type="date" id="3" />
```

Input Date with Label and disabled

```jsx
<Input label="Date of birth" disabled type="date" id="4" />
```

Input Text with Label, Required and disabled

```jsx
<Input label="Email" type="text" id="5" disabled required />
```

Input email with error

```jsx
<Input label="Email" type="email" id="6" error="Insert a valid email" required />
```

Input with HTML as a label

```jsx
<Input
  label={
    <span>
      First name <span>(must be full legal name)</span>
    </span>
  }
  id="7"
  required
/>
```
