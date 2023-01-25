# REACT

## Declarative Approach

> Define the desired state and let React figure out the actual Javascript

## State

> State is the way to tell React to re-evaluate our component function.

```
import React, { useState } from 'react';

    const [title, setTitle] = useState(props.title);
```

useState can change create a kind of variable to store a state of a value the we want and also a function to change this state.

When we call this function to change the state, the hole **component** is reloaded.