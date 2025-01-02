```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: effect runs only once after mount
    setCount(count + 1);
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```