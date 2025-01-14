# React Router v6 useSearchParams Hook Error on Initial Render

This repository demonstrates a common error encountered when using the `useSearchParams` hook in React Router v6.  The error arises from attempting to access search parameters before the hook has populated its value. This example shows the error and provides a solution.

## Problem

The `useSearchParams` hook returns an array where the first element is a `SearchParams` object.  Attempting to access properties of this object before it is initialized will cause a runtime error.

## Solution

The solution is to conditionally render the component's content only after the hook has returned a valid `SearchParams` object. This is typically achieved through optional chaining or a check for null.