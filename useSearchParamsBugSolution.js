```javascript
import { useSearchParams } from 'react-router-dom';

function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Access searchParams safely using optional chaining
  const myParam = searchParams?.get('myParam'); 

  return (
    <div>
      {searchParams ? ( //Conditional rendering 
        <p>My Param: {myParam}</p>
      ) : (
        <p>Loading...</p> //or other loading indicator
      )}
    </div>
  );
}
```