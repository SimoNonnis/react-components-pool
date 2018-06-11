ProgressBar fill from 0% to 100% to show the progress of a task a for example.
The only required prop is amount:

```jsx
<ProgressBar amount={10} />
```

Progress bar with lightBlue color

```jsx
<ProgressBar amount={40} color="lightBlue2" />
```

Progress bar with orange color showing the amount been passed in %

```jsx
<ProgressBar amount={50} color="orange" showValue />
```

Progress bar with green color showing the raw amount been passed

```jsx
<ProgressBar amount={2} color="green" showRawValue max={3} />
```
