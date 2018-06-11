Select with no errors

```jsx
options = [
  {
    name: 'Option 1',
    value: 'option-1',
  },
  {
    name: 'Option 2',
    value: 'option-2',
  },
  {
    name: 'Option 3',
    value: 'option-3',
  },
  {
    name: 'Option 4',
    value: 'option-4',
  },
];

<Select id="1" value="" onChange={() => {}} label="Hours" error="" options={options} />;
```

Select required

```jsx
<Select id="2" value="option-2" onChange={() => {}} label="Hours" required options={options} />
```

Select disabled

```jsx
<Select id="3" disabled value="option-2" onChange={() => {}} label="Hours" required options={options} />
```

Select with errors

```jsx
<Select
  id="4"
  value="option-3"
  onChange={() => {}}
  label="Hours"
  error="Error message"
  required
  options={options}
/>
```
