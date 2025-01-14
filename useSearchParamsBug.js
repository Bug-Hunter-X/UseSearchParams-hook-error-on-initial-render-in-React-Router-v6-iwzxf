In React Router Dom v6,  using the `useSearchParams` hook to manage URL parameters can lead to unexpected behavior if you don't handle the initial render correctly. If you try to access the search params directly in the component's initial render, before the hook has populated the search object, you'll encounter a runtime error, as the `searchParams` object will initially be null.

```javascript
import { useSearchParams } from 'react-router-dom';

function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  // This will cause an error on the initial render
  const myParam = searchParams.get('myParam'); 

  return (
    <div>
      <p>My Param: {myParam}</p>     
    </div>
  );
}
```